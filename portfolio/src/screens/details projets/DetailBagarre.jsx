import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import ContactScreen from "../../assets/contactscreen.png";
import ContactScreenHover from "../../assets/contactscreenhover.png";

import Advisor from "../../assets/advisorscreen.png";
import Garou from "../../assets/garouscreen.png";
import Runtime from "../../assets/runtimescreen.png";

import s4 from "../../assets/bagarre screens/4.png";
import s5 from "../../assets/bagarre screens/5.png";
import s12 from "../../assets/bagarre screens/12.png";
import s13 from "../../assets/bagarre screens/13.png";
import s15 from "../../assets/bagarre screens/15.png";
import s16 from "../../assets/bagarre screens/16.png";
import s17 from "../../assets/bagarre screens/17.png";
import s18 from "../../assets/bagarre screens/18.png";

import styles from "./Details.module.css";

export default function DetailBagarre() {
  const [hoverContact, setHoverContact] = useState(false);
  return (
    <div>
      <Header />
      <Sidebar />

      <div className={styles.titleContainer}>
        <h2 className={styles.projectsTitle}>Bagarre Club</h2>
      </div>

      <div className={styles.apercus}>
        <img src={s18} alt="Screenshot" />
        <img src={s4} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Objectifs</h3>
        <p>
          Dans ce second travail de groupe, nous avions trouvé une base de
          données de 731 héros de tous univers (Marvel, DC, Star Wars, Seigneur
          des Anneaux, etc.) avec une description détaillée. Sur cette base nous
          avons fait ce simulateur de combats entre adversaire de notre choix,
          indivudellement ou par équipe, avec handicaps et armes. Le but est de
          s'amuser en se demandant qui gagnerait dans un combat à mort entre
          Dark Vador et Sauron.
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
            href="https://www.npmjs.com/package/axios"
            target="_blank"
            rel="noreferrer"
          >
            <li>Axios</li>
          </a>
          <a
            href="https://www.npmjs.com/package/eslint"
            target="_blank"
            rel="noreferrer"
          >
            <li>ESLint</li>
          </a>
          <a
            href="https://www.npmjs.com/package/react-router-dom"
            target="_blank"
            rel="noreferrer"
          >
            <li>React-router-dom</li>
          </a>
          <a
            href="https://www.npmjs.com/package/react-device-detect"
            target="_blank"
            rel="noreferrer"
          >
            <li>React-device-detect</li>
          </a>
        </ul>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s5} alt="Screenshot" />
        <img src={s12} alt="Screenshot" />
        <img src={s13} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Défis et problèmes rencontrés</h3>
        <h4>Algorithme</h4>
        <p>
          Je suis passionné d'algorithme. Mon temps passé sur{" "}
          <a
            href="https://www.codewars.com/users/VincentCMLejeune"
            target="_blank"
            rel="noreferrer"
          >
            Codewars
          </a>{" "}
          et mes projets peuvent en témoigner. Ce projet fut l'occasion de
          générer des combats les plus immersifs possibles, en utilisant les
          caractéristiques disponibles (force, puissance, vitesse, combat,
          durabilité) et de créer un simulateur qui se comporte le plus possible
          comme un jeu de rôle. Un projet passionnant, mais qui a connu son lot
          de bugs et de lignes de code à relire !
        </p>
        <h4>Linter</h4>
        <p>
          Rendre son code lisible, accessible. Contrainte du Linter pour se
          forcer à rédiger un code propre, lisible, qui ne fasse aucun export
          inutile, respect el workflow, nettoyer les console.log, commentaires
          et tout ce qui peut alourdir.
        </p>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s15} alt="Screenshot" />
        <img src={s16} alt="Screenshot" />
        <img src={s17} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Leçons</h3>
        <h4>Organiser son code...</h4>
        <p>
          Ce fut mon premier projet d'ampleur sur React, et il m'a appris à
          organiser les composants, les structurer, ainsi que les props à passer
          : quand passer des propriétés d'un composant à l'autre, quand se
          servir d'un contexte global.
        </p>
        <h4>... et son projet</h4>
        <p>
          Cette leçon m'a servi d'introduction à la méthodologie Scrum, et plus
          particulièrement aux outils{" "}
          <a
            href="https://www.atlassian.com/software/jira"
            target="_blank"
            rel="noreferrer"
          >
            Jira
          </a>
          . Dans le cadre d'un projet contraint par le temps, elle m'a
          discipliné sur le "must have"/"should have"/"could have".
        </p>
      </div>

      <div className={styles.ohterProjects}>
        <h3>Mes autres projets</h3>
        <div className={styles.otherProjectsContainer}>
          <Link to="/projets/advisor">
            <img src={Advisor} alt="Wild Advisor" />
          </Link>
          <Link to="/projets/runtime">
            <img src={Runtime} alt="Runtime Terror" />
          </Link>
          <Link to="/projets/garou">
            <img src={Garou} alt="Garou" />
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
