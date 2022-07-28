import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react'

type ModalContextData = {
  handleOpenModal: () => void
  modal: boolean
}

interface ModalContextProviderProps {
  children: ReactElement
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (modal === false) {
      document.body.style.overflow = 'initial'
    }
  }, [modal])

  async function handleOpenModal() {
    setModal(!modal)

    document.body.style.overflow = !modal ? 'hidden' : 'initial'

    await new Promise((resolve) => setTimeout(resolve, 2000))
    setModal(false)
  }

  return (
    <ModalContext.Provider value={{ modal, handleOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
