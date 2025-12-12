import React, { createContext, useState, ReactNode } from 'react'

type Lang = 'es' | 'en'
const translations = {
  es: {
    inicio: 'Inicio',
    destacados: 'Destacados',
    nuevos: 'Nuevos',
    contacto: 'Contacto',
    buscar: 'Buscar...'
  },
  en: {
    inicio: 'Home',
    destacados: 'Featured',
    nuevos: 'New',
    contacto: 'Contact',
    buscar: 'Search...'
  }
}

export const LanguageContext = createContext({
  lang: 'es' as Lang,
  t: translations.es,
  toggle: () => {}
})

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('es')
  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es')
  const t = translations[lang]
  return <LanguageContext.Provider value={{ lang, t, toggle }}>{children}</LanguageContext.Provider>
}
