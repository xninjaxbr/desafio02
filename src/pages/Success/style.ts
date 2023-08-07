import styled from 'styled-components'

// --------------------Container---------------------

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  padding: 0 5rem;
  gap: 2rem;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 5rem;

  & img {
    width: 50%;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & > div:first-child {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 800px) {
    & > div:first-child {
      align-items: center;
    }
    & > div {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    & img {
      width: 100%;
    }
  }
`

// --------------------titulo---------------------

export const Title = styled.div`
  display: flex;
  & h1 {
    font-family: ${(props) => props.theme.baloo};
    font-size: ${(props) => props.theme.titleL};
    font-weight: ${(props) => props.theme.fontBold};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.yellowDark};
  }

  & h2 {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textL};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseSubtitle};
  }
`
export const Orderinfo = styled.div`
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;

  border-radius: 6px 36px;
  border: 2px solid transparent;
  padding: 2.5rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

// --------------------Status---------------------
interface IstatusOrder {
  bgColor: 'purple' | 'yellow' | 'yellowDark'
}

export const StatusOrder = styled.div<IstatusOrder>`
  display: flex;
  gap: 0.75rem;
  /* width: 400px; */
  & > span {
    display: flex;
    height: fit-content;
    border-radius: 1000px;
    background-color: ${(props) => props.theme[props.bgColor]};
    padding: 0.5rem;
  }

  & > p {
    /* display: flex;
    flex-wrap: wrap;
    flex-direction: column; */
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseText};

    & > span {
      font-weight: ${(props) => props.theme.fontSemiBold};
    }
  }
`
