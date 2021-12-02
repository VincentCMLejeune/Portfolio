import Header from "../../components/header/Header";
import ProjectCard from "../../components/projectcard/ProjectCard";

import AdvisorPic from "../../assets/advisor.png";
import BagarrePic from "../../assets/bagarre.png";
import GarouPic from "../../assets/garou.png";
import RuntimePic from "../../assets/runtime.png";

import styles from "./Projets.module.css";

export default function Projets() {
  return (
    <div className={styles.projets}>
      <Header />
      <h2>Projets</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          title="Bagarre Club"
          img={BagarrePic}
          description="Une appli de combat"
          link="/projets/bagarre"
        />
        <ProjectCard
          title="Loup Garou"
          img={GarouPic}
          description="Un générateur de cartes"
          link="/projets/garou"
        />
        <ProjectCard
          title="RunTime Terror"
          img={RuntimePic}
          description="Un jeu de rythme avec la webcam"
          link="/projets/runtime"
        />
        <ProjectCard
          title="Wild Advisor"
          img={AdvisorPic}
          description="Un guide cullinaire autour de l'école"
          link="/projets/advisor"
        />
      </div>
    </div>
  );
}
