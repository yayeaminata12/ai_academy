// 📁 src/pages/AboutPage.js
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <main className="main-content">
      <h1>À propos d'AI Academy</h1>
      <section className="about-section">
        <h2>Notre mission</h2>
        <p>AI Academy est née de la conviction que l'IA transformera tous les aspects de notre société. Notre mission est de rendre l'apprentissage de l'IA accessible à tous.</p>
      </section>
      <section className="about-section">
        <h2>Notre histoire</h2>
        <p>Fondée en 2020 par un groupe d'experts en IA et d'éducateurs, AI Academy a évolué pour atteindre des apprenants du monde entier.</p>
      </section>
      <section className="about-section">
        <h2>Notre équipe</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Dr. Sarah Chen</h3>
            <p className="role">Directrice & Experte en Deep Learning</p>
            <p>PhD de Stanford, 10 ans d'expérience en IA.</p>
          </div>
          <div className="team-member">
            <h3>Marc Dubois</h3>
            <p className="role">Responsable Pédagogique</p>
            <p>15 ans d'expérience en enseignement informatique.</p>
          </div>
          <div className="team-member">
            <h3>Aisha Patel</h3>
            <p className="role">Experte en IA Appliquée</p>
            <p>Ancienne de Google AI, spécialisée en applications industrielles.</p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2>Notre approche pédagogique</h2>
        <p>Nous croyons en l'apprentissage par la pratique avec des projets inspirés de cas réels et un accompagnement personnalisé.</p>
      </section>
    </main>
  );
};

export default AboutPage;