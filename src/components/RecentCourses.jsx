import React from "react";
import { Link } from "react-router-dom";
import './RecentCourses.css';


const RecentCourses = ({ courses }) => {
  const storedIds = JSON.parse(localStorage.getItem("recentCourses")) || [];
  const recent = courses.filter(c => storedIds.includes(c.id));

  if (recent.length === 0) return null;

  return (
    <section className="recent-courses">
      <h2>Cours récemment consultés</h2>
      <ul>
        {recent.map(c => (
          <li key={c.id}><Link to={`/courses/${c.id}`}>{c.title}</Link></li>
        ))}
      </ul>
    </section>
  );
};

export default RecentCourses;
