import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import { SocialMedia } from '../SocialMedia'
import { SocialMediaLink } from '../SocialMedia/SocialMediaLink'
import { Navigation } from '../Navigation'
import { NavigationItem } from '../Navigation/NavigationItem'

export function Footer() {
  const navigationStyle = `mb-2 text-base font-roboto text-center hover:underline hover:underline-offset-4 transition-all`
  const socialMediaStyle = `w-11 h-11 md:w-11 md:h-11 bg-white-300 rounded-md flex items-center justify-center hover:cursor-pointer scale-90 hover:brightness-90 hover:scale-100 transition-all `

  return (
    <div className="w-full flex flex-col p-8 text-white-300 bg-zinc-900 transition-all ">
      <div className="text-center mb-2 text-4xl md:text-6xl font-merriweather shadow-sm font-bold ">
        <span>
          Relance<span className="text-green-300 ml-[1px]">.</span>
        </span>
      </div>
      <div className="flex flex-col items-center ">
        <Navigation style="w-full py-5 flex flex-col">
          <NavigationItem style={`${navigationStyle}`} url="/" name="Home" />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/posts"
            name="Serviços"
          />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/sobre"
            name="Sobre"
          />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/contato"
            name="Contato"
          />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/localizacao"
            name="Onde estamos"
          />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/politica-de-privacidade"
            name="Politica de Privacidade"
          />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/termo-de-uso"
            name="Termo de Uso"
          />
          <NavigationItem
            style={`${navigationStyle}`}
            url="/creditos"
            name="Créditos"
          />
        </Navigation>

        <SocialMedia style="flex gap-3 p-2">
          <SocialMediaLink
            style={`${socialMediaStyle}`}
            url="https://api.whatsapp.com/send/?phone=5532998001512"
            name="Whatsapp"
            icon={
              <IoLogoWhatsapp
                size={28}
                className="text-zinc-700 md:w-7 md:h-7"
              />
            }
          />
          <SocialMediaLink
            style={`${socialMediaStyle}`}
            url="https://www.instagram.com/clinica_relance/"
            name="Whatsapp"
            icon={
              <AiFillInstagram
                size={28}
                className="text-zinc-700 md:w-7 md:h-7"
              />
            }
          />
        </SocialMedia>
      </div>
    </div>
  )
}
