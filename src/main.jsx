import React from 'react'
import ReactDOM from 'react-dom/client'
import { Teste } from './Pages/Teste' 
import theme from './Styles/theme'
import GlobalStyles from "./Styles/global"
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Teste />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)
