import { useEffect, useMemo, useState } from 'react'

interface BookmarkResponse {
  count: number
  next: string | null
  previous: string | null
  results: Bookmark[]
}

interface Bookmark {
  id: number
  url: string
  title: string
  description: string
  notes: string
  website_title: string
  website_description: null | string
  web_archive_snapshot_url: null | string
  is_archived: boolean
  unread: boolean
  shared: boolean
  tag_names: string[]
  date_added: Date
  date_modified: Date
}

const LIMIT = 100

const apiUrl = import.meta.env.PUBLIC_KALIATECH_WEBSITE_API

const loadBookmarks = async (offset: number, tag?: string) => {
  return await fetch(
    `${apiUrl}/api/linkding/bookmarks/?` +
      new URLSearchParams({
        limit: LIMIT.toString(),
        offset: offset.toString(),
        ...(tag ? { tag } : {}),
      }),
    {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => (response.status === 200 ? response.json() : Promise.reject(response)))
    .then((data) => {
      //console.log(data)
      return data as BookmarkResponse
    })
    .catch((error) => {
      console.error('Error:', error)
      throw error
    })
}

interface BookmarksListProps {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BookmarksList = (_props: BookmarksListProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()
  const [bookmarksRespData, setBookmarksRespData] = useState<BookmarkResponse>()

  const pageParam = useMemo(
    () => parseInt(new URLSearchParams(window.location.search).get('page') ?? '1'),
    [],
  )

  const tagParam = useMemo(
    () => new URLSearchParams(window.location.search).get('tag') ?? undefined,
    [],
  )

  useEffect(() => {
    loadBookmarks((pageParam - 1) * LIMIT, tagParam)
      .then((respData) => {
        setBookmarksRespData(respData)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message ?? 'Unknown error')
        setLoading(false)
      })
      .finally(() => setLoading(false))
  }, [pageParam, tagParam])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  if (bookmarksRespData?.results) {
    bookmarksRespData.results = bookmarksRespData.results.filter(
      (bookmark) => !bookmark.tag_names.includes('private'),
    )
  }

  return (
    <>
      <div>
        {bookmarksRespData?.results?.map((bookmark: Bookmark) => (
          <div key={bookmark.id} className="m-4 ml-0 rounded-md bg-theme-50 p-3 dark:bg-theme-600">
            <div className="min-w-[10rem] justify-between md:flex">
              <div className="min-w-[10rem]">
                <a
                  href={bookmark.url}
                  className="flex flex-col"
                  title={bookmark.title || bookmark.website_title}
                >
                  <h2 className="mb-0 mt-0 min-w-[10rem] truncate font-bold">
                    {bookmark.title || bookmark.website_title}
                  </h2>
                  <small className="truncate font-light">{bookmark.url}</small>
                </a>
                <p className="mt-0">{bookmark.description || bookmark.website_description}</p>
              </div>
              <div className={'whitespace-nowrap'}>
                {bookmark.tag_names?.map((tag) => (
                  <a
                    key={tag}
                    href={`?tag=${tag}`}
                    className="mr-1 whitespace-nowrap rounded-md bg-theme-100 px-2 py-1 font-light text-theme-900 hover:bg-theme-100/50 hover:no-underline dark:bg-theme-700 dark:hover:bg-theme-700/50"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/*<pre>{JSON.stringify(bookmarksRespData, null, 2)}</pre>*/}
      </div>
      {bookmarksRespData?.next && (
        <div className={'mr-1 flex justify-end px-3'}>
          <a
            className={
              'btn btn-primary bg-theme-100 text-theme-900 hover:bg-theme-100/50 hover:no-underline dark:bg-theme-700 dark:hover:bg-theme-700/50'
            }
            href={`?page=${pageParam + 1}${tagParam ? '&tag=' + tagParam : ''}`}
          >
            More
          </a>
        </div>
      )}
    </>
  )
}
