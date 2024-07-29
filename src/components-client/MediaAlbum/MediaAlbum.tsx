import { useEffect, useState } from 'react'

import type { MediaAlbum, MediaFile } from './support/model.ts'
import { getTnForAlbum, getTnVariant } from './support/get-tn.ts'

import MediaFileViewer from '../MediaFileViewer/MediaFileViewer.tsx'
import { buildBreadcrumbs } from './support/build-breadcrumbs.ts'
import BreadCrumbBar from './support/BreadCrumbBar.tsx'

const MEDIA_ROOT_URL = import.meta.env.PUBLIC_KALIATECH_MEDIA_ROOT_URL

export interface MediaAlbumProps {
  albumId: string
}

export default function MediaAlbum(props: MediaAlbumProps) {
  const [activeMediaFileId, setActiveMediaFileId] = useState<string>()
  const [mediaAlbum, setMediaAlbum] = useState<MediaAlbum>()

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // useEffect(() => {
  //   window.navigation.addEventListener("navigate", (event) => {
  //     console.log('location changed!');
  //   })
  // }, [])

  useEffect(() => {
    const loadJson = async () => {
      const queryParams = new URLSearchParams(window.location.search)
      const subalbumPath = queryParams.get('subalbum') || ''
      const mediafile = queryParams.get('mediafile') || ''

      try {
        setIsLoading(true)
        setError('')
        const albumJsonUrl = `${MEDIA_ROOT_URL}${subalbumPath ? subalbumPath : '/' + props.albumId}/album.json`
        const albumJsonResp = await fetch(albumJsonUrl)
        // console.log('albumId', props.albumId)
        // console.log('subalbumPath', subalbumPath)
        // console.log('albumJsonUrl', albumJsonUrl)
        // console.log('mediafile', mediafile)

        if (albumJsonResp.ok) {
          setMediaAlbum((await albumJsonResp.json()) as MediaAlbum)
          setActiveMediaFileId(mediafile)
        } else {
          setError(albumJsonResp?.statusText)
        }
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setIsLoading(false)
      }
    }
    loadJson()
  }, [props.albumId])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error || !mediaAlbum) {
    return (
      <>
        <h2>Error</h2>
        <p>Error loading photo mediaAlbum. Message: {error}</p>
      </>
    )
  }

  // const subAlbums = Object.entries(mediaAlbum.sub_albums) as [string, MediaAlbum][]
  // const mediaFiles = Object.entries(mediaAlbum.media_files) as [string, MediaFile.tsx][]
  const subAlbums = mediaAlbum.sub_albums.map((record) => record[1])

  subAlbums.sort((a, b) => a.title.localeCompare(b.title)).reverse()

  const mediaFiles = new Map(mediaAlbum.media_files.map<[string, MediaFile]>((record) => record))

  const bcs = buildBreadcrumbs(window.location, mediaAlbum)

  return (
    <>
      <BreadCrumbBar bcs={bcs} />
      <div className="media-gallery">
        {mediaFiles.size > 0 && (
          <>
            <h2>{mediaAlbum.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from(mediaFiles.entries()).map(([mediaFilePath, mediaFile]) => {
                const mfTnVariant = getTnVariant(mediaFile)
                const mfTnUrl = mfTnVariant ? MEDIA_ROOT_URL + mfTnVariant.path : ''
                const mfUrl = `../photos/${props.albumId}?subalbum=${mediaAlbum.path}&mediafile=${mediaFilePath}`
                return (
                  <div key={mediaFile.path} className="mr-2">
                    <div key={mediaFilePath}>
                      <a
                        href={mfUrl}
                        className="m-0"
                        onClick={(evt) => {
                          evt.preventDefault()
                          setActiveMediaFileId(mediaFilePath)
                        }}
                      >
                        <div className="rounded-lg">
                          <img
                            className="mb-0 mt-0 rounded-lg border-2 border-white/50 dark:border-gray-300/50"
                            src={mfTnUrl}
                            alt={mediaFile.title}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        {subAlbums.length > 0 && (
          <>
            <hr className={'mb-2 mt-0'} />
            {subAlbums.length > 0 && mediaFiles.size > 0 && <h3>Sub Albums</h3>}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {subAlbums.map((subAlbum) => {
                const subAlbumPath = subAlbum.path
                const subAlbumTnVariant = getTnForAlbum(subAlbum)
                const subAlbumTnUrl = subAlbumTnVariant
                  ? MEDIA_ROOT_URL + subAlbumTnVariant.path
                  : ''
                const subAlbumUrl = `../photos/${props.albumId}?subalbum=${subAlbumPath}`
                return (
                  <div key={subAlbum.path} className="mr-8">
                    <div
                      key={subAlbumPath}
                      className="prose:hover:no-underline prose-a:hover:no-underline"
                    >
                      <a href={subAlbumUrl} className="m-0 w-full">
                        <h2 className="mb-0 mt-8">{subAlbum.title}</h2>

                        <div className="images-stack images-stack-dark aspect-video w-full rounded-lg">
                          {subAlbumTnUrl && (
                            <img
                              className="mb-0 mt-0 aspect-video rounded-lg border-2 border-white/50 dark:border-gray-300/50"
                              src={subAlbumTnUrl}
                              alt={subAlbum.title}
                            />
                          )}
                          {!subAlbumTnUrl && (
                            <div className="mb-0 mt-0 flex aspect-video w-full rounded-lg border-2 border-white/50 dark:border-gray-300/50">
                              <div className="flex w-full items-center justify-center text-center text-gray-400">
                                {subAlbum.title}
                                <br />
                                (no thumbnail)
                              </div>
                            </div>
                          )}
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
      <MediaFileViewer mediaAlbum={mediaAlbum} mediaFileId={activeMediaFileId} />
    </>
  )
}
