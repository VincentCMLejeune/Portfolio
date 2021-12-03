import Header from "../../components/header/Header";

import styles from "./Details.module.css";

export default function DetailBagarre() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>La carte du Bagarre Club</h2>
        <img
          src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
          alt="Git"
        />
        <img
          src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
          alt="npm"
        />
        <img
          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
          alt="Node"
        />
        Frameworks
      </div>
    </div>
  );
}

// Se servir d'une api de données de 731 héros et les faire se combattre, individuellement ou par équipe
// React, axios, Jira
// Se servir d'une base de données, traiter l'information et créer un algorithme qui utilise les classes pour faire ce qu'on en veut : un combat à mort. Très satisfaisant d'arriver enfin à faire fonctionner tout le processus sur tous les héros. Mon projet préféré, car la'lgo est mon domaine préféré
// Leçons apprises : à ce jour mon plus gros projet, beaucoup de leçons techniques (elaborate), mais la plus importante est sur l'organisation des pages, composants, données, algorithme, etc. Rendre son code lisible aux autres... et à moi même quand j'y reviens une semaine plus tard !
