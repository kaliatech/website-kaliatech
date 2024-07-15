import { useEffect, useState } from 'react'

import type { MediaAlbum, MediaFile } from './support/model.ts'
import { getTnForAlbum, getTnVariant } from './support/get-tn.ts'

export interface MediaAlbumProps {
  albumId: string
  subAlbumPath: string[]
}

export default function MediaAlbum(props: MediaAlbumProps) {
  const [albumJson, setAlbumJson] = useState(null)
  const [album, setAlbum] = useState<MediaAlbum | null>()
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

      try {
        setIsLoading(true)
        setError('')
        const albumJsonUrl = `https://kaliatech-media.s3.amazonaws.com/kt-processor-test1${subalbumPath ? subalbumPath : '/' + props.albumId}/album.json`
        const albumJsonResp = await fetch(albumJsonUrl)
        console.log('albumId', props.albumId)
        console.log('subalbumPath', subalbumPath)
        console.log('albumJsonUrl', albumJsonUrl)

        if (albumJsonResp.ok) {
          setAlbumJson(await albumJsonResp.json())
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
  }, [props.albumId, props.subAlbumPath])

  useEffect(() => {
    setAlbum(albumJson ? (albumJson as MediaAlbum) : null)
  }, [albumJson])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error || !album) {
    return (
      <>
        <h2>Error</h2>
        <p>Error loading photo album. Message: {error}</p>
      </>
    )
  }

  // const subAlbums = Object.entries(album.sub_albums) as [string, MediaAlbum][]
  // const mediaFiles = Object.entries(album.media_files) as [string, MediaFile][]
  const subAlbums = new Map(album.sub_albums.map<[string, MediaAlbum]>((record) => record))

  const mediaFiles = new Map(album.media_files.map<[string, MediaFile]>((record) => record))

  return (
    <>
      {mediaFiles.size > 0 && (
        <>
          <h2>{album.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from(mediaFiles.entries()).map(([mediaFilePath, mediaFile]) => {
              const mfTnVariant = getTnVariant(mediaFile)
              const mfTnUrl = mfTnVariant
                ? 'https://kaliatech-media.s3.amazonaws.com/kt-processor-test1' + mfTnVariant.path
                : ''
              const mfUrl = `../photos${album.path}?subalbum=${album.path}&mediafile=${mediaFilePath}`
              return (
                <div key={mediaFile.path} className="mr-2">
                  <div key={mediaFilePath}>
                    <a href={mfUrl} className="m-0">
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

      {subAlbums.size > 0 && (
        <>
          <hr className={'mb-2 mt-0'} />
          <h3>Sub Albums</h3>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {Array.from(subAlbums.entries()).map(([subAlbumPath, subAlbum]) => {
              const subAlbumTnVariant = getTnForAlbum(subAlbum)
              const subAlbumTnUrl = subAlbumTnVariant
                ? 'https://kaliatech-media.s3.amazonaws.com/kt-processor-test1' +
                  subAlbumTnVariant.path
                : ''
              const subAlbumUrl = `../photos${album.path}?subalbum=${subAlbumPath}`
              return (
                <div key={subAlbum.path} className="mr-8">
                  <div key={subAlbumPath}>
                    <h2 className="mt-4">{subAlbum.title}</h2>
                    <a href={subAlbumUrl} className="m-0">
                      <div className="images-stack images-stack-dark rounded-lg">
                        <img
                          className="mb-0 mt-0 rounded-lg border-2 border-white/50 dark:border-gray-300/50"
                          src={subAlbumTnUrl}
                          alt={subAlbum.title}
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
    </>
  )
}
