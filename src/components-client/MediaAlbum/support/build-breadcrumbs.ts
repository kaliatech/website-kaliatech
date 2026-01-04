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

  if (subalbumPath) {
    // Split the path to build breadcrumbs for each level
    // e.g., "/random/2023/january" -> ["random", "2023", "january"]
    const pathSegments = subalbumPath.split('/').filter(Boolean)
    const albumId = pathSegments[0]

    // Build breadcrumbs for each subalbum level starting from index 1
    let currentPath = '/' + pathSegments[0]
    for (let i = 1; i < pathSegments.length; i++) {
      currentPath += '/' + pathSegments[i]

      // Use the path segment as the title (capitalize first letter)
      const segmentName = pathSegments[i]
      const title = segmentName ? segmentName.charAt(0).toUpperCase() + segmentName.slice(1) : ''

      // If this is the current page (final segment), don't make it a link
      if (currentPath === subalbumPath) {
        // Try to use the actual album title if this is the current album
        const albumTitle = parentMediaAlbum.path === subalbumPath ? parentMediaAlbum.title : title
        bcs.push({ title: albumTitle })
      } else {
        // Intermediate level - add as clickable link
        bcs.push({
          title: title,
          url: `/photos/${albumId}?subalbum=${currentPath}`,
        })
      }
    }
  }

  return bcs
}
