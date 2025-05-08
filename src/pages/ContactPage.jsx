// 📁 src/pages/ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true, message: 'Veuillez remplir tous les champs obligatoires.' });
      return;
    }
    console.log('Données soumises :', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormStatus({ submitted: true, error: false, message: 'Votre message a été envoyé avec succès !' });
  };

  return (
    <main className="main-content">
      <h1>Contactez-nous</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Informations de contact</h2>
          <p>N'hésitez pas à nous contacter pour toute question.</p>
          <div className="contact-details">
            <div className="contact-item"><h3>Adresse</h3><p>123 Rue IA, Dakar</p></div>
            <div className="contact-item"><h3>Email</h3><p>info@aiacademy.fr</p></div>
            <div className="contact-item"><h3>Téléphone</h3><p>+221 33 123 45 67</p></div>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Envoyez-nous un message</h2>
          {formStatus.submitted && <div className="form-success">{formStatus.message}</div>}
          {formStatus.error && <div className="form-error">{formStatus.message}</div>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn">Envoyer</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;