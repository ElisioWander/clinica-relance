import { ReactNode } from 'react'

interface SocialMediaProps {
  children: ReactNode
  style: string
}

export function SocialMedia({ children, style }: SocialMediaProps) {
  return <div className={style}>{children}</div>
}
