import Link from 'next/link'

interface NavigationItemProps {
  style: string
  url: string
  name: string
}

export function NavigationItem({ style, url, name }: NavigationItemProps) {
  return (
    <Link href={url}>
      <a className={`${style}`}>{name}</a>
    </Link>
  )
}
