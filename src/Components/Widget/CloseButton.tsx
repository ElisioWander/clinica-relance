import { Popover } from "@headlessui/react"
import { AiOutlineClose } from "react-icons/ai"

export function CloseButton() {
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-600 hover:text-zinc-800 transition-colors" title="Fechar panel" >
      <AiOutlineClose className="w-4 h-4 font-bold" />
    </Popover.Button>
  )
}