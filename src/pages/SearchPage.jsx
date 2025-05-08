import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = ({ courses }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="main-content">
      <h1>Résultats pour : "{query}"</h1>
      {filtered.length > 0 ? (
        <ul>
          {filtered.map((c) => (
            <li key={c.id}>{c.title} - {c.level}</li>
          ))}
        </ul>
      ) : (
        <p>Aucun résultat trouvé.</p>
      )}
    </main>
  );
};

export default SearchPage;
