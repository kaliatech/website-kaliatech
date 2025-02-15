import * as React from 'react'
import Video from 'yet-another-react-lightbox/plugins/video'
import Lightbox, { type Slide, type SlideImage, type SlideVideo } from 'yet-another-react-lightbox'
import Download from 'yet-another-react-lightbox/plugins/download'

import 'yet-another-react-lightbox/styles.css'
import type { MediaAlbum } from '../MediaAlbum/support/model.ts'
import { sortVariantsBySize } from './support/get-primary-variant.ts'
import { useEffect, useState } from 'react'
import { getMfFromUrl } from './support/get-mf-from-url.ts'

export interface MediaFileProps {
  mediaAlbum: MediaAlbum
  mediaFileId: string | undefined
}

const MEDIA_ROOT_URL = import.meta.env.PUBLIC_KALIATECH_MEDIA_ROOT_URL

const getSlideIndex = (slides: Slide[], mediaPathOrSrcUrl: string): number => {
  return slides.findIndex((slide) => {
    if (slide.type === 'image' && slide.src.includes(mediaPathOrSrcUrl)) {
      return true
    }
    if (slide.type === 'video') {
      return slide.sources.findIndex((source) => source.src.includes(mediaPathOrSrcUrl)) !== -1
    }
    return false
  })
}

export default function MediaFileViewer(props: MediaFileProps) {
  const [open, setOpen] = useState(!!props.mediaFileId)

  const [currIndex, setCurrIndex] = useState<number>(0)

  const [slides, setSlides] = useState<Slide[]>([])

  const [scrollPosition, setScrollPosition] = useState(0)

  const ref = React.useRef(null)
  //  const controller = useController()

  useEffect(() => {
    if (props.mediaFileId && slides.length > 0) {
      const initIndex = getSlideIndex(slides, props.mediaFileId)
      if (initIndex !== -1) {
        setCurrIndex(initIndex)
        setOpen(true)
        //document.documentElement.style.overflowY = 'hidden'
        const el = document.getElementsByClassName('media-gallery').item(0) as HTMLElement
        if (el) {
          setScrollPosition(window.scrollY)
          el.style.display = 'none'
        }
      }
    }
  }, [props.mediaFileId, slides])

  useEffect(() => {
    const slides: Slide[] = props.mediaAlbum.media_files
      .filter((mfRecord) => mfRecord[1].variants.length > 0)
      .flatMap<Slide>((mediaFileRecord) => {
        const mediaFile = mediaFileRecord[1]
        const variants = sortVariantsBySize(mediaFile)
        const pVariant = variants[variants.length - 1]
        let slide: Slide
        if (mediaFile.media_type == 'IMAGE') {
          slide = {
            type: 'image',
            src: `${MEDIA_ROOT_URL}${pVariant?.path}`,
            alt: mediaFile.title,
            width: pVariant?.width || 0,
            height: pVariant?.height || 0,
            srcSet: variants
              .filter((variant) => !variant.is_thumbnail)
              .map((variant) => {
                return {
                  src: `${MEDIA_ROOT_URL}${variant.path}`,
                  width: variant.width,
                  height: variant.height,
                }
              }),
            download: `${MEDIA_ROOT_URL}${pVariant?.path}`,
          }
        } else {
          slide = {
            type: 'video',
            width: pVariant?.width || 0,
            height: pVariant?.height || 0,
            sources: variants
              .filter((variant) => !variant.is_thumbnail)
              .map((variant) => {
                return {
                  src: `${MEDIA_ROOT_URL}${variant.path}`,
                  width: variant.width,
                  height: variant.height,
                  type: variant.mime_type,
                }
              }),
            download: `${MEDIA_ROOT_URL}${pVariant?.path}`,
            poster: `${MEDIA_ROOT_URL}${pVariant?.path}`,
          }
        }
        return slide
      })
    setSlides(slides)
  }, [props.mediaAlbum])

  useEffect(() => {
    window.addEventListener('popstate', (_evt) => {
      console.log('User clicked back button', window.location)
      const url = new URL(window.location.toString())
      const mfId = url.searchParams.get('mediafile')
      if (mfId) {
        console.log('mfId', decodeURIComponent(mfId || ''))
        const slideIndex = getSlideIndex(slides, mfId)
        console.log('slideIndex', slideIndex)
        if (slideIndex !== currIndex) {
          setCurrIndex(slideIndex)
        }
        setOpen(true)
      } else {
        setOpen(false)
      }
    })
  }, [currIndex, slides])

  return (
    <>
      <Lightbox
        controller={{ ref, closeOnBackdropClick: true }}
        //on={{ click: () => ref.current?.close() }}
        open={open}
        close={() => {
          //document.documentElement.style.overflowY = 'scroll'
          const el = document.getElementsByClassName('media-gallery').item(0) as HTMLElement
          if (el) {
            el.style.display = 'block'
            window.scrollTo(0, scrollPosition)
          }

          setOpen(false)
          const url = new URL(window.location.toString())
          url.searchParams.delete('mediafile')
          window.history.pushState({}, '', url)
        }}
        slides={slides}
        index={currIndex}
        plugins={[Download, Video]}
        video={{ autoPlay: true }}
        noScroll={{ disabled: true }}
        on={{
          view: ({ index }) => {
            let slideSrcUrl: string = ''
            if (slides[index]?.type === 'image') {
              slideSrcUrl = (slides[index] as SlideImage).src
            } else if (slides[index]?.type === 'video') {
              slideSrcUrl = (slides[index] as SlideVideo).sources[0]?.src ?? ''
            }

            const mf = getMfFromUrl(
              props.mediaAlbum.media_files.map((mfr) => mfr[1]),
              slideSrcUrl,
            )

            const url = new URL(window.location.toString())
            if (url.searchParams.get('mediafile') !== mf?.path) {
              url.searchParams.set('mediafile', mf?.path || '')
              window.history.pushState({}, '', url)
            }
          },
        }}
      />
    </>
  )
}
