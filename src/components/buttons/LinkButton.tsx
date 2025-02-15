import { type ReactNode } from 'react'

export interface LinkButtonProps {
  label: string
  href: string
  width?: string
  iconSvg?: ReactNode
}

export const LinkButton = ({ label, href, width, iconSvg }: LinkButtonProps) => {
  return (
    // Style is handled like this because dynamic class string does not get picked up by tailwind
    <a
      href={href}
      className="btn btn-primary w-32 flex-nowrap whitespace-nowrap hover:text-white dark:text-slate-300"
      style={width ? { width: width } : {}}
    >
      {iconSvg && (
        <div
          className="h-6 min-h-6 w-6 min-w-6 fill-white dark:invert"
          dangerouslySetInnerHTML={{ __html: iconSvg as string }}
        />
      )}
      {label}
    </a>
  )
}
