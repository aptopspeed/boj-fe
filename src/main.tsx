import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import theme from './theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
