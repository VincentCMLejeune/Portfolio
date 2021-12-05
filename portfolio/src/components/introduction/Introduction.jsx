import styles from "./Introduction.module.css";

import CV from "../../assets/CVVincentLEJEUNE.pdf";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      <h3>A propos de moi</h3>
      <p>
        Au début, je rêvais de devenir ambassadeur ou préfet. Après un parcours
        très académique (Sciences Po, Ecole Normale Supérieure) et 4 tentatives
        à l'Ena, j'ai trouvé un premier travail comme consultant dans la
        communication. Puis est arrivé 2019 et le confinement. L'occasion de me
        remettre en question et de réaliser que je voulais "produire
        concrètement" ; le métier de consultant m'a appris énormément de choses
        dans la relation client, mais elle ne me correspondait pas. Une rupture
        conventionnelle plus tard, je découvrais le code.
      </p>
      <p>
        J'ai commencé à me former en ligne, avec tout ce que peut offrir
        Internet pour apprendre le code (
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noreferrer"
        >
          FreeCodeCamp
        </a>
        ,{" "}
        <a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">
          Codecademy
        </a>{" "}
        et{" "}
        <a
          href="https://openclassrooms.com/fr/"
          target="_blank"
          rel="noreferrer"
        >
          OpenClassRooms
        </a>{" "}
        pour citer les principaux, en commençant sur du C et Python avant de me
        focaliser sur le développement web (HTML/CSS/Javascript)).
      </p>
      <p>
        Ce qui m'amuse, c'est résoudre des problèmes. Et le code permet de
        résoudre énormément de problèmes. Je dois mon premier vrai programme à
        ma mère. Nous étions en vacances à la Rochelle, à la plage. Je suis
        plutôt dynamique, pas moyen de passer la journée allongé à bronzer. Ma
        mère a cherché à m'occuper en me prêtant son cahier de sudoku, mais cela
        m'a vite ennuyé, me disant qu'un programme le ferait plus rapidement que
        moi.
      </p>
      <p>
        Cherchant à faire de cette passion mon métier, je suis en formation de
        développeur web depuis septembre 2021 à la{" "}
        <a
          href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web"
          target="_blank"
          rel="noreferrer"
        >
          Wild code school
        </a>{" "}
        de Paris. Cette formation m'apprend à être plus exigeant avec moi-même,
        plus curieux sur les nouveautés, et plus positif face aux messages
        d'erreur (qui ne nous veulent que du bien, au fond). J'ai pris
        particulièrement goût au back-end et à l'algorithme{" "}
        <a
          href="https://www.codewars.com/users/VincentCMLejeune"
          target="_blank"
          rel="noreferrer"
        >
          (top 1% sur Codewars)
        </a>
        .
      </p>
      <p className={styles.tldr}>
        Pour plus de détails sur mon parcours, vous pouvez{" "}
        <a href={CV} download>
          télécharger mon CV
        </a>{" "}
        ou retrouver{" "}
        <a
          href="https://www.linkedin.com/in/vincent-lejeune-285834221/"
          target="_blank"
          rel="noreferrer"
        >
          ma page LinkedIn
        </a>
        .
      </p>
      <p>
        Et si vous êtes curieux,{" "}
        <a
          href="https://github.com/VincentCMLejeune/Sudoku-Solver"
          target="_blank"
          rel="noreferrer"
        >
          voici mon programme de sudoku
        </a>
        .
      </p>
    </div>
  );
}
