import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Card, Coin, Amount } from './style/CoffeeCard.style'
import { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { setPreice } from './GlobalFunctions'

interface Icardprops {
  key?: number
  id: number
  imgCoffee: string
  tagCoffee: string[]
  titleCoffee: string
  discriptionCoffee: string
  priceCoffee: number
}

export function CoffeeCard({
  id,
  imgCoffee,
  tagCoffee,
  discriptionCoffee,
  priceCoffee,
  titleCoffee,
}: Icardprops) {
  const cartContext = useContext(CartContext)

  function addToCart() {
    cartContext.addCart(id, amount, priceCoffee)
  }

  let [amount, setAmount] = useState(1)

  function plusAmount() {
    setAmount((amount += 1))
  }
  function minusAmount() {
    if (amount > 1) {
      setAmount((amount -= 1))
    }
  }

  console.log(cartContext.cart.totalprice)
  return (
    <Card>
      <img src={imgCoffee} alt={`Imagem do café ${discriptionCoffee}`} />
      <div>
        <div className="tags">
          {tagCoffee.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="title">
          <h1>{titleCoffee}</h1>
          <h2>{discriptionCoffee}</h2>
        </div>
        <div className="cart">
          <Coin>
            <span className="coin">R$</span>
            <p>{setPreice(priceCoffee, false)}</p>
          </Coin>
          <Amount>
            <button onClick={minusAmount}>
              <Minus size={14} />
            </button>
            <span>{amount}</span>
            <button onClick={plusAmount}>
              <Plus size={14} />
            </button>
          </Amount>
          <button onClick={addToCart}>
            <ShoppingCart size={22} color="#F3F2F2" weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
