import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introduction}>
      {/* NE MARCHE PAS
      <h3>TL;DR</h3>
      <p>
        Vous pouvez{" "}
        <a href="../../assets/CVVincentLEJEUNE.pdf">
          télécharger mon CV
        </a>
      </p> */}

      <h3>Xoucou</h3>
      <p>
        Quatre tentatives à l'Ena, et un premier travail comme consultant dans
        la communication. Puis est arrivé 2019, le confinement. L'occasion de me
        remettre en cause. Je n'avais pas envie d'être éternellement celui qui
        vendait les projets aux clients, je voulais produire. Une rupture
        conventionnelle plus tard, je fis ma découverte du code.
      </p>
      <p>
        Résoudre des problèmes m'amuse. Et coder permet de résoudre beaucoup de
        problèmes. Je dois mon premier vrai programme à ma mère. Nous étions en
        vacances à la Rochelle, et nous étions à la plage. Je suis plutôt
        quelqu'un d'hyperactif, impossible de rester allongé et bronzer. Ma mère
        m'a tendu des grilles de sudoku, et après avoir joué avec, je réalisais
        que c'était inutile de m'embêter à le faire, qu'un programme le ferait
        plus rapidement que moi.
      </p>

      <p>
        Ah au fait, si vous êtes curieux,{" "}
        <a
          href="https://github.com/VincentCMLejeune/Sudoku-Solver"
          target="_blank"
          rel="noreferrer"
        >
          voici mon programme de sudoku
        </a>
        .
      </p>
      <p>
        J'ai commencé à me former en ligne, avec la multitude de tutoriels qui
        existent (FreeCodeCamp, Codecademy, Youtube, OpenClassRooms et des
        endroits plus surprenants trouvés par Google). En formation de
        développeur web, j'ai été plus exigeant avec moi-même, plus curieux sur
        ce qui se fait, et plus positif face aux messages d'erreur (qui ne nous
        veulent que du bien, au fond).
      </p>
      <p>
        Niveau personnalité, je suis un curieux,{" "}
        <a
          href="https://www.16personalities.com/intp-personality"
          target="_blank"
          rel="noreferrer"
        >
          INTP
        </a>
      </p>
    </div>
  );
}
