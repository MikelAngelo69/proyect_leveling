import React from 'react'
import './part3.styles.css'
import grande from '../../assets/Image1.svg'
import cardImg from '../../assets/Mikel.webp'

function Part3() {
  return (
    <div className="part3-container">
      <h1 className="part3-title">Proyectos Destacados</h1>

      <div className="part3-content">
        <div className="part3-cards">
          <div className="part3-card">
            <img src={cardImg} alt="Mini Proyecto 1" />
            <div className="part3-card-info">
              <h3>Logro 1</h3>
              <p>full stack developer con react</p>
            </div>
          </div>

          <div className="part3-card">
            <img src={cardImg} alt="Mini Proyecto 2" />
            <div className="part3-card-info">
              <h3>Logro 2</h3>
              <p>certificacion az900 en microsoft azure</p>
            </div>
          </div>

          <div className="part3-card">
            <img src={cardImg} alt="Mini Proyecto 3" />
            <div className="part3-card-info">
              <h3>Logro 3</h3>
              <p>Full stack con wordpress</p>
            </div>
          </div>

          <div className="part3-card">
            <img src={cardImg} alt="Mini Proyecto 4" />
            <div className="part3-card-info">
              <h3>Logro 4</h3>
              <p>Manejo de python</p>
            </div>
          </div>

          <div className="part3-card">
            <img src={cardImg} alt="Mini Proyecto 5" />
            <div className="part3-card-info">
              <h3>Logro 5</h3>
              <p>Nivel B2 en ingles</p>
            </div>
          </div>

          <div className="part3-card">
            <img src={cardImg} alt="Mini Proyecto 6" />
            <div className="part3-card-info">
              <h3>Logro 6</h3>
              <p>Manejo de php</p>
            </div>
          </div>
        </div>

        <div className="part3-image">
          <img src={grande} alt="Proyecto destacado grande" />
        </div>
      </div>
    </div>
  )
}

export default Part3
