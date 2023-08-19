import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { CartContext } from '../components/context/CartContext'
import {
  CartReducer,
  Icart,
  IformUser,
  Ipagamento,
} from '../components/reduces/cart/reducer'
import { useEffect, useReducer } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import {
  AddFormUserAction,
  AddToCartAction,
  ChangeAmountAction,
  RemoveToCartAction,
} from '../components/reduces/cart/actions'

export function DefaultLayout() {
  const [storegeCart, setstorageCart] = useLocalStorage<Icart>(
    '@cafe-delivery:cart_v1.0',
    {
      itens: [],
      frete: 0,
      totalprice: 0,
      formUser: {
        nome: '',
        cep: 0,
        rua: '',
        numero: 0,
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
      },
      pagamento: 'credito',
    },
  )

  const [cart, dispatch] = useReducer(CartReducer, storegeCart)

  console.log(cart)

  useEffect(() => {
    setstorageCart(cart)
  }, [cart, setstorageCart])

  function addCart(itemId: number, amount: number, totalItemPrices: number) {
    const item = { id: itemId, amount, totalItemPrices }
    dispatch(AddToCartAction(item))
  }
  function removeCart(itemId: number) {
    dispatch(RemoveToCartAction(itemId))
  }
  function addFormUser(formUser: IformUser, pagamento: Ipagamento | undefined) {
    dispatch(AddFormUserAction(formUser, pagamento))
  }

  function changeAmount(
    itemId: number,
    amount: number,
    totalItemPrices: number,
  ) {
    dispatch(ChangeAmountAction(itemId, amount, totalItemPrices))
  }

  return (
    <div>
      <CartContext.Provider
        value={{ cart, addCart, removeCart, changeAmount, addFormUser }}
      >
        <Header />
        <Outlet />
      </CartContext.Provider>
    </div>
  )
}
