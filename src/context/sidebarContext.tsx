import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type SidebarContextData = {
  sidebarActive: boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
}

interface SidebarContextProps {
  children: ReactNode;
}

const SidebarContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({ children }: SidebarContextProps) {
  const [sidebarActive, setSidebarActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setSidebarActive(false)

    if(document.body.style.overflow === "hidden" ) {
      document.body.style.overflow = "initial"
    }
  }, [router.asPath])

  function handleOpenSidebar() {
    !sidebarActive

    document.body.style.overflow = !sidebarActive ? 'hidden' : 'initial'

    setSidebarActive(!sidebarActive)
  }

  function handleCloseSidebar() {
    setSidebarActive(false)
  }

  return (
    <SidebarContext.Provider value={{ sidebarActive, handleOpenSidebar, handleCloseSidebar }} >
      { children }
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)