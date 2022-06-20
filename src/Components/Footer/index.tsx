import { FacebookLogo, InstagramLogo, MapPinLine, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="w-full md:h-80 relative flex flex-col md:grid grid-cols-3 items-center p-8 md:px-16 text-white-300 bg-zinc-900 transition-all " >
      <div className="w-full mt-3 flex flex-col gap-2 order-1 md:order-none " >
        <span className="md:ml-2 flex justify-center md:items-start md:justify-start text-lg ms:text-2xl font-merriweather " >Endereço</span>
        <span className="md:pt-0 text-xs md:text-sm font-roboto leading-6 flex gap-2 justify-center md:justify-start text-center md:text-start " >
        <MapPinLine size={32}  className="hidden md:flex" />Ubá, MG <br/>
          Av. Padre Arnaldo Jansen <br/>
          (32) 999999999
        </span>
        <span className="text-[10px] text-center md:text-start text-zinc-700 font-poppins md:absolute md:bottom-5 md:w-full md:left-0 md:flex md:justify-center " >@Copyright - Estudio Relance</span>
      </div>
      <div>
        <span className="md:h-60 mb-2 text-4xl md:text-6xl font-merriweather shadow-sm font-bold flex items-start  justify-center " >Relance<span className="text-green-300 ml-[1px]" >.</span></span>
      </div>
      <div className="flex flex-col items-center pb-3 md:p-0 md:items-end gap-2 md:gap-6 ">
        <div className="flex gap-3 p-2" >
          <a className="w-9 h-9 md:w-11 md:h-11 bg-white-300 rounded-full flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all " target="_blank" href="https://google.com" ><WhatsappLogo fontSize={20} weight={"bold"} className="text-zinc-900 md:w-7 md:h-7 " /></a>
          <a className="w-9 h-9 md:w-11 md:h-11 bg-white-300 rounded-full flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all " target="_blank" href="https://google.com" ><InstagramLogo fontSize={20} weight={"bold"} className="text-zinc-900 md:w-7 md:h-7 " /></a>
          <a className="w-9 h-9 md:w-11 md:h-11 bg-white-300 rounded-full flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all " target="_blank" href="https://google.com" ><FacebookLogo fontSize={20} weight={"bold"} className="text-zinc-900 md:w-7 md:h-7 " /></a>
        </div>
        <div className="flex gap-3" >
          <a className="text-xs sm:text-sm font-roboto text-center hover:underline hover:underline-offset-4 transition-all " href="/"> Home</a>
          <a className="text-xs sm:text-sm font-roboto text-center hover:underline hover:underline-offset-4 transition-all " href=""> Serviços</a>
          <a className="text-xs sm:text-sm font-roboto text-center hover:underline hover:underline-offset-4 transition-all " href=""> Sobre</a>
          <a className="text-xs sm:text-sm font-roboto text-center hover:underline hover:underline-offset-4 transition-all " href=""> contato</a>
          <a className="text-xs sm:text-sm font-roboto text-center hover:underline hover:underline-offset-4 transition-all " href=""> local</a>
        </div>
      </div>
    </div>
  );
}
