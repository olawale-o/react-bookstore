import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <div className="logo">Bookstore CMS</div>
          <ul>
            <li>
              <a href="/#">Books</a>
            </li>
            <li>
              <a href="/#">Categories</a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
