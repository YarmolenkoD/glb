import { ThemeProvider } from 'styled-components'

// hooks
import { useTheme } from 'hooks'

// store
import { ReduxProvider } from 'redux-store'

// router
import { Router } from 'router'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
