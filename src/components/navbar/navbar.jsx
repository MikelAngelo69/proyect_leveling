import React from 'react';
import './navbar.css';

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
      <a className="boton-login" href="#">Iniciar Sesión</a>
    </header>
  );
}

export default Navbar;
