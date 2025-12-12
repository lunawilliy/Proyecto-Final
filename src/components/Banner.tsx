import React from 'react'
import b1 from '../assets/web2.jpg'
import b2 from '../assets/responsivo2.jpg'
import b3 from '../assets/pagina4.jpg'

export default function Banner(){
  return (
    <div className="banner">
      <div className="slides">
        <img src={b1} alt="slide1" className="slide" />
        <img src={b2} alt="slide2" className="slide" />
        <img src={b3} alt="slide3" className="slide" />
      </div>
    </div>
  )
}
