import {
  Header,
  Tags,
  SpanContainer,
  CoffeeContainer,
  TitleC,
  Container,
} from './style'
import imgcoffe from '../../assets/coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeCard } from '../../components/CoffeeCard'
import expresso from '../../assets/Expresso.png'

export function Home() {
  return (
    <Container>
      <Header>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <Tags>
            <div>
              <SpanContainer bgColor="yellow">
                <ShoppingCart size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <SpanContainer bgColor="yellowDark">
                <Package size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <SpanContainer bgColor="baseText">
                <Timer size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <SpanContainer bgColor="purple">
                <Coffee size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>O café chega fresquinho até você</p>
            </div>
          </Tags>
        </div>
        <img src={imgcoffe} alt="Imagem de copo de café"></img>
      </Header>
      <TitleC>
        <h1>Nossos cafés</h1>
      </TitleC>
      <CoffeeContainer>
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="29390"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />{' '}
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />{' '}
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />{' '}
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />{' '}
        <CoffeeCard
          imgCoffee={expresso}
          tagCoffee="tradicional"
          titleCoffee="Café Expresso"
          priceCoffee="990"
          discriptionCoffee="O tradicional café feito com água quente e grãos moídos"
        />
      </CoffeeContainer>
    </Container>
  )
}
