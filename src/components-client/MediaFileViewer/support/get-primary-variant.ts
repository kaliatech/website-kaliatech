import type { MediaFile, MediaFileVariant } from '../../MediaAlbum/support/model.ts'

export function sortVariantsBySize(mf: MediaFile): MediaFileVariant[] {
  return mf.variants
    .filter((variant) => !variant[1].is_thumbnail)
    .sort((a, b) => {
      const areaA = a[1].width * a[1].height
      const areaB = b[1].width * b[1].height
      return areaA - areaB
    })
    .map((variant) => variant[1])
}
