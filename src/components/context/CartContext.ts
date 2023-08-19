import { createContext } from 'react'
import { Icart, IformUser, Ipagamento } from '../reduces/cart/reducer'

interface IcartContext {
  cart: Icart
  addCart: (itemId: number, amount: number, price: number) => void
  removeCart: (itemId: number) => void
  changeAmount: (itemId: number, amount: number, price: number) => void
  addFormUser: (formUser: IformUser, pagamento: Ipagamento | undefined) => void
}

export const CartContext = createContext({} as IcartContext)
