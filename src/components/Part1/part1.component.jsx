import React from 'react'
import './part1.styles.css'
import MikelImage from '../../assets/Mikel.webp'

function Part1() {
  return (
    <div className="part1-container">
      <div className="part1-texto">
        <h1>Mikel Full Stack Developer And Cloud Arquitect</h1>
        <p>Mi nombre es Miguel Gomez me gusta que me digan Mikel y soy un gran programador</p>
        <button>Leer más</button>
      </div>

      <div className="part1-imagen">
        <img src={MikelImage} alt="MikelImage" />
      </div>
    </div>
  )
}

export default Part1
