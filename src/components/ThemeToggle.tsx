import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
export default function ThemeToggle(){
  const { theme, toggle } = useContext(ThemeContext) as any
  return <button onClick={toggle}>{theme}</button>
}
