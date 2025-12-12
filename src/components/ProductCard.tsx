import React from 'react'
export default function ProductCard({title, price}:{title:string, price:string}){
  return (
    <div className="product-card">
      <div className="product-thumb" />
      <h4>{title}</h4>
      <div className="price">{price}</div>
    </div>
  )
}
