import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalsStyle } from './styles/global'
import { TitleXL } from './components/TitleXL/title.style'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalsStyle />
      <TitleXL> Hello World! </TitleXL>
      <h2> Hello World! </h2>
    </ThemeProvider>
  )
}
