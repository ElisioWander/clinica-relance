import { useSidebar } from '../../context/sidebarContext'
import { SidebarNav } from './SidebarNav'
import { SidebarNavItem } from './SidebarNavItem'

export function Sidebar() {
  const { sidebarActive, handleCloseSidebar } = useSidebar()

  return sidebarActive ? (
    <aside
      onClick={handleCloseSidebar}
      className="w-full h-full bg-zinc-900 bg-opacity-50 absolute z-50 animate-goVisible "
    >
      <div className="w-64 h-full transition-all bg-white-300 animate-goAhead duration-300 ">
        <SidebarNav>
          <SidebarNavItem name="Home" url="/" />
          <SidebarNavItem name="Sobre" url="/sobre" />
          <SidebarNavItem name="Serviços" url="/posts" />
          <SidebarNavItem name="Contato" url="/contato" />
          <SidebarNavItem name="Onde Estamos" url="/localizacao" />
        </SidebarNav>
      </div>
    </aside>
  ) : (
    <></>
  )
}
