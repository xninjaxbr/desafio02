import { styled } from 'styled-components'

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1280px;
  padding: 1.5rem 5rem;

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
  & p {
    font-family: ${(props) => props.theme.roboto};
    font-weight: ${(props) => props.theme.fontRegular};
    font-size: ${(props) => props.theme.textS};
  }
`
interface IcartProps {
  $buttoncontent?: number
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
    content: '${(props) => props.$buttoncontent}';
    display: ${(props) => (props.$buttoncontent ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textXS};
    font-weight: ${(props) => props.theme.fontSemiBold};
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
