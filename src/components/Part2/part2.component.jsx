import React from 'react'
import './part2.styles.css'
import img1 from '../../assets/Image1.svg'
import img2 from '../../assets/Image2.jpg'
import img3 from '../../assets/image3.webp'

function Part2() {
  return (
    <div className="part2-container">
      <div className="part2-card">
        <h2>Full Stack React</h2>
        <img src={img1} alt="Diseño Web" />
        <p>
        Creo aplicaciones dinamicas que se puedan manejar de forma simple
        </p>
      </div>

      <div className="part2-card">
        <h2>Arquitecto de nube</h2>
        <img src={img2} alt="Frontend" />
        <p>
          
          Manejo la infraestructura de las aplicaciones de forma preciza y acertada
        </p>
      </div>

      <div className="part2-card">
        <h2>Administrador de wordpress</h2>
        <img src={img3} alt="Proyectos Creativos" />
        <p>
          Administrando wordpress tengo un manejo completo de paginas en poco tiempo
        </p>
      </div>
    </div>
  )
}

export default Part2
