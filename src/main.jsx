import React from 'react'
import ReactDOM from 'react-dom/client'
import { AdminMeal } from './Pages/Admin_Meal' 
import theme from './Styles/theme'
import GlobalStyles from "./Styles/global"
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <AdminMeal />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>,
)
