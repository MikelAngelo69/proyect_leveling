import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="barra-navegacion">
      <div className="logo-marca">MIKEL</div>
      <nav className="menu-principal">
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Portafolio</a>
        <a href="#">Sobre mí</a>
        <a href="#">Contacto</a>
      </nav>
      <Link to="/login">Iniciar Sesión</Link>
    </header>
  );
}

export default Navbar;
