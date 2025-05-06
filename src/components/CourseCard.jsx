// src/components/CourseCard.jsx
import React from 'react';

function CourseCard({ title, description, level }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Niveau :</strong> {level}</p>
    </div>
  );
}

export default CourseCard;
