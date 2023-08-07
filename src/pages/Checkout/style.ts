import styled from 'styled-components'

export const CheckContainer = styled.div`
  display: flex;
  max-width: 1280px;
  padding: 0 1rem;
  gap: 2rem;
  justify-content: center;
  margin: auto;

  @media (max-width: 1040px) {
    flex-direction: column;
    max-width: 800px;
    align-items: center;
  }
`

// -----------------------Formulário--------------------

export const CheckForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div {
    background-color: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  & h1 {
    margin-bottom: 1rem;
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleXS};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseSubtitle};
  }

  @media (max-width: 550px) {
    width: 400px;
  }
`

export const Checktitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  & span {
    display: inline;
  }
  & div > h2 {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseSubtitle};
  }
  & div > h3 {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseText};
  }
`
export const InputsForm = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & input {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseText};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.baseButton};
    background: ${(props) => props.theme.baseInput};
    padding: 0.75rem;
    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  & .inputstwo {
    display: flex;
    gap: 0 0.5rem;
    & input:first-child {
      width: 30%;
    }
    & input:last-child {
      width: 70%;
    }
  }
  & .inputsthree {
    display: flex;
    gap: 0 0.5rem;
    & input:first-child {
      width: 20%;
    }
    & input:nth-child(2) {
      width: 60%;
    }
    & input:last-child {
      width: 20%;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const ButtonPay = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.75rem;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme.baseButton};
  border: 2px solid transparent;
  & p {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseText};
    text-transform: uppercase;
  }

  &:active {
    border: 2px solid ${(props) => props.theme.purple};
  }
`

// -----------------------Carrinho--------------------

export const CheckCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > div {
    background-color: ${(props) => props.theme.baseCard};
    padding: 2.5rem;
    width: 448px;
    border-radius: 6px 44px;
  }
  & h1 {
    margin-bottom: 1rem;
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleXS};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseSubtitle};
  }

  & > div > button {
    width: 100%;
    padding: 0.75rem 0.5rem;
    border: transparent;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.buttonG};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineM};
    &:hover {
      background-color: ${(props) => props.theme.yellowDark};
    }
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckResume = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  gap: 0.75rem;
  & div {
    display: flex;
    justify-content: space-between;
  }

  & div p {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseText};
  }
  & div h1 {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textL};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseSubtitle};
  }
`
