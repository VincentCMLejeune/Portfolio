import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import ContactScreen from "../../assets/contactscreen.png";
import ContactScreenHover from "../../assets/contactscreenhover.png";

import Github from "../../assets/logos/github.svg";

import s1 from "../../assets/runtime screens/1.png";
import s2 from "../../assets/runtime screens/2.png";

import Advisor from "../../assets/advisorscreen.png";
import Garou from "../../assets/garouscreendesk.png";
import Bagarre from "../../assets/bagarrescreen.png";

import styles from "./Details.module.css";

export default function DetailRuntime() {
  const [hoverContact, setHoverContact] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />

      <div className={styles.titleContainer}>
        <h2 className={styles.projectsTitle}>Runtime Terror</h2>
      </div>

      <div className={styles.apercus}>
        <img src={s1} alt="Screenshot" />
      </div>

      <div className={styles.links} id={styles.alone}>
        <a
          href="https://github.com/VincentCMLejeune/RuntimeTerror"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.link}>
            <img src={Github} alt="Github" />
            <p>Code</p>
          </div>
        </a>
      </div>

      <div className={styles.container}>
        <h3>Objectifs</h3>
        <p>
          Pour mon premier Hackathon de 24 heures sur le thème de la musique,
          notre groupe a développé un jeu de rythme, joué depuis la webcam. Ce
          projet a remporté ce Hackathon organisé entre les campus français de
          la{" "}
          <a
            href="https://www.wildcodeschool.com/fr-FR"
            target="_blank"
            rel="noreferrer"
          >
            Wild Code School
          </a>
          .
        </p>

        <h3>Outils</h3>
        <div className={styles.outilsContainer}>
          <img
            src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="react"
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
            src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
            alt="npm"
          />
          <img
            src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
            alt="Node"
          />
          <img
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
          />
        </div>
        <h3 className={styles.dependenciesIntro}>Dependances</h3>
        <ul className={styles.dependenciesList}>
          <a
            href="https://google.github.io/mediapipe/"
            target="_blank"
            rel="noreferrer"
          >
            <li>MediaPipe</li>
          </a>
          <a
            href="https://www.npmjs.com/package/axios"
            target="_blank"
            rel="noreferrer"
          >
            <li>Axios</li>
          </a>
          <a
            href="https://www.npmjs.com/package/react-router"
            target="_blank"
            rel="noreferrer"
          >
            <li>React-router</li>
          </a>
          <a
            href="https://www.npmjs.com/package/react-router-dom"
            target="_blank"
            rel="noreferrer"
          >
            <li>React-router-dom</li>
          </a>
          <a
            href="https://www.npmjs.com/package/react-webcam"
            target="_blank"
            rel="noreferrer"
          >
            <li>React-webcam</li>
          </a>
        </ul>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s2} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Défis et problèmes rencontrés</h3>
        <h4>Le manque de temps</h4>
        <p>
          Développé à partir de{" "}
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
            Vite
          </a>
          , il nous a fallu tout faire... vite. Les bugs n'étaient pas
          insurmontables, mais chacun nous faisait perdre un temps précieux. Ce
          projet a été utile en nous apprenant à chercher des Frameworks qui
          nous feraient gagner du temps et à aller à l'essentiel.
        </p>
        <h3>Leçons</h3>
        <h4>Done is better than perfect</h4>
        <p>
          Nous avons gagné le Hackathon en partie parce que certains de nos
          concurrents, qui avaient de très bonnes idées et une application très
          bonne, ont rencontré des problèmes au moment de la présentation. Notre
          équipe voulait mettre dans Runtime Terror bien plus que ce que nous
          avons fait en 24 heures, mais nous avons réussi à nous discipliner
          pour soumettre un projet qui fonctionnait.
        </p>
      </div>

      <div className={styles.ohterProjects}>
        <h3>Mes autres projets</h3>
        <div className={styles.otherProjectsContainer}>
          <Link to="/projets/advisor">
            <img src={Advisor} alt="Wild Advisor" />
          </Link>
          <Link to="/projets/garou">
            <img src={Garou} alt="Garou" />
          </Link>
          <Link to="/projets/bagarre">
            <img src={Bagarre} alt="Bagarre club" />
          </Link>
        </div>
      </div>
      <div
        className={styles.callToAction}
        onMouseOver={() => setHoverContact(true)}
        onMouseLeave={() => setHoverContact(false)}
      >
        <Link to="/contact">
          {hoverContact ? (
            <img src={ContactScreen} alt="Computer" />
          ) : (
            <img src={ContactScreenHover} alt="Computer" />
          )}
        </Link>
      </div>
    </div>
  );
}
