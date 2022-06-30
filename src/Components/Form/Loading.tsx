import { FaCircleNotch } from "react-icons/fa"

export function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden" >
      <FaCircleNotch 
        className="w-4 h-4 font-bold animate-spin text-zinc-800"  
      />
    </div>
  )
}