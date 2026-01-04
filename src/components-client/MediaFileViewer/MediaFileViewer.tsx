import { useEffect, useRef, useState } from 'react'
import Lightbox, { type Slide, type SlideImage, type SlideVideo } from 'yet-another-react-lightbox'
import Download from 'yet-another-react-lightbox/plugins/download'
import Video from 'yet-another-react-lightbox/plugins/video'
import 'yet-another-react-lightbox/styles.css'

import type { MediaAlbum } from '../MediaAlbum/support/model.ts'
import { getMfFromUrl } from './support/get-mf-from-url.ts'
import { sortVariantsBySize } from './support/get-primary-variant.ts'

export interface MediaFileProps {
  mediaAlbum: MediaAlbum
  mediaFileId: string | undefined
  onSlideChange: (mediaFilePath: string) => void
}

const MEDIA_ROOT_URL = import.meta.env.PUBLIC_KALIATECH_MEDIA_ROOT_URL

const getSlideIndex = (slides: Slide[], mediaPathOrSrcUrl: string): number => {
  return slides.findIndex((slide) => {
    if (slide.type === 'image') {
      return slide.src.includes(mediaPathOrSrcUrl)
    }
    if (slide.type === 'video') {
      return slide.sources.some((source) => source.src.includes(mediaPathOrSrcUrl))
    }
    return false
  })
}

export default function MediaFileViewer(props: MediaFileProps) {
  const [open, setOpen] = useState(!!props.mediaFileId)
  const [currIndex, setCurrIndex] = useState<number>(0)
  const [slides, setSlides] = useState<Slide[]>([])

  const ref = useRef(null)
  const lastNotifiedIndexRef = useRef<number>(-1)
  const isInitializedRef = useRef<boolean>(false)

  useEffect(() => {
    if (props.mediaFileId && slides.length > 0) {
      const initIndex = getSlideIndex(slides, props.mediaFileId)
      if (initIndex !== -1) {
        setCurrIndex(initIndex)
        lastNotifiedIndexRef.current = initIndex
        isInitializedRef.current = false
        setOpen(true)
      }
    } else if (!props.mediaFileId) {
      setOpen(false)
      lastNotifiedIndexRef.current = -1
      isInitializedRef.current = false
    }
  }, [props.mediaFileId, slides])

  useEffect(() => {
    const slides: Slide[] = props.mediaAlbum.media_files
      .filter((mfRecord) => mfRecord[1].variants.length > 0)
      .flatMap<Slide>((mediaFileRecord) => {
        const mediaFile = mediaFileRecord[1]
        const variants = sortVariantsBySize(mediaFile)
        const pVariant = variants[variants.length - 1]
        const nonThumbnailVariants = variants.filter((variant) => !variant.is_thumbnail)

        if (mediaFile.media_type === 'IMAGE') {
          return {
            type: 'image',
            src: `${MEDIA_ROOT_URL}${pVariant?.path}`,
            alt: mediaFile.title,
            width: pVariant?.width || 0,
            height: pVariant?.height || 0,
            srcSet: nonThumbnailVariants.map((variant) => ({
              src: `${MEDIA_ROOT_URL}${variant.path}`,
              width: variant.width,
              height: variant.height,
            })),
            download: `${MEDIA_ROOT_URL}${pVariant?.path}`,
          }
        } else {
          return {
            type: 'video',
            width: pVariant?.width || 0,
            height: pVariant?.height || 0,
            sources: nonThumbnailVariants.map((variant) => ({
              src: `${MEDIA_ROOT_URL}${variant.path}`,
              width: variant.width,
              height: variant.height,
              type: variant.mime_type,
            })),
            download: `${MEDIA_ROOT_URL}${pVariant?.path}`,
            poster: `${MEDIA_ROOT_URL}${pVariant?.path}`,
          }
        }
      })
    setSlides(slides)
  }, [props.mediaAlbum])

  return (
    <Lightbox
      controller={{ ref, closeOnBackdropClick: true }}
      open={open}
      close={() => {
        setOpen(false)
        props.onSlideChange('')
      }}
      slides={slides}
      index={currIndex}
      plugins={[Download, Video]}
      video={{ autoPlay: true }}
      noScroll={{ disabled: true }}
      on={{
        view: ({ index }) => {
          // First view after opening/changing - just mark as initialized
          if (!isInitializedRef.current) {
            isInitializedRef.current = true
            lastNotifiedIndexRef.current = index
            return
          }

          // Only notify parent if the index actually changed
          if (index === lastNotifiedIndexRef.current) {
            return
          }

          lastNotifiedIndexRef.current = index

          const slide = slides[index]
          const slideSrcUrl =
            slide?.type === 'image'
              ? (slide as SlideImage).src
              : (slide as SlideVideo).sources[0]?.src ?? ''

          const mf = getMfFromUrl(
            props.mediaAlbum.media_files.map((mfr) => mfr[1]),
            slideSrcUrl,
          )

          if (mf?.path) {
            props.onSlideChange(mf.path)
          }
        },
      }}
    />
  )
}
