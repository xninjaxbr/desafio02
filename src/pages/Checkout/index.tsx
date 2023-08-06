import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  QrCode,
} from '@phosphor-icons/react'
import {
  CheckContainer,
  CheckForm,
  Checktitle,
  InputsForm,
  ButtonPay,
  ButtonContainer,
  CheckCart,
  CoffeeCard,
  CheckResume,
} from './style'
import { defaultTheme } from '../../styles/themes/default'
import Expresso from '../../assets//Expresso.png'
import { CartCoffeeCard } from '../../components/CartCoffeeCard'

export function Checkout() {
  return (
    <CheckContainer>
      <CheckForm>
        <h1>Complete seu pedido</h1>
        <div>
          <Checktitle>
            <MapPinLine size={22} color={defaultTheme.yellowDark} />
            <div>
              <h2>Endereço de Entrega</h2>
              <h3>Informe o endereço onde deseja receber seu pedido</h3>
            </div>
          </Checktitle>
          <InputsForm>
            <input type="text" placeholder="Nome" />
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div className="inputstwo">
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div className="inputsthree">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </InputsForm>
        </div>
        <div>
          <Checktitle>
            <CurrencyDollar size={20} color={defaultTheme.purple} />
            <div>
              <h2>Pagamento</h2>
              <h3>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h3>
            </div>
          </Checktitle>
          <ButtonContainer>
            <ButtonPay>
              <span>
                <CreditCard size={16} color={defaultTheme.purple} />
              </span>
              <p>Cartão de crédito</p>
            </ButtonPay>
            <ButtonPay>
              <span>
                <Bank size={16} color={defaultTheme.purple} />
              </span>
              <p>Cartão de débito</p>
            </ButtonPay>
            <ButtonPay>
              <span>
                <Money size={16} color={defaultTheme.purple} />
              </span>
              <p>Dinheiro</p>
            </ButtonPay>
            <ButtonPay>
              <span>
                <QrCode size={16} color={defaultTheme.purple} />
              </span>
              <p>Pix</p>
            </ButtonPay>
          </ButtonContainer>
        </div>
      </CheckForm>
      <CheckCart>
        <h1>Cafés selecionados</h1>
        <div>
          <CoffeeCard>
            <CartCoffeeCard
              imgCoffee={Expresso}
              titleCoffee="Café Expresso"
              priceCoffee="9390"
            />
            <CartCoffeeCard
              imgCoffee={Expresso}
              titleCoffee="Café Expresso"
              priceCoffee="2390"
            />
          </CoffeeCard>
          <CheckResume>
            <div className="Totalitens">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="entrega">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="Total">
              <h1>Total</h1>
              <h1>R$ 33,20</h1>
            </div>
          </CheckResume>
          <button>Confirmar pedido</button>
        </div>
      </CheckCart>
    </CheckContainer>
  )
}
