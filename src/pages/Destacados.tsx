import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Destacados(){
  return (
    <div>
      <h2>Destacados</h2>
      <div className="product-grid">
        <ProductCard title="Set Tolsen 239 piezas" price="USD 1,130" />
        <ProductCard title="Adaptador USB-A" price="USD 10" />
        <ProductCard title="Set Electricista 66 PZS" price="USD 45" />
      </div>
    </div>
  )
}
