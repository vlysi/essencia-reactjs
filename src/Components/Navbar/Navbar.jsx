import React, { useState } from 'react';
import './Navbar.css';

import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("shop");

  // Lista de elementos del menú
  const menuItems = [
    { label: "Home", value: "home", path: "/" },
    { label: "Woman", value: "woman", path: "/woman" },
    { label: "Man", value: "man", path: "/man" },
    { label: "Kids", value: "kids", path: "/kids" }
  ];

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <p>ESSENCIA</p>
      </div>

      {/* Menú de navegación */}
      <ul className="nav-menu">
        {menuItems.map(item => (
          <li 
            key={item.value}
            onClick={() => setActiveMenu(item.value)}
            className={activeMenu === item.value ? 'active' : ''}  //Asigno la clase 'active' si el menú está seleccionado
          >
            <Link to={item.path}>{item.label}</Link>
            <hr />
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;


