// 📁 src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CourseDetailPage from './pages/CourseDetailPage';
import MemberLayout from './pages/MemberArea/MemberLayout';
import Dashboard from './pages/MemberArea/Dashboard';
import Profile from './pages/MemberArea/Profile';
import MyCourses from './pages/MemberArea/MyCourses';
import Settings from './pages/MemberArea/Settings';
import SearchPage from "./pages/SearchPage";

// Import des styles
import './components/Header.css';
import './components/CourseList.css';
import './components/Counter.css';
import './pages/AboutPage.css';
import './pages/CoursesPage.css';
import './pages/ContactPage.css';
import './pages/NotFoundPage.css';
import './pages/CourseDetailPage.css';
import './pages/MemberArea/MemberArea.css';

function App() {
  const coursesData = [
    { id: 1, title: "Introduction à l'IA", description: "Découvrez les fondamentaux de l'intelligence artificielle.", price: 199, level: "Débutant" },
    { id: 2, title: "Machine Learning Fondamental", description: "Apprenez les principes du machine learning.", price: 299, level: "Intermédiaire" },
    { id: 3, title: "Deep Learning Avancé", description: "Maîtrisez les réseaux de neurones profonds.", price: 399, level: "Avancé" },
    { id: 4, title: "IA et Éthique", description: "Explorez les implications éthiques de l'IA.", price: 249, level: "Tous niveaux" }
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage courses={coursesData} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage courses={coursesData} />} />
          <Route path="/courses/:id" element={<CourseDetailPage courses={coursesData} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage courses={coursesData} />} />
          <Route path="/member" element={<MemberLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;