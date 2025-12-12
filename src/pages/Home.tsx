import React from 'react'
import Banner from '../components/Banner'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <Banner />
      <section className="categories">
        {['Consumibles','Herramientas Eléctricas','Generadores','Batería','Combustión','Mano','Jardín','Accesorios'].map(c=>(
          <CategoryCard key={c} title={c} />
        ))}
      </section>

      <section className="products">
        <h3>Nuevos Productos</h3>
        <div className="product-grid">
          <ProductCard title="Gato Carro 2 Ton" price="USD 74.40" />
          <ProductCard title="Amoladora 125 mm 1200W" price="USD 83.56" />
          <ProductCard title="Amoladora 125 mm" price="USD 65.48" />
          <ProductCard title="Carro Herramientas" price="USD 1,130" />
        </div>
        <Link to="/destacados" className="see-more">Ver destacados →</Link>
      </section>
    </div>
  )
}
