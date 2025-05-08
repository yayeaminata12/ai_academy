// 📁 src/pages/MemberArea/MemberLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MemberArea.css';

const MemberLayout = () => {
  return (
    <div className="member-layout">
      <aside className="sidebar">
        <h2>Espace Membre</h2>
        <nav>
          <ul>
            <li><Link to="/member">Dashboard</Link></li>
            <li><Link to="/member/profile">Mon Profil</Link></li>
            <li><Link to="/member/courses">Mes Cours</Link></li>
            <li><Link to="/member/settings">Paramètres</Link></li>
          </ul>
        </nav>
      </aside>
      <section className="member-content">
        <Outlet />
      </section>
    </div>
  );
};

export default MemberLayout;