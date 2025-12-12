import React from 'react'
import AppRouter from './router/AppRouter'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

export default function App(){
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </LanguageProvider>
  )
}
