import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Destacados from '../pages/Destacados'
import Nuevos from '../pages/Nuevos'
import Contacto from '../pages/Contacto'
import Formulario from '../pages/Formulario'
import Resultado from '../pages/ResultadoFormulario'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AppRouter(){
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destacados" element={<Destacados />} />
          <Route path="/nuevos" element={<Nuevos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
