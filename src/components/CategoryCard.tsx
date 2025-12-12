import React from 'react'
export default function CategoryCard({title}:{title:string}){
  return (
    <div className="category-card">
      <div className="cat-image" />
      <div className="cat-title">{title}</div>
    </div>
  )
}
