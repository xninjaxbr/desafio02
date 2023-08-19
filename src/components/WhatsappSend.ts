import { Icart } from './reduces/cart/reducer'
import { ProdutsList } from './Produts'
import { setPreice } from './GlobalFunctions'

export function WhatsappSend(cart: Icart) {
  const phone = '5561999955583'

  const itens = cart.itens.map((item) =>
    ProdutsList.find((produt) => produt.id === item.id),
  )

  const message = `*Nome:* ${cart.formUser?.nome} 
*CEP:* ${cart.formUser?.cep} 
*Rua:* ${cart.formUser?.rua} *Número:* ${cart.formUser?.numero} 
*Complemento:* ${cart.formUser?.complemento} *Bairro:* ${cart.formUser?.bairro} 
*Cidade:* ${cart.formUser?.cidade} *UF:* ${cart.formUser?.uf} 
  
*Itens:* \n ${itens.map(
    (item) =>
      cart.itens.find((it) => it.id === item?.id)?.amount +
      ' - ' +
      item?.titleCoffee +
      ' = ' +
      setPreice(item!.priceCoffee) +
      ' \n ',
  )}  \n
*Frete:*  ${setPreice(cart.frete)}
*Forma de Pagamento:*  ${cart.pagamento?.toLocaleUpperCase()}
*Preço total do pedido:*  *${setPreice(cart.totalprice)}*
  `

  const target = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    phone,
  )}&text=${encodeURIComponent(message)}`

  const a = document.createElement('a')
  a.target = '_blank'
  a.href = target // o link URL do api.whatsapp.com
  a.click() // simular o evento de "click"
}
