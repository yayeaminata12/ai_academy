// 📁 src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main className="main-content not-found">
      <h1>404</h1>
      <h2>Page Non Trouvée</h2>
      <p>Oups ! La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="btn">Retour à l'accueil</Link>
    </main>
  );
};

export default NotFoundPage;