import React from 'react'
import theme from './Styles/theme'
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./Styles/global"
import { ThemeProvider } from 'styled-components'

import { Routes } from "./routes" 
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>    
      <GlobalStyles/> 
        <AuthProvider>
          <Routes />
        </AuthProvider>       
    </ThemeProvider>
  </React.StrictMode>
)
