import { CloseButton } from "./CloseButton";

export function WidgetHeader() {
  return (
    <div>
      <header>
        <span className="text-xl leading-6 text-zinc-700 " >Fale conosco</span>

        <CloseButton />
      </header>
    </div>
  )
}