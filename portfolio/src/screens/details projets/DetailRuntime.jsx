import { Link } from "react-router-dom";

import Header from "../../components/header/Header";

import styles from "./Details.module.css";

export default function DetailRuntime() {
  return (
    <div>
      <Header />
      <div className={styles.titleContainer}>
        <h2 className={styles.projectsTitle}>Runtime Terror</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.resume}></div>
        <h3 className={styles.subtitle}>Objectifs</h3>
        <div className={styles.projectIntro}>
          Projet de hackathon sur le thème de la musique. On a imaginé un jeu de
          rythme. Gros défi !
        </div>
        <h3>Outils</h3>
        <div className={styles.outilsContainer}>
          <img
            src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            alt="Html"
          />
          <img
            src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            alt="Css"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="Javascript"
          />
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
          />
          <img
            src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"
            alt="Discord"
          />
          <ul className={styles.dependenciesList}>
            <a
              href="https://www.npmjs.com/package/react-router-dom"
              target="_blank"
              rel="noreferrer"
            >
              <li>React-router-dom</li>
            </a>
            <li>React-webcam</li>
          </ul>
        </div>
        <h3>Défis et problèmes rencontrés</h3>
        <h4>Le manque de temps</h4>
        <p>
          Quelque part c'était utile, cela nous a appris à
          chercher des Frameworks (ne pas gaspiller du temps) et à aller à
          l'essentiel
        </p>
        <div className={styles.projectText}>Responsive web design</div>
        <h3 className={styles.subtitle}>Leçons</h3>
        <div className={styles.projectText}>
          Appris à mieux travailler en équipe et à avoir une vision globale d'un
          projet, et à travailler en groupe. Mobile first
        </div>
      </div>
      <h3>Mes autres projets</h3>
      <div className={styles.otherProjects}>
        <Link to=""></Link>
      </div>
      <div className={styles.callToAction}>
        <h3>Lançons notre prochain projet ensemble</h3>
      </div>
    </div>
  );
}
