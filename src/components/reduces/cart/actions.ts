import { IformUser, Iitens, Ipagamento } from './reducer'

export enum ENactionType {
  AddToCart = 'AddToCart',
  RemoveFromCart = 'RemoveFromCart',
  ChangeAmount = 'ChangeAmount',
  AddFormUser = 'AddFormUser',
}

export function AddToCartAction(item: Iitens) {
  item.totalItemPrices = item.amount * item.totalItemPrices
  return {
    type: ENactionType.AddToCart,
    payload: {
      itens: {
        id: item.id,
        amount: item.amount,
        totalItemPrices: item.totalItemPrices,
      },
    },
  }
}
export function RemoveToCartAction(itemId: number) {
  return {
    type: ENactionType.RemoveFromCart,
    payload: { itens: { id: itemId, amount: 0, totalItemPrices: 0 } },
  }
}
export function ChangeAmountAction(
  itemId: number,
  amount: number,
  totalItemPrices: number,
) {
  totalItemPrices = amount * totalItemPrices
  return {
    type: ENactionType.ChangeAmount,
    payload: {
      itens: { id: itemId, amount, totalItemPrices },
    },
  }
}

export function AddFormUserAction(
  formUser: IformUser,
  pagamento: Ipagamento | undefined,
) {
  return {
    type: ENactionType.AddFormUser,
    payload: { formUser, pagamento },
  }
}
