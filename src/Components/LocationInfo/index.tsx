import { ReactNode } from 'react'

interface LocationProps {
  children: ReactNode
}

export function LocationInfo({ children }: LocationProps) {
  return (
    <ul className="text-zinc-500 text-sm lg:text-[15px] font-poppins transition-all">
      {children}
    </ul>
  )
}
