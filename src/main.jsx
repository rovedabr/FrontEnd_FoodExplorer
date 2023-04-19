import React from 'react'
import theme from './Styles/theme'
import ReactDOM from 'react-dom/client'
import GlobalStyles from "./Styles/global"
import { ThemeProvider } from 'styled-components'

import { Routes } from "./routes" 

import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>    
      <GlobalStyles/> 
        <AuthProvider>
          <CartProvider>
            <Routes />
          </CartProvider>
        </AuthProvider>       
    </ThemeProvider>
  </React.StrictMode>
)
