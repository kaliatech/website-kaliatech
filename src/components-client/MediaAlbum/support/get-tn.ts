import type { MediaAlbum, MediaFile, MediaFileVariant } from './model.js'

export const getTnForAlbum = (mediaAlbum: MediaAlbum): MediaFileVariant | null | undefined => {
  let tnVariant: MediaFileVariant | null | undefined

  //const mediaFiles = new Map(mediaAlbum.media_files.map<[string, MediaFile.tsx]>((record) => record))
  let tnMediaFileRecord: [string, MediaFile] | undefined
  if (mediaAlbum.thumbnail) {
    tnMediaFileRecord = mediaAlbum.media_files.find((record) => record[0] == mediaAlbum.thumbnail)
    // A thumbnail can also reference media file from subalbums
    // if (!tnMediaFileRecord) {
    // }
  }
  if (tnMediaFileRecord) {
    tnVariant = getTnVariant(tnMediaFileRecord[1])
  } else if (mediaAlbum.media_files.length > 0) {
    tnVariant = getTnVariant(mediaAlbum.media_files[0][1])
  }

  return tnVariant
}

export const getTnVariant = (mediaFile?: MediaFile): MediaFileVariant | null | undefined => {
  if (!mediaFile) {
    return null
  }

  const mediaVariantRecord = mediaFile.variants.find((record) => record[1].is_thumbnail)
  return mediaVariantRecord?.[1]
  // const mediaFileVariants = new Map(
  //   mediaFile.variants.map<[string, MediaFileVariant]>((record) => record),
  // )
  //return Array.from(mediaFileVariants.values()).find((variant) => variant.is_thumbnail)
}
