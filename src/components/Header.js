import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <nav>
      <div className="logo">Bookstore CMS</div>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
