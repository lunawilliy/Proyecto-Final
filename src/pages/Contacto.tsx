import React from 'react'
import { Link } from 'react-router-dom'
export default function Contacto(){
  return (
    <div>
      <h2>Contacto</h2>
      <p>Horario de atención y redes sociales.</p>
      <Link to="/formulario">Enviar consulta</Link>
    </div>
  )
}
