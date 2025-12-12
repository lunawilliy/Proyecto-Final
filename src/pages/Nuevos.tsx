import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Nuevos(){
  return (
    <div>
      <h2>Nuevos</h2>
      <div className="product-grid">
        {Array.from({length:8}).map((_,i)=>(
          <ProductCard key={i} title={'Producto Nuevo '+(i+1)} price={'USD '+(20+i*5)} />
        ))}
      </div>
    </div>
  )
}
