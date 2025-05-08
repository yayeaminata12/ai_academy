import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/"><h1>AI Academy</h1></Link>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><NavLink to="/about">À propos</NavLink></li>
          <li><NavLink to="/courses">Cours</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/member">Espace Membre</NavLink></li>
        </ul>
      </nav>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher un cours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
};

export default Header;
