import { styled } from 'styled-components'

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  & img {
    height: 2.5rem;
  }

  & div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme.purpleLight};
  border-radius: 6px;
`
interface IcartProps {
  buttonContent?: string
}

export const CartButton = styled.button<IcartProps>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellowLight};
  position: relative;

  &::before {
    content: '${(props) => props.buttonContent}';
    display: ${(props) => (props.buttonContent ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    background-color: ${(props) => props.theme.yellowDark};
    top: 0;
    right: 0;
    transform: translate(30%, -30%);
  }
`
