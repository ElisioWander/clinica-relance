import { useSidebar } from '../../context/sidebarContext'

export function HamburgerMenu() {
  const { handleOpenSidebar, sidebarActive } = useSidebar()

  const genericHamburgerLine = `w-8 h-0.5 my-1 rounded-full bg-zinc-700 transition ease transform duration-300s`

  return (
    <button
      onClick={handleOpenSidebar}
      className="flex flex-col w-12 h-12 border-none items-center justify-center group z-50 md:hidden "
    >
      <div
        className={`${genericHamburgerLine} ${
          sidebarActive &&
          'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${sidebarActive && 'opacity-0'}`}
      />
      <div
        className={`${genericHamburgerLine} ${
          sidebarActive &&
          '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
        } `}
      />
    </button>
  )
}
