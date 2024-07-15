export interface MediaFileVariant {
  path: string
  mime_type: string
  width: number
  height: number
  duration: number | null
  bytes: number
  is_thumbnail: boolean
}

export interface MediaFile {
  path: string
  title: string
  ordinal: number
  last_modified: Date
  width: number
  height: number
  //variants: Map<string, MediaFileVariant>
  variants: [[string, MediaFileVariant]]
}

export interface MediaAlbum {
  path: string
  title: string
  ordinal: number
  last_modified_dir: Date
  thumbnail: string
  //sub_albums: Map<string, MediaAlbum>
  //media_files: Map<string, MediaFile>
  sub_albums: [[string, MediaAlbum]]
  media_files: [[string, MediaFile]]
}
