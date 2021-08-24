import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="Header">
    <nav className="nav">
      <div className="logo">Bookstore CMS</div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Books</Link>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link">Categories</Link>
        </li>
      </ul>
      <div className="profile">
        <i className="bx bxs-user" />
      </div>
    </nav>
  </header>
);

export default Header;
