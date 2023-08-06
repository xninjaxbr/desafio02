import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Card, Amount } from './style/CartCoffeeCard.style'
import { defaultTheme } from '../styles/themes/default'

interface Icardprops {
  imgCoffee: string
  titleCoffee: string
  priceCoffee: string
}

export function CartCoffeeCard({
  imgCoffee,
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
      <div>
        <img src={imgCoffee} alt={`café ${titleCoffee}`}></img>
        <div>
          <p>{titleCoffee}</p>
          <div>
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
              <Trash size={20} color={defaultTheme.purple} /> remove
            </button>
          </div>
        </div>
      </div>
      <p>{`R$ ${setPreice(priceCoffee.toString())}`}</p>
    </Card>
  )
}
