import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import ContactScreen from "../../assets/contactscreen.png";
import ContactScreenHover from "../../assets/contactscreenhover.png";

import Bagarre from "../../assets/bagarrescreen.png";
import Garou from "../../assets/garouscreen.png";
import Runtime from "../../assets/runtimescreen.png";

import s1 from "../../assets/advisor screens/1.png";
import s2 from "../../assets/advisor screens/2.png";
import s10 from "../../assets/advisor screens/10.png";
import s12 from "../../assets/advisor screens/12.png";
import s14 from "../../assets/advisor screens/14.png";
import s16 from "../../assets/advisor screens/16.png";
import s18 from "../../assets/advisor screens/18.png";

import styles from "./Details.module.css";

export default function DetailAdvisor() {
  const [hoverContact, setHoverContact] = useState(false);

  return (
    <div>
      <Header />
      <Sidebar />

      <div className={styles.titleContainer}>
        <h2 className={styles.projectsTitle}>Wild Advisor</h2>
      </div>

      <div className={styles.apercus}>
        <img src={s2} alt="Screenshot" />
        <img src={s10} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Objectifs</h3>
        <p>
          Au début de notre scolarité, les profs avaient partagé un tableau des
          meilleures adresses où manger et boire aux alentours. Pour mon premier
          projet de groupe, notre équipe a voulu faire de ce tableau une
          véritable application. Clone de Trip Advisor, il regroupe toutes les
          bonnes adresses, de les filtrer à travers un moteur de recherche et
          d'enregistrer ses adresses préférées.
        </p>

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
        </div>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s14} alt="Screenshot" />
        <img src={s1} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Défis et problèmes rencontrés</h3>
        <h4>Un projet adapté à tous les écrans</h4>
        <p>
          Vous ne voyez pas la même chose à l'écran que moi, tout comme celui
          qui verra ce site depuis une tablette, un portable, son écran
          secondaire... verront tous des choses différentes. Faire un site qui
          reste stable et présentable quel que soit la taille de l'écran fut le
          plus gros défit.
        </p>
        <h4>Premier projet à l'huile de coude</h4>
        <p>
          Pas de Frameworks ni de librairies : il nous a fallu tout faire avec
          du HTML/CSS/Javascript. La génération de cartes a été particulièrement
          difficile (tout en manipulation de DOM, sans l'aide de React).
        </p>
      </div>

      <div className={styles.apercusLarge}>
        <img src={s16} alt="Screenshot" />
        <img src={s18} alt="Screenshot" />
        <img src={s12} alt="Screenshot" />
      </div>

      <div className={styles.container}>
        <h3>Leçons</h3>
        <h4>"Les portables d'abord" (Mobile First)</h4>
        <p>
          Aujourd'hui, on ne peut plus faire l'impasse sur les écrans de
          téléphone. Or, c'est plus simple de développer une application qui
          tienne d'abord sur un téléphone, avant d'en faire une version pour
          ordinateur.
        </p>
        <h4>Travail d'équipe</h4>
        <p>
          Le premier véritable projet de groupe sur un GitHub commun, qui m'a
          appris à s'organiser, se répartir les tâches... rester sur ses propres
          fonctionnalités, rendre des comptes. Eviter les conflits (aussi bien
          de code que de personnalités!).
        </p>
      </div>

      <div className={styles.ohterProjects}>
        <h3>Mes autres projets</h3>
        <div className={styles.otherProjectsContainer}>
          <Link to="/projets/bagarre">
            <img src={Bagarre} alt="Bagarre club" />
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
