import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './CourseDetailPage.css';

const CourseDetailPage = ({ courses }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Trouver le cours correspondant à l'ID
  const course = courses.find(c => c.id === parseInt(id));

  // Si le cours n'existe pas, rediriger vers la page des cours
  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Cours non trouvé</h2>
        <p>Désolé, le cours que vous recherchez n'existe pas.</p>
        <Link to="/courses" className="btn">Voir tous les cours</Link>
      </div>
    );
  }

  // Enregistrer le cours dans le stockage local pour les cours récemment consultés
  useEffect(() => {
    if (course) {
      const stored = JSON.parse(localStorage.getItem("recentCourses")) || [];
      const updated = [course.id, ...stored.filter(id => id !== course.id)].slice(0, 3);
      localStorage.setItem("recentCourses", JSON.stringify(updated));
    }
  }, [course]);

  // Fonction pour retourner à la liste des cours
  const goBack = () => {
    navigate('/courses');
  };

  // Fonction pour partager le lien du cours
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Lien du cours copié !");
  };

  // État pour l'onglet sélectionné
  const [activeTab, setActiveTab] = useState('description');

  // Fonction pour changer l'onglet actif
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="main-content">
      <div className="course-detail">
        <button className="back-button" onClick={goBack}> &larr; Retour aux cours </button>
        <button className="btn" onClick={handleShare}>Partager ce cours</button>

        <div className="course-header">
          <h1>{course.title}</h1>
          <div className="course-meta">
            <span className="level">{course.level}</span>
            <span className="price">{course.price} €</span>
          </div>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => handleTabClick('description')}
          >
            Description
          </button>
          <button
            className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`}
            onClick={() => handleTabClick('curriculum')}
          >
            Programme
          </button>
        </div>

        <div className="course-content">
          {activeTab === 'description' && (
            <section className="course-description">
              <h2>Description du cours</h2>
              <p>{course.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna eu eros lacinia, ac dignissim nisl ultrices. Proin consectetur felis ut metus ultricies, at tincidunt massa gravida.
              </p>
            </section>
          )}

          {activeTab === 'curriculum' && (
            <section className="course-curriculum">
              <h2>Programme du cours</h2>
              <div className="curriculum-modules">
                <div className="module">
                  <h3>Module 1: Introduction</h3>
                  <ul>
                    <li>Qu'est-ce que l'intelligence artificielle?</li>
                    <li>Histoire de l'IA</li>
                    <li>Applications modernes de l'IA</li>
                  </ul>
                </div>

                <div className="module">
                  <h3>Module 2: Fondamentaux</h3>
                  <ul>
                    <li>Algorithmes et structures de données</li>
                    <li>Probabilités et statistiques</li>
                    <li>Optimisation</li>
                  </ul>
                </div>

                <div className="module">
                  <h3>Module 3: Projets pratiques</h3>
                  <ul>
                    <li>Configuration de l'environnement</li>
                    <li>Projet guidé</li>
                    <li>Projet final</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="enroll-section">
          <h2>Prêt à commencer votre apprentissage?</h2>
          <button className="btn btn-large">S'inscrire maintenant</button>
        </div>
      </div>
    </main>
  );
};

export default CourseDetailPage;
