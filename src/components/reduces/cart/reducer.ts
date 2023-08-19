import { ENactionType } from './actions'
import { produce } from 'immer'

export interface IformUser {
  nome: string | undefined
  cep: number | undefined
  rua: string | undefined
  numero: number | undefined
  complemento: string | undefined
  bairro: string | undefined
  cidade: string | undefined
  uf: string | undefined
}

export type Ipagamento = 'credito' | 'debito' | 'dinheiro' | 'pix'

export interface Iitens {
  id: number
  amount: number
  totalItemPrices: number
}
export interface Icart {
  itens: Iitens[]
  frete: number
  totalprice: number
  formUser: IformUser | undefined
  pagamento: Ipagamento | undefined
}
export interface Ipayload {
  itens?: Iitens
  frete?: number
  totalprice?: number
  formUser?: IformUser
  pagamento?: Ipagamento
}

interface Iaction {
  type: string
  payload: Ipayload
}

interface IpayloadUser {
  formUser: IformUser | undefined
  pagamento: Ipagamento | undefined
}

export function CartReducer(state: Icart, action: Iaction) {
  const itemInCart = state.itens.some(
    (item) => item.id === action.payload.itens?.id,
  )
  const payloaditens: Iitens = action.payload.itens || ([] as unknown as Iitens)
  const payloadUser: IpayloadUser = {
    formUser: action.payload.formUser,
    pagamento: action.payload.pagamento,
  }

  function totalItensPrices(itens: Iitens[]): number {
    return itens.reduce((a, b) => a + (b.totalItemPrices || 0), 0)
  }
  // console.log(payloaditens)
  if (payloaditens) {
    switch (action.type) {
      case ENactionType.AddToCart: {
        if (itemInCart) {
          return produce(state, (draft) => {
            const item =
              draft.itens[
                state.itens.findIndex((item) => {
                  return item.id === payloaditens.id
                })
              ]

            item.amount += payloaditens.amount
            item.totalItemPrices = item.amount * payloaditens.totalItemPrices
            draft.totalprice =
              totalItensPrices(draft.itens) + totalItensPrices(state.itens)
            draft.frete = 350
          })
        }
        return produce(state, (draft) => {
          draft.itens.push(payloaditens)
          draft.totalprice = totalItensPrices(draft.itens)
          draft.frete = 350
        })
      }
      case ENactionType.RemoveFromCart: {
        return produce(state, (draft) => {
          draft.itens = draft.itens.filter(
            (itens) => itens.id !== payloaditens.id,
          )
          draft.totalprice = totalItensPrices(draft.itens)
          if (draft.itens.length === 0) {
            draft.frete = 0
          }
        })
      }
      case ENactionType.ChangeAmount: {
        return produce(state, (draft) => {
          const item =
            draft.itens[
              state.itens.findIndex((item) => {
                return item.id === payloaditens.id
              })
            ]
          // aqui
          item.amount = payloaditens.amount
          item.totalItemPrices = payloaditens.totalItemPrices
          draft.totalprice = totalItensPrices(draft.itens)
          draft.frete = 350
        })
      }
    }
  }

  if (payloadUser) {
    switch (action.type) {
      case ENactionType.AddFormUser: {
        return produce(state, (draft) => {
          draft.formUser = payloadUser.formUser
          draft.pagamento = payloadUser.pagamento
          console.log(draft)
        })
      }
    }
  }
  return state
}
