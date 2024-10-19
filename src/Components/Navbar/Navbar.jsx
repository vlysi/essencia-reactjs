import React, { useState } from 'react';
import './Navbar.css';

import cart_icon from '../../assets/cart_icon.png';


const MenuItem = ({ label, value, activeMenu, setMenu }) => {
 
  const isActive = activeMenu === value;

  return (
    <li
      onClick={() => setMenu(value)}
      className={isActive ? 'active' : ''}
    >
      {label}
      <hr /> 
    </li>
  );
};

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* <img src={logo} alt="" /> */}
        <p>ESSENCIA</p>
      </div>
      <ul className="nav-menu">
        <MenuItem label="Shop" value="shop" activeMenu={menu} setMenu={setMenu} />
        <MenuItem label="Men" value="men" activeMenu={menu} setMenu={setMenu} />
        <MenuItem label="Women" value="women" activeMenu={menu} setMenu={setMenu} />
        <MenuItem label="Kids" value="kids" activeMenu={menu} setMenu={setMenu} />
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar