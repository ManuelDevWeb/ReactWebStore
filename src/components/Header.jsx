import React, { useState, useContext } from "react";

// Importando context
import {AppContext} from '@context/AppContext';

// Importando componentes
import {Menu} from "@components/Menu";
import {MyOrder} from "@containers/MyOrder";

// Importando estilos
import "@styles/Header.scss";

// Importando imágenes
import imgMenu from "@icons/icon_menu.svg";
import imgShopping from "@icons/icon_shopping_cart.svg";
import logo from "@logos/logo_yard_sale.svg";

const Header = () => {
  // Destructurando elementos a utilizar del context
  const {state:{cart}}=useContext(AppContext);

  // Manejando el estado del toggle para alternar el menu
  const [toggle, setToggle] = useState(false);

  // Manejando el estado del toggle para alterar el menu de orden
  const [toggleOrders, setToggleOrders]=useState(false);

  // Función que se ejecuta al darle click a nuestro correo de usuario
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Función que se ejecuta al darle click a nuestro logo de carrito de compras
  const handleToggleOrders=()=>{
    setToggleOrders(!toggleOrders);
  }

  return (
    <nav>
      <img src={imgMenu} alt="menu" className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={imgShopping} alt="shopping cart" />
            {cart.length > 0 ? <div>{cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {
        // Validando si toggle es verdadero para mostrar o no el componente Menu
        toggle ? <Menu /> : null
      }
      {
        // Validando si toggleOrders es verdadero para mostrar o no el componente MyOrder
        toggleOrders && <MyOrder />
      }
    </nav>
  );
};

export { Header };
