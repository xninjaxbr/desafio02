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
import { ProdutsList } from '../../components/Produts'
// import { useContext } from 'react'
// import { CartContext } from '../../components/context/CartContext'
export function Home() {
  // const cartContext = useContext(CartContext)

  // console.log(cartContext.cart.itens.length)
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
              <SpanContainer $bgcolor="yellow">
                <ShoppingCart size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <SpanContainer $bgcolor="yellowDark">
                <Package size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <SpanContainer $bgcolor="baseText">
                <Timer size={20} color="#fff" weight="fill" />
              </SpanContainer>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <SpanContainer $bgcolor="purple">
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
        {ProdutsList.map((produt) => (
          <CoffeeCard
            key={produt.id}
            id={produt.id}
            imgCoffee={produt.imgCoffee}
            tagCoffee={produt.tagCoffee}
            titleCoffee={produt.titleCoffee}
            discriptionCoffee={produt.discriptionCoffee}
            priceCoffee={produt.priceCoffee}
          />
        ))}
      </CoffeeContainer>
    </Container>
  )
}
