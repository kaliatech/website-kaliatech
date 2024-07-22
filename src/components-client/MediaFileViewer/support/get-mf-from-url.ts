import type { MediaFile } from '../../MediaAlbum/support/model.ts'

export function getMfFromUrl(mediaFiles: MediaFile[], mfVariantUrl: string): MediaFile | undefined {
  console.log('mfVariantUrl', mfVariantUrl)
  return mediaFiles.find((mf) => {
    return mf.variants.find((variant) => {
      return mfVariantUrl.includes(variant[1].path)
    })
  })
}
