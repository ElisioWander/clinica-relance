interface LocationItemProps {
  title: string
  name: string
}

export function LocationItem({ name, title }: LocationItemProps) {
  return (
    <li>
      <strong className="text-zinc-700 font-poppins text-base lg:text-md font-medium ">
        {title}:
      </strong>{' '}
      {name}
    </li>
  )
}
