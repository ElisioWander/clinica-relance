import { useRouter } from 'next/router'
import Link from 'next/link'

interface SidebarNavItemProps {
  name: string
  url: string
}

export function SidebarNavItem({ name, url }: SidebarNavItemProps) {
  const { asPath } = useRouter()

  const genericNavigationStyle = `w-full p-3 text-lg text-gray-300 hover:text-zinc-50 font-poppins cursor-pointer hover:bg-green-100 transition-all hover:text-xl`
  const targetNavigationStyle = `font-semibold bg-green-100 text-zinc-50 hover:text-lg`

  return (
    <li
      className={`${genericNavigationStyle} ${
        asPath === `${url}` ? targetNavigationStyle : 'bg-transparent'
      } `}
    >
      <Link href={url}>
        <a>{name}</a>
      </Link>
    </li>
  )
}
