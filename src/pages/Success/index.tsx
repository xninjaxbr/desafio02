import {
  SuccessContainer,
  Title,
  Orderinfo,
  StatusOrder,
  Send,
  ZapButton,
} from './style'
import { defaultTheme } from '../../styles/themes/default'

import SuccessImg from '../../assets/Success.png'
import {
  CurrencyDollar,
  MapPin,
  Timer,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { WhatsappSend } from '../../components/WhatsappSend'

export function Success() {
  const cartContext = useContext(CartContext)

  const pag = cartContext.cart.pagamento?.toLocaleUpperCase()

  return (
    <SuccessContainer>
      <div>
        <div>
          <Title>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
          </Title>
          <Orderinfo>
            <div>
              <StatusOrder $bgcolor="purple">
                <span>
                  <MapPin size={16} color={defaultTheme.white} />
                </span>
                <p>
                  Entrega em <span>{cartContext.cart.formUser?.rua}</span>
                  <br /> {cartContext.cart.formUser?.bairro} -{' '}
                  {cartContext.cart.formUser?.cidade},{' '}
                  {cartContext.cart.formUser?.uf}
                </p>
              </StatusOrder>
              <StatusOrder $bgcolor="yellow">
                <span>
                  <Timer size={16} color={defaultTheme.white} weight="fill" />
                </span>
                <p>
                  Previsão de entrega
                  <br />
                  <span>20 min - 30 min</span>
                </p>
              </StatusOrder>
              <StatusOrder $bgcolor="yellowDark">
                <span>
                  <CurrencyDollar size={16} color={defaultTheme.white} />
                </span>
                <p>
                  Pagamento na entrega
                  <br />
                  <span>{pag}</span>
                </p>
              </StatusOrder>
            </div>
          </Orderinfo>
        </div>
      </div>
      <div>
        <Send>
          <img src={SuccessImg} alt="sucesso" />

          <ZapButton onClick={() => WhatsappSend(cartContext.cart)}>
            <WhatsappLogo size={40} color="rgb(255, 255, 255)" weight="light" />
            Enviar pelo zap
          </ZapButton>
        </Send>
      </div>
    </SuccessContainer>
  )
}
