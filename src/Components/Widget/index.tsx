import { WidgetHeader } from "./WidgetHeader";

export function Widget() {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-auto bg-green-300 " >
      <WidgetHeader />
    </div>
  )
}