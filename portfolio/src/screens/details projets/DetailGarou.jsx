import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import ContactScreen from "../../assets/contactscreen.png";
import ContactScreenHover from "../../assets/contactscreenhover.png";

import Advisor from "../../assets/advisorscreen.png";
import Bagarre from "../../assets/bagarrescreen.png";
import Runtime from "../../assets/runtimescreen.png";

import s1 from "../../assets/garou screens/1.png";
import s4 from "../../assets/garou screens/4.png";
import s6 from "../../assets/garou screens/6.png";

import styles from "./Details.module.css";

export default function DetailGarou() {
  const [hoverContact, setHoverContact] = useState(false);
  return (
    <div>
      <Header />
      <Sidebar />

      <div className={styles.titleContainer}>
        <h2 className={styles.projectsTitle}>Garou</h2>
      </div>

      <div className={styles.apercus}>
        <img src={s4} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Objectifs</h3>
        <p>
          Ayant fait 6 ans de théâtre, les{" "}
          <a
            href="https://www.loups-garous-en-ligne.com/"
            target="_blank"
            rel="noreferrer"
          >
            Loups-Garous de Thiercelieux
          </a>{" "}
          figurent parmi mes jeux préférés. Mon jeu de cartes étant resté chez
          mes parents, j'ai saisi ce prétexte de faire un projet entièrement
          personnel. Cette application accueille l'utilisateur en demandant le
          nombre de villageois, garous et spéciaux souhaités (voyante, sorcière,
          etc.). En retour, et après avoir enregistré les noms des joueurs, il
          distribue aléatoirement les cartes, qui peuvent être retournées,
          révélant au public la véritable identité du joueur !
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
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
            alt="Git"
          />
        </div>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s6} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Défis et problèmes rencontrés</h3>
        <h4>Organiser un formulaire</h4>
        <p>
          Noter les noms et distribuer des cartes. Simple sur le papier, mais le
          code m'a procuré bien des défis (empêcher deux noms identiques,
          distribuer aléatoirement les cartes, enregistrer les données
          formulaire et le réinitialiser pour une nouvelle partie).
        </p>
        <h4>Hébergement en ligne</h4>
        <p>
          Ce projet est toujours en cours de développement. Mon objectif est de
          permettre d'héberger des parties en ligne, avec pour chaque joueur des
          droits différents (il ne s'agit pas d'autoriser tout le monde à
          retourner les cartes des autres !).
        </p>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s1} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Leçons</h3>
        <h4>L'expérience utilisateur d'abord</h4>
        <p>
          Ce site doit donner envie de lancer une partie de loup garou. Mais
          tout le monde n'y entretient pas le même rapport à ce jeu, et
          l'application doit faire cohabiter joueurs chevronnés et débutants.
          Concrètement, j'ai rendu l'interface la plus légère possible, tout en
          permettant de se référer aux (nombreuses) règles du jeu à tout moment.
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
          <Link to="/projets/bagarre">
            <img src={Bagarre} alt="Bagarre Club" />
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
