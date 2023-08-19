import styled from 'styled-components'

// --------------------Container---------------------

export const SuccessContainer = styled.div`
  display: flex;

  max-width: 1280px;
  padding: 0 5rem;
  gap: 2rem;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 5rem;
  align-items: center;

  & img {
    width: 100%;
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & > div {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 915px) {
    flex-direction: column;
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
  flex-direction: column;
  padding: 0 10px;
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
    linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
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
  $bgcolor: 'purple' | 'yellow' | 'yellowDark'
}

export const StatusOrder = styled.div<IstatusOrder>`
  display: flex;
  gap: 0.75rem;
  & > span {
    display: flex;
    height: fit-content;
    border-radius: 1000px;
    background-color: ${(props) => props.theme[props.$bgcolor]};
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

export const Send = styled.div`
  display: flex;
  flex-direction: column;
`
export const ZapButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: transparent;
  border-radius: 6px;
  background: rgb(23, 98, 8);
  background: linear-gradient(
    180deg,
    rgba(23, 98, 8, 1) 0%,
    rgba(54, 175, 45, 1) 49%,
    rgba(57, 210, 46, 1) 100%
  );
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.roboto};
  font-size: ${(props) => props.theme.buttonG};
  font-weight: ${(props) => props.theme.fontSemiBold};
  line-height: ${(props) => props.theme.lineM};

  &:hover {
    background: rgb(23, 98, 8);
    background: linear-gradient(
      180deg,
      rgba(23, 98, 8, 1) 47%,
      rgba(54, 175, 45, 1) 93%,
      rgba(57, 210, 46, 1) 100%
    );
  }
`
