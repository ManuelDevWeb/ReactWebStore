import React, { useRef } from "react";

// Importando estilos
import "@styles/Login.scss";

// Importando imágenes
import logo from "@logos//logo_yard_sale.svg";

const Login = () => {
  // Instanciando form con useRef
  const form = useRef(null);

  // Función para controlar el submit del formulario
  const handleSubmit = (event) => {
	event.preventDefault();
    // FormData instancia todos los elementos de un formulario y los captura conforme sean llenados
    const formData = new FormData(form.current);

    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export { Login };
