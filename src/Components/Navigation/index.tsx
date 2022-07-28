import { ReactNode } from 'react'

interface NavigationProps {
  children: ReactNode
  style: string
}

export function Navigation({ children, style }: NavigationProps) {
  return <nav className={style}>{children}</nav>
}
