import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
// Page //
import { Home } from './pages/Home'
import { GlobalStyled } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <Home />
    </ThemeProvider>
  )
}

export default App
