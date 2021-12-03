import Header from "../../components/header/Header";

import styles from "./Details.module.css";

export default function DetailGarou() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>La carte du Loup Garou</h2>
      </div>
    </div>
  );
}



// Loup garou
// Un de mes jeux préférés, et une possibilité d'entraînement, joindre l'utile à l'agréable dans un projet totalement personnel
// React (c'est tout ?!)
// Difficultés : parcours de navigation et asynchrone. Se servir de composants react et les faire travailler dans l'ordre est très puissant, mais je me suis pris quelques chausses trappes sur les propriétés à passer entre pages (enregistrer les passages, données, etc.) le plus ux possible. Problème, il y a beaucoup dinfos et des personnes assez différentes. Le rendre disponible en ligne c'est toujours un travail en cours
// Lessons learned, cf AU ddssus