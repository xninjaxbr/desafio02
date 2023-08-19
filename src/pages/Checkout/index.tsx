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
import { CartCoffeeCard } from '../../components/CartCoffeeCard'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { ProdutsList } from '../../components/Produts'
import { setPreice } from '../../components/GlobalFunctions'
import { Ipagamento } from '../../components/reduces/cart/reducer'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const cartContext = useContext(CartContext)
  const navegate = useNavigate()

  const currentCart = getCart()

  const [nome, setNome] = useState(cartContext.cart.formUser?.nome)
  const [cep, setCep] = useState(cartContext.cart.formUser?.cep)
  const [rua, setRua] = useState(cartContext.cart.formUser?.rua)
  const [numero, setNumero] = useState(cartContext.cart.formUser?.numero)
  const [complemento, setComplemento] = useState(
    cartContext.cart.formUser?.complemento,
  )
  const [bairro, setBairro] = useState(cartContext.cart.formUser?.bairro)
  const [cidade, setCidade] = useState(cartContext.cart.formUser?.cidade)
  const [uf, setUf] = useState(cartContext.cart.formUser?.uf)

  const [pagamento, setPagamento] = useState<Ipagamento>('credito')

  const FormUser = {
    nome,
    cep: Number(cep),
    rua,
    numero: Number(numero),
    complemento,
    bairro,
    cidade,
    uf: uf?.toUpperCase(),
  }

  useEffect(() => {
    if (cartContext.cart.pagamento) {
      setPagamento(cartContext.cart.pagamento)
    }
  }, [cartContext.cart.pagamento])

  function getCart() {
    const currentCart = ProdutsList.filter((item) =>
      cartContext.cart.itens.find(({ id }) => item.id === id),
    )

    return currentCart
  }

  function totalOrder() {
    const tmpTotal = cartContext.cart.frete + cartContext.cart.totalprice
    return setPreice(tmpTotal)
  }

  function handleSendCart() {
    if (FormUser) {
      cartContext.addFormUser(FormUser, pagamento)
      navegate('/success')
    }
  }

  function handlePagamento(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const button: HTMLButtonElement = event.currentTarget

    setPagamento(button.id as Ipagamento)
  }

  function hendleCep(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length <= 8) {
      setCep(Number(event.target.value))
    }
  }
  function hendleNumber(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length <= 4) {
      setNumero(Number(event.target.value))
    }
  }

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
            <input
              type="text"
              placeholder="Nome"
              maxLength={100}
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <input
              type="number"
              placeholder="CEP"
              value={cep}
              onChange={hendleCep}
            />
            <input
              type="text"
              placeholder="Rua"
              value={rua}
              onChange={(event) => setRua(event.target.value)}
            />
            <div className="inputstwo">
              <input
                type="number"
                placeholder="Número"
                value={numero}
                onChange={hendleNumber}
              />
              <input
                type="text"
                placeholder="Complemento"
                value={complemento}
                onChange={(event) => setComplemento(event.target.value)}
              />
            </div>
            <div className="inputsthree">
              <input
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(event) => setBairro(event.target.value)}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
              />
              <input
                type="text"
                placeholder="UF"
                maxLength={2}
                value={uf}
                onChange={(event) => setUf(event.target.value)}
              />
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
            <ButtonPay
              onClick={handlePagamento}
              id="credito"
              data-active={pagamento === 'credito'}
            >
              <span>
                <CreditCard size={16} color={defaultTheme.purple} />
              </span>
              <p>Cartão de crédito</p>
            </ButtonPay>
            <ButtonPay
              onClick={handlePagamento}
              id="debito"
              data-active={pagamento === 'debito'}
            >
              <span>
                <Bank size={16} color={defaultTheme.purple} />
              </span>
              <p>Cartão de débito</p>
            </ButtonPay>
            <ButtonPay
              onClick={handlePagamento}
              id="dinheiro"
              data-active={pagamento === 'dinheiro'}
            >
              <span>
                <Money size={16} color={defaultTheme.purple} />
              </span>
              <p>Dinheiro</p>
            </ButtonPay>
            <ButtonPay
              onClick={handlePagamento}
              id="pix"
              data-active={pagamento === 'pix'}
            >
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
            {currentCart.map((item) => (
              <CartCoffeeCard
                key={item.id}
                id={item.id}
                imgCoffee={item.imgCoffee}
                titleCoffee={item.titleCoffee}
                priceCoffee={item.priceCoffee}
              />
            ))}
          </CoffeeCard>
          <CheckResume>
            <div className="Totalitens">
              <p>Total de itens</p>
              <p>{setPreice(cartContext.cart.totalprice)}</p>
            </div>
            <div className="entrega">
              <p>Entrega</p>
              <p>{setPreice(cartContext.cart.frete)}</p>
            </div>
            <div className="Total">
              <h1>Total</h1>
              <h1>{totalOrder()}</h1>
            </div>
          </CheckResume>
          <button onClick={handleSendCart}>Confirmar pedido</button>
        </div>
      </CheckCart>
    </CheckContainer>
  )
}
