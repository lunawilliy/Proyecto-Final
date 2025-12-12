import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
export default function LanguageToggle(){
  const { lang, toggle } = useContext(LanguageContext) as any
  return <button onClick={toggle}>{lang==='es' ? 'ES' : 'EN'}</button>
}
