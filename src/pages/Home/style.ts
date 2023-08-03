import { styled } from 'styled-components'

export const Container = styled.div`
  margin: auto;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & img {
    width: 43%;
  }

  & h1 {
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleXL};
    font-weight: ${(props) => props.theme.fontBold};
    line-height: ${(props) => props.theme.lineM};
    color: ${(props) => props.theme.baseTitle};
  }
  & h2 {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textL};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineM};
    color: ${(props) => props.theme.baseText};
    margin: 1rem 0;
  }
  @media (max-width: 1060px) {
    flex-direction: column-reverse;
    & img {
      width: 80%;
    }
    & h1 {
      font-size: ${(props) => props.theme.titleL};
    }
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  & div {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
  }

  & p {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineM};
    color: ${(props) => props.theme.baseText};
  }
`

interface spanProps {
  bgColor: 'yellow' | 'yellowDark' | 'baseText' | 'purple'
}

export const SpanContainer = styled.span<spanProps>`
  display: flex;
  flex: 0;
  width: 32px;
  height: 32x;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.bgColor]};
  text-align: center;
  padding: 0.5rem;
`

export const TitleC = styled.div`
  width: 100%;
  padding: 2rem 0;
  & h1 {
    display: flex;
    justify-content: flex-start;
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleL};
    font-weight: ${(props) => props.theme.bold};
    line-height: ${(props) => props.theme.lineM};
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const CoffeeContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 4rem 1rem;
  flex-wrap: wrap;
  justify-content: center;
`
