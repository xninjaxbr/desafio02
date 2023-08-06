import { styled } from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid ${(props) => props.theme.baseButton};
  padding: 1.5rem 0.25rem;
  & > div {
    display: flex;
    justify-content: space-between;
    border-radius: 6px 36px;
    background-color: ${(props) => props.theme.baseCard};
  }

  & img {
    margin-right: 1.25rem;
    width: 64px;
    height: 64px;
  }

  & div p {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseSubtitle};
    margin-bottom: 0.5rem;
  }
  & > div > div > div {
    display: flex;
    gap: 0.5rem;
  }
  & button {
    display: flex;
    padding: 0 0.5rem;
    gap: 0.25rem;
    border: transparent;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.baseButton};

    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textS};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineM};
    color: ${(props) => props.theme.baseText};
    text-transform: uppercase;

    &:hover {
      background-color: ${(props) => props.theme.baseHover};
    }
  }

  & p {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontSemiBold};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseText};
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

  & span {
    font-family: ${(props) => props.theme.roboto};
    font-size: ${(props) => props.theme.textM};
    font-weight: ${(props) => props.theme.fontRegular};
    line-height: ${(props) => props.theme.lineS};
    color: ${(props) => props.theme.baseTitle};
  }

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

  // export const Card = styled.div
`
//   display: flex;
//   padding: 0.5rem 0.25rem;
//   align-items: flex-start;
//   width: 100%;
//   justify-content: space-between;
//   padding: 1rem 0;
//   border-bottom: 2px solid ${(props) => props.theme.baseButton};

//   & img {
//     margin-right: 1.25rem;
//     width: 64px;
//     height: 64px;
//   }

//   & > div {
//     display: flex;
//   }

//   & > div > div {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 0.5rem;

//     & p {
//       font-family: ${(props) => props.theme.roboto};
//       font-size: ${(props) => props.theme.textM};
//       font-weight: ${(props) => props.theme.fontRegular};
//       line-height: ${(props) => props.theme.lineS};
//       color: ${(props) => props.theme.baseSubtitle};
//     }
//   }
//   & p {
//     font-family: ${(props) => props.theme.roboto};
//     font-size: ${(props) => props.theme.textM};
//     font-weight: ${(props) => props.theme.fontSemiBold};
//     line-height: ${(props) => props.theme.lineS};
//     color: ${(props) => props.theme.baseText};
//   }
// `
