import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0);

  const courses = [
    { title: 'Intro à l’IA', description: 'Les bases de l’intelligence artificielle.', level: 'Débutant' },
    { title: 'Machine Learning', description: 'Apprenez les algorithmes de base.', level: 'Intermédiaire' },
    { title: 'Deep Learning', description: 'Réseaux de neurones et plus.', level: 'Avancé' },
  ];

  return (
    <div className="app">
      <NavBar />
      <Header />
      <main className="content">
        <h2 id="home">Bienvenue sur AI Academy</h2>
        <p>
          Notre mission est de rendre l'apprentissage de l'intelligence artificielle accessible à tous.
        </p>

        <h3 id="courses">Nos cours</h3>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Vous avez cliqué {count} fois
          </button>
          <p>
            Ce compteur illustre la gestion d'état avec le hook useState.
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <input 
            type="text" 
            placeholder="Tapez votre nom" 
            onChange={(e) => console.log("Nom :", e.target.value)} 
            style={{ padding: '0.5rem', width: '300px' }}
          />
          <br /><br />
          <button onDoubleClick={() => alert("Double clic détecté !")}>
            Double-cliquez ici
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
