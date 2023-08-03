import logo from '../assets/logo.svg'
import { Main, Location, CartButton } from './style/Header.style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../styles/themes/default'

export function Header() {
  return (
    <Main>
      <img src={logo} alt="Logo" />
      <div>
        <Location>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <p>Brasília, DF</p>
        </Location>
        <CartButton buttonContent={'5'}>
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
