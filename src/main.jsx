import React from 'react'
import ReactDOM from 'react-dom/client'
import { Menu } from './Pages/Menu'
import theme from './Styles/theme'
import GlobalStyles from "./Styles/global"
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Menu />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)
