import logo from '../assets/logo.svg'
import { Main, Location, CartButton } from './style/Header.style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../styles/themes/default'
import { TextS } from './style/titles.style'

export function Header() {
  return (
    <Main>
      <img src={logo} alt="Logo" />
      <div>
        <Location>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <TextS>Brasília, DF</TextS>
        </Location>
        <CartButton buttonContent={''}>
          <ShoppingCart
            size={22}
            color={defaultTheme.yellowDark}
            weight="fill"
          />
        </CartButton>
      </div>
    </Main>
  )
}
