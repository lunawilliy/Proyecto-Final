import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Formulario(){
  const [form, setForm] = useState({ nombre:'', email:'', telefono:'', mensaje:'' })
  const navigate = useNavigate()
  function submit(e:React.FormEvent){
    e.preventDefault()
    navigate('/resultado', { state: form })
  }
  return (
    <div className="form-page">
      <h2>Formulario</h2>
      <form onSubmit={submit}>
        <label>Nombre</label>
        <input value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})} required/>
        <label>Email</label>
        <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
        <label>Teléfono</label>
        <input value={form.telefono} onChange={e=>setForm({...form, telefono:e.target.value})}/>
        <label>Mensaje</label>
        <textarea value={form.mensaje} onChange={e=>setForm({...form, mensaje:e.target.value})} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
