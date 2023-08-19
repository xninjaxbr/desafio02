import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Card, Amount } from './style/CartCoffeeCard.style'
import { defaultTheme } from '../styles/themes/default'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { setPreice } from './GlobalFunctions'

interface Icardprops {
  id: number
  imgCoffee: string
  titleCoffee: string
  priceCoffee: number
}

export function CartCoffeeCard({
  id,
  imgCoffee,
  priceCoffee,
  titleCoffee,
}: Icardprops) {
  const cartContext = useContext(CartContext)

  function getAmount() {
    const item = cartContext.cart.itens.filter((item) => item.id === id)[0]
    return item
  }
  const item = getAmount()

  function removeToCart() {
    cartContext.removeCart(id)
  }

  function changeAmount(operator: boolean) {
    const tmpAmount = operator ? item.amount + 1 : item.amount - 1
    if (tmpAmount > 0) {
      cartContext.changeAmount(id, tmpAmount, priceCoffee)
    }
  }

  function changePlus() {
    changeAmount(true)
  }
  function changeMinus() {
    changeAmount(false)
  }

  function formatPrice() {
    return setPreice(item.totalItemPrices)
  }

  return (
    <Card>
      <div>
        <img src={imgCoffee} alt={`café ${titleCoffee}`}></img>
        <div>
          <p>{titleCoffee}</p>
          <div>
            <Amount>
              <button onClick={changeMinus}>
                <Minus size={14} />
              </button>
              <span>{item.amount}</span>
              <button onClick={changePlus}>
                <Plus size={14} />
              </button>
            </Amount>
            <button onClick={removeToCart}>
              <Trash size={20} color={defaultTheme.purple} /> remover
            </button>
          </div>
        </div>
      </div>
      <p>{formatPrice().toString()}</p>
    </Card>
  )
}
