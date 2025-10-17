import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);

  // 👇 Cambia "TU_USUARIO_GITHUB" por tu nombre de usuario real
  const GITHUB_USERNAME = "SEAL2201";

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const ordered = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(ordered);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <img
          src={`https://github.com/${GITHUB_USERNAME}.png`}
          alt="Perfil"
          className="avatar"
        />
        <h1>👋 Hola, soy Kevin Cando</h1>
        <p>
          Desarrollador Full Stack con experiencia en FastAPI, Docker,
          PostgreSQL, React, Node.js y AWS.
        </p>
      </header>

      <section>
        <h2>🚀 Mis proyectos públicos</h2>
        <div className="repo-list">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <h3>{repo.name}</h3>
              <p>{repo.description || "Sin descripción"}</p>
              <span>⭐ {repo.stargazers_count}</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Kevin Cando —{" "}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://linkedin.com/in/TU_LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
