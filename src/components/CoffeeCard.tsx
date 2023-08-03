import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { Card, Coin, Amount } from './style/CoffeeCard.style'

interface Icardprops {
  imgCoffee: string
  tagCoffee: string
  titleCoffee: string
  discriptionCoffee: string
  priceCoffee: string
}

export function CoffeeCard({
  imgCoffee,
  tagCoffee,
  discriptionCoffee,
  priceCoffee,
  titleCoffee,
}: Icardprops) {
  function setPreice(price: string) {
    let tmpPrice = price + ''
    tmpPrice = tmpPrice.replace(/([0-9]{2})$/g, ',$1')
    if (tmpPrice.length > 6)
      tmpPrice = tmpPrice.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    return tmpPrice
  }

  return (
    <Card>
      <img src={imgCoffee} alt={`Imagem do café ${discriptionCoffee}`} />
      <div>
        <span className="tag">
          <p>{tagCoffee}</p>
        </span>
        <div className="title">
          <h1>{titleCoffee}</h1>
          <h2>{discriptionCoffee}</h2>
        </div>
        <div className="cart">
          <Coin>
            <span className="coin">R$</span>
            <p>{setPreice(priceCoffee.toString())}</p>
          </Coin>
          <Amount>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </Amount>
          <button>
            <ShoppingCart size={22} color="#F3F2F2" weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
