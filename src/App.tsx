// Contexts //
import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionContext'
// Page //
import { Home } from './pages/Home'
// Styles //
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <TransactionProvider>
        <Home />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
