import type { MediaAlbum, MediaFile } from './model.ts'

import { getTnForAlbum } from './get-tn.ts'

const MEDIA_ROOT_URL = import.meta.env.PUBLIC_KALIATECH_MEDIA_ROOT_URL

interface SubAlbumsProps {
  parentAlbumId: string
  subAlbums: MediaAlbum[]
  mediaFiles: Map<string, MediaFile>
}

export const SubAlbums = ({ parentAlbumId, subAlbums }: SubAlbumsProps) => {
  if (subAlbums.length < 1) {
    return null
  }

  return (
    <>
      <hr className={'mb-2 mt-0'} />
      {/*{subAlbums.length > 0 && mediaFiles.size > 0 && <h3>Sub Albums</h3>}*/}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {subAlbums.map((subAlbum) => {
          const subAlbumPath = subAlbum.path
          const subAlbumTnVariant = getTnForAlbum(subAlbum)
          const subAlbumTnUrl = subAlbumTnVariant ? MEDIA_ROOT_URL + subAlbumTnVariant.path : ''
          const subAlbumUrl = `../photos/${parentAlbumId}?subalbum=${subAlbumPath}`
          return (
            <div key={subAlbum.path} className="mr-8">
              <div
                key={subAlbumPath}
                className="prose:hover:no-underline prose-a:hover:no-underline"
              >
                <a href={subAlbumUrl} className="m-0 w-full">
                  <h2 className="mb-0 mt-1">{subAlbum.title}</h2>

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
  )
}
