import { styled } from 'styled-components'

export const Card = styled.div`
  & > div {
    display: flex;
    flex-direction: column;
    width: 256px;
    border-radius: 6px 36px;
    background-color: ${(props) => props.theme.baseCard};
    height: 310px;
    justify-content: end;
  }

  & img {
    width: 120px;
    height: 120px;
    margin: 1rem 4.24rem;
    position: absolute;
    transform: translateY(-40%);
  }

  & .tags {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  & .tag {
    margin: 1rem 0 1.25rem;
    padding: 0.25rem 0.5rem;
    background-color: ${(props) => props.theme.yellowLight};
    border-radius: 100px;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.tag};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.yellowDark};
  }

  & .title h1 {
    text-align: center;
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleS};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineS};
  }
  & .title h2 {
    padding: 0.5rem 1.25rem;
    text-align: center;
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
  }

  & .cart {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    padding: 1.25rem 1rem;
  }

  & .cart > button {
    padding: 0.5rem;
    border: transparent;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.purpleDark};

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const Coin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;

  & .coin {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
  }

  & p {
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleM};
    font-weight: ${(props) => props.theme.fontBold};
    line-height: ${(props) => props.theme.lineS};
  }
`

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  & button {
    color: ${(props) => props.theme.purple};
    padding: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: transparent;
    background-color: ${(props) => props.theme.baseButton};

    &:hover {
      color: ${(props) => props.theme.purpleDark};
      background-color: white;
    }
  }

  & span {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseTitle};
  }
`
