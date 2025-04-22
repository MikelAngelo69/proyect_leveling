import React from "react";
import "./login.styles.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar sesión</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <button type="submit" className="btn-login">Iniciar sesión</button>
        </form>

        <a href="/forgot-password" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}

export default Login;
