import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "SEAL2201";

  const colaboraciones = [
    {
      nombre: "Sistema Intranet",
      descripcion:
        "Aplicación web para la gestión de Productos, Usuarios, Ventas y Puntos de Venta, usando React, Node.js, JavaScript y MySQL.",
      rol: "Frontend & Backend",
      link: "https://github.com/MarkupDesarrollo/mobile-trade",
      privado: false,
    },
    {
      nombre: "App Móvil Gestión de Productos en Percha",
      descripcion:
        "App móvil para enviar alertas, levantar formularios y hacer Check-in/out en PDV con geolocalización y datos en tiempo real.",
      rol: "Full Stack Developer",
      link: "https://github.com/MarkupDesarrollo/perchas-markup",
      privado: false,
    },
    {
      nombre: "ChatBot potenciado con IA",
      descripcion:
        "ChatBot que procesa lenguaje natural y entrega respuestas basadas en la base de datos interna de la empresa.",
      rol: "Full Stack Developer",
      link: "#",
      privado: true,
    },
  ];

  useEffect(() => {
    async function fetchRepos() {
      try {
        const userRepos = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        ).then((res) => res.json());

        const orderedUserRepos = userRepos.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        setRepos(orderedUserRepos);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener los repositorios:", err);
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div className="container">
      <header className="hero">
        <img
          src={`https://github.com/${GITHUB_USERNAME}.png`}
          alt="Perfil"
          className="avatar"
        />
        <h1>
          👋 ¡Hola! Soy <span className="name">Kevin Cando</span>
        </h1>
        <p className="subtitle">
          Me especializo en desarrollar aplicaciones modernas y robustas, optimizando
          la integración entre frontend y backend. Me gusta trabajar con tecnologías
          escalables, seguir buenas prácticas y aprender constantemente.
        </p>

        <div className="social-links">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn github"
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-cando-817990296"
            target="_blank"
            rel="noopener noreferrer"
            className="btn linkedin"
          >
            💼 LinkedIn
          </a>
        </div>
      </header>

      <section className="about">
        <h2>💡 Sobre mí</h2>
        <p>
          Soy un Joven con formación en Tecnología Superior en
          Desarrollo de Software, apasionado por la tecnología y a
          la vanguardia de su crecimiento, entusiasta con
          habilidades en desarrollo de software, un enfoque en la
          resolución de problemas, y una sólida comprensión de
          los principios de programación, responsable, dinámico,
          creativo y con ganas de crecer, dispuesto a desarrollar
          mi potencial en cualquier tipo de ambiente laboral, así
          como la fácil adaptación a distintos equipos de trabajo y
          situaciones repentinas, que pueden suceder en el día a
          día.
        </p>
      </section>

      <section className="skills">
        <h2>🛠 Habilidades</h2>
        
        <div className="skill-category">
          <h3>💻 Lenguajes de Programación</h3>
          <ul className="skills-list">
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Flutter</li>
            <li>C#</li>
            <li>PHP</li>
            <li>Swift</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>🖥 Tecnologías / Frameworks</h3>
          <ul className="skills-list">
            <li>HTML / CSS</li>
            <li>React / React Native</li>
            <li>Node.js / Express.js</li>
            <li>Angular</li>
            <li>FastAPI / Django / Flask</li>
            <li>SpringBoot / .NET / Laravel</li>
            <li>Nginx / Proxmox / Docker / Kubernetes / Jenkins / AWS / XCode</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>🗄 Bases de Datos</h3>
          <ul className="skills-list">
            <li>SQL / PostgreSQL / MySQL / MariaDB / Oracle / MongoDB / Firebase</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>🖥 Sistemas Operativos</h3>
          <ul className="skills-list">
            <li>Archlinux / Linux / RockyLinux / Ubuntu / Windows / MacOS</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>🌐 Idiomas</h3>
          <ul className="skills-list">
            <li>Español (Nativo)</li>
            <li>Inglés (B2.2)</li>
          </ul>
        </div>
      </section>


      <section className="stats">
        <h2>📊 Datos de impacto</h2>
        <ul className="stats-list">
          <li>🗂 {repos.length} Repositorios personales</li>
          <li>🤝 {colaboraciones.length} Proyectos colaborativos</li>
          <li>⭐ {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)} Estrellas en GitHub</li>
        </ul>
      </section>

      {loading ? (
        <p className="loading">⏳ Cargando proyectos...</p>
      ) : (
        <>
          <section className="projects">
            <h2>🚀 Mis proyectos personales</h2>
            <div className="repo-list">
              {repos.map((repo) => (
                <div key={repo.id} className="repo-card">
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "Sin descripción disponible."}</p>
                  <div className="repo-footer">
                    <span>⭐ {repo.stargazers_count}</span>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver código →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="projects">
            <h2>🤝 Proyectos colaborativos / privados</h2>
            <div className="repo-list">
              {colaboraciones.map((repo, index) => (
                <div key={index} className="repo-card">
                  <h3>{repo.nombre}</h3>
                  <p>{repo.descripcion}</p>
                  <div className="repo-footer">
                    <span>Rol: {repo.rol}</span>
                    {repo.privado ? (
                      <span>🔒 Privado</span>
                    ) : (
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver código →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}


      <footer>
        <p>
          © {new Date().getFullYear()} <b>Kevin Cando</b> — Hecho con ❤️ y React.
        </p>
      </footer>
    </div>
  );
}

export default App;
