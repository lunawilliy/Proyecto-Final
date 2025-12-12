import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext'
import { ThemeContext } from '../context/ThemeContext'

export default function Header(){
  const { t, toggle } = useContext(LanguageContext) as any
  const { theme, toggle: toggleTheme } = useContext(ThemeContext) as any
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="logo">TOLSEN</div>
        <div className="search"><input placeholder={t.buscar} /></div>
        <div className="controls">
          <button onClick={toggle}>{/* language */}EN/ES</button>
          <button onClick={toggleTheme}>{theme==='light' ? 'Dark' : 'Light'}</button>
          <button className="hamb" onClick={()=>setOpen(o=>!o)}>☰</button>
        </div>
      </div>
      <nav className={`mainnav ${open ? 'open' : ''}`}>
        <Link to="/">{t.inicio}</Link>
        <Link to="/destacados">{t.destacados}</Link>
        <Link to="/nuevos">{t.nuevos}</Link>
        <Link to="/contacto">{t.contacto}</Link>
      </nav>
    </header>
  )
}
