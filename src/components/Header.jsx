import React from "react";

// Importando estilos
import '@styles/Header.scss';

// Importando imágenes
import imgMenu from '@icons/icon_menu.svg';
import imgShopping from '@icons/icon_shopping_cart.svg';
import logo from '@logos/logo_yard_sale.svg';

const Header = () => {
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
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={imgShopping} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
