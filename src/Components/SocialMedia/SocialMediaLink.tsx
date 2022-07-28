import { ReactNode } from 'react'

interface SocialMediaLinkProps {
  style: string
  url: string
  icon: ReactNode
  name: string
}

export function SocialMediaLink({
  style,
  url,
  icon,
  name,
}: SocialMediaLinkProps) {
  return (
    <a className={style} target="_blank" href={url} rel="noreferrer">
      {icon}
      <span className="sr-only">{name}</span>
    </a>
  )
}
