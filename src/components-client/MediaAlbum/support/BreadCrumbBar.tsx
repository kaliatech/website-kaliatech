import type { Breadcrumb } from './build-breadcrumbs.ts'

export interface BreadCrumbBarProps {
  bcs: Breadcrumb[]
}

export default function BreadCrumbBar(props: BreadCrumbBarProps) {
  const { bcs } = props
  return (
    <div className="mt-3 rounded bg-accent-content/5 p-3 pl-3 text-sm">
      {bcs.map((bc) => {
        console.log('bc.url', bc.url)
        if (!bc.url) {
          // if (!bc.url || bc.url === bcs[bcs.length - 1]?.url) {
          return (
            <span key={bc.title} className={'font-bold'}>
              &nbsp;/ {bc.title}
            </span>
          )
        } else {
          return (
            <span key={bc.url}>
              &nbsp;/ <a href={bc.url}>{bc.title}</a>
            </span>
          )
        }
      })}
    </div>
  )
}
