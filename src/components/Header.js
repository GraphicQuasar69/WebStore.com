// src/components/Header/Header.js
import React from 'react';
import './Header.css'; // Create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Web Store</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
