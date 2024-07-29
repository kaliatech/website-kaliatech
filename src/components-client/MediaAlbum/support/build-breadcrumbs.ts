import type { MediaAlbum } from './model.ts'

export interface Breadcrumb {
  title: string
  url?: string
}

export const buildBreadcrumbs = (currLoc: Location, parentMediaAlbum: MediaAlbum): Breadcrumb[] => {
  const bcs: Breadcrumb[] = []

  // TODO: Rewrite this to be flexible instead of hardcoded

  bcs.push({ title: 'Photos', url: '/photos' })

  const currUrl = new URL(currLoc.href)
  const subalbumPath = currUrl.searchParams.get('subalbum')

  if (subalbumPath?.includes('/random/') || currUrl.pathname.includes('/random/')) {
    bcs.push({ title: 'Random', url: '/photos/random' })
  } else if (currUrl.pathname.endsWith('/random')) {
    bcs.push({ title: 'Random' })
  }

  if (subalbumPath?.includes('/rides/') || currUrl.pathname.includes('/rides/')) {
    bcs.push({ title: 'Rides', url: '/photos/rides' })
  } else if (currUrl.pathname.endsWith('/rides')) {
    bcs.push({ title: 'Rides' })
  }

  if (subalbumPath?.includes('/favorites/') || currUrl.pathname.includes('/favorites/')) {
    bcs.push({ title: 'Favorites', url: '/photos/favorites' })
  } else if (currUrl.pathname.endsWith('/favorites')) {
    bcs.push({ title: 'Favorites' })
  }

  console.log('subalbumPath', subalbumPath)
  if (subalbumPath) {
    const currPaths: string[] = []
    currPaths.push(...subalbumPath.split('/'))
    // currPaths.shift()
    // currPaths.shift()

    const albumPaths: string[] = []
    albumPaths.push(...parentMediaAlbum.path.split('/'))
    // albumPaths.shift()
    // albumPaths.shift()

    const mediaAlbum =
      parentMediaAlbum.path === subalbumPath
        ? parentMediaAlbum
        : parentMediaAlbum.sub_albums.find(([_path, album]) => album.path === subalbumPath)?.[1]

    if (mediaAlbum) {
      bcs.push({ title: mediaAlbum.title, url: subalbumPath })
    }
  }

  return bcs
}
