import { ReactNode } from 'react'

interface SidebarNavProps {
  children: ReactNode
}

export function SidebarNav({ children }: SidebarNavProps) {
  return (
    <nav className="w-full h-full py-20">
      <ul className="w-full mt-10 flex flex-col text-center justify-center">
        {children}
      </ul>
    </nav>
  )
}
