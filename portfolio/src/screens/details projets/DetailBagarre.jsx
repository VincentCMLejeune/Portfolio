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
          Dans ce second projet de groupe, nous nous sommes servis d'une base de
          données de 731 héros de tous univers (Marvel, DC, Star Wars, Seigneur
          des Anneaux, etc.) avec une description détaillée (biographie,
          statistiques et image d'illustration principalement). Nous en avons
          fait ce simulateur de combats (indivudels ou par équipe), avec
          handicaps et armes. Le but était de s'amuser à voir qui de Dark Vador
          ou Sauron sortirait vainqueur d'un combat à mort.
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
        <h4>Un simulateur réaliste</h4>
        <p>
          Je suis passionné d'algorithme, comme mon temps passé sur{" "}
          <a
            href="https://www.codewars.com/users/VincentCMLejeune"
            target="_blank"
            rel="noreferrer"
          >
            Codewars
          </a>{" "}
          peut en témoigner. Ce projet était l'occasion de générer les combats
          les plus immersifs possibles, en utilisant les caractéristiques
          disponibles (force, puissance, vitesse, combat, durabilité) et de
          générer un combat qui se comporte le plus possible comme un jeu de
          rôle. Une tâche passionnante, mais qui a connu son lot de bugs et de
          lignes de code à relire !
        </p>
        <h4>Linter</h4>
        <p>
          Nous nous sommes servis du package ESLint qui interdit de "commiter"
          du code qui ne soit pas parfaitement propre et lisible. Ca a été une
          grosse école de discipline, qui m'a appris à rendre le code le plus
          léger et le plus clair possible (par d'imports inutiles, et nettoyer
          tous console.log impertinents ou "dead code" avant de passer en
          production).
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
          organiser les composants et les propriétés qui circulent entre eux.
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
          discipliné sur le fait de bien distinguer "must have"/"should
          have"/"could have" et de suivre très régulièrement la progression du
          projet.
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
