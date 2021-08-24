import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="Header">
    <nav className="nav">
      <div className="logo">Bookstore CMS</div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active-link" exact>BOOKS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categories" className="nav-link" activeClassName="active-link" exact>CATEGORIES</NavLink>
        </li>
      </ul>
      <div className="profile">
        <i className="bx bxs-user" />
      </div>
    </nav>
  </header>
);

export default Header;
