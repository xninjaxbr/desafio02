import { createGlobalStyle } from 'styled-components'

export const GlobalsStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.baseText};
    }
    
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.yellowDark};
    }
    
    body, input, textarea, button{
       font-family: 'Baloo 2', 'Roboto', sans-serif;

    }

`
