// src/components/NavBar.jsx
import React from 'react';

function NavBar() {
  return (
    <nav style={{
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Accueil</a>
      <a href="#courses" style={{ color: 'white', textDecoration: 'none' }}>Cours</a>
      <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
    </nav>
  );
}

export default NavBar;
