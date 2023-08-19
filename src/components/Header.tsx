import logo from '../assets/logo.svg'
import { Main, Location, CartButton } from './style/Header.style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../styles/themes/default'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

export function Header() {
  const cartContext = useContext(CartContext)
  return (
    <Main>
      <a href="./">
        <img src={logo} alt="Logo" />
      </a>
      <div>
        <Location>
          <MapPin size={22} weight="fill" color={defaultTheme.purple} />
          <p>
            {cartContext.cart.formUser?.cidade || 'Brasília'},{' '}
            {cartContext.cart.formUser?.uf || 'DF'}
          </p>
        </Location>
        <a href="./checkout">
          <CartButton $buttoncontent={cartContext.cart.itens.length}>
            <ShoppingCart
              size={22}
              color={defaultTheme.yellowDark}
              weight="fill"
            />
          </CartButton>
        </a>
      </div>
    </Main>
  )
}
