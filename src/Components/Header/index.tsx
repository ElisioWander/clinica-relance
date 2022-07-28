import { useRouter } from 'next/router'
import { Logo } from '../Logo'
import { Navigation } from '../Navigation'
import { NavigationItem } from '../Navigation/NavigationItem'
import { HamburgerMenu } from '../Sidebar/HamburgerMenu'

export function Header() {
  const { asPath } = useRouter()

  const genericNavigationStyle = `h-20 inline-block leading-[80px] ml-7 relative hover:text-opacity-75 text-gray-300 text-sm lg:text-[16px] font-poppins transition-all`
  const targetNavigationStyle = `font-semibold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-green-300 after:bottom-0 after:left-0 after:rounded-t-sm`
  return (
    <header className="w-10/12 max-w[1080px] h-20 m-auto flex items-center justify-between ">
      <HamburgerMenu />
      <Logo />
      <Navigation style="hidden md:block md:h-20">
        <NavigationItem
          style={`${genericNavigationStyle}
          ${asPath === '/' ? targetNavigationStyle : 'text-gray-300'}`}
          url="/"
          name="Home"
        />
        <NavigationItem
          style={`${genericNavigationStyle}
          ${asPath === '/posts' ? targetNavigationStyle : 'text-gray-300'}`}
          url="/posts"
          name="Serviços"
        />
        <NavigationItem
          style={`${genericNavigationStyle}
          ${asPath === '/sobre' ? targetNavigationStyle : 'text-gray-300'}`}
          url="/sobre"
          name="Sobre"
        />
        <NavigationItem
          style={`${genericNavigationStyle}
          ${asPath === '/contato' ? targetNavigationStyle : 'text-gray-300'}`}
          url="/contato"
          name="Contato"
        />
        <NavigationItem
          style={`${genericNavigationStyle}
          ${
            asPath === '/localizacao' ? targetNavigationStyle : 'text-gray-300'
          }`}
          url="/localizacao"
          name="Onde estamos"
        />
      </Navigation>
    </header>
  )
}
