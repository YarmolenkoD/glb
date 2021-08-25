import { ThemeProvider } from 'styled-components'

// hooks
import { useTheme } from 'hooks'

// store
import { ReduxProvider } from 'redux-store'

// router
import { Router } from 'router'


function App() {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
        <Router />
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default App
