import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Bar (a menu) allowing navigation around the Application
 * Shows currently active Menu Item
 */
const NavBar = props => {
  // we need it to match active link
  const pathname = props.location.pathname;

  const [opened, setOpened] = useState(false);

  const toggleBurgerMenu = () => {
    setOpened(!opened);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">Qantas Airport App</div>
          <span
            className={'navbar-burger burger' + (opened ? ' is-active' : '')}
            data-target="navbarMenuHeroA"
            onClick={() => toggleBurgerMenu()}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroA" className={'navbar-menu' + (opened ? ' is-active' : '')}>
          <div className="navbar-end">
            <Link to="/" className={'navbar-item' + (pathname === '/' ? ' is-active' : '')} onClick={() => toggleBurgerMenu()}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
