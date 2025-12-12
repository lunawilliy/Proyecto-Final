import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Resultado(){
  const loc = useLocation()
  const data:any = loc.state || {}
  return (
    <div className="result-page">
      <h2>Resultado del Formulario</h2>
      <div className="result-card">
        <p><strong>Nombre:</strong> {data.nombre}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Teléfono:</strong> {data.telefono}</p>
        <p><strong>Mensaje:</strong> {data.mensaje}</p>
      </div>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
