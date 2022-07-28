export function Spinner() {
  return (
    <div className="w-full h-[calc(100vh-20rem)] md:h-full flex items-center justify-center ">
      <div className="w-11 h-11 border-4 border-solid border-zinc-600 border-t-4 border-t-green-300 rounded-full animate-spin "></div>
    </div>
  )
}
