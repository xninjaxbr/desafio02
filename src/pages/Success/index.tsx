import { SuccessContainer, Title, Orderinfo, StatusOrder } from './style'
import { defaultTheme } from '../../styles/themes/default'

import SuccessImg from '../../assets/Success.png'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </Title>
      <div>
        <Orderinfo>
          <div>
            <StatusOrder bgColor="purple">
              <span>
                <MapPin size={16} color={defaultTheme.white} />
              </span>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
                <br /> Farrapos - Porto Alegre, RS
              </p>
            </StatusOrder>
            <StatusOrder bgColor="yellow">
              <span>
                <Timer size={16} color={defaultTheme.white} weight="fill" />
              </span>
              <p>
                Previsão de entrega
                <br />
                <span>20 min - 30 min</span>
              </p>
            </StatusOrder>
            <StatusOrder bgColor="yellowDark">
              <span>
                <CurrencyDollar size={16} color={defaultTheme.white} />
              </span>
              <p>
                Pagamento na entrega
                <br />
                <span>Cartão de Crédito</span>
              </p>
            </StatusOrder>
          </div>
        </Orderinfo>

        <img src={SuccessImg} alt="sucesso" />
      </div>
    </SuccessContainer>
  )
}
