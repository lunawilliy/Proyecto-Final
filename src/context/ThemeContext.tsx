import React, { createContext, useState, ReactNode, useEffect } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggle: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light'|'dark'>('light')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const toggle = () => setTheme(t => t==='light' ? 'dark' : 'light')
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}
