import Header from "../../components/header/Header";
import Introduction from "../../components/introduction/Introduction";

import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.introductionContainer}>
        <div className={styles.introduction}>
          <h2>A propos</h2>
        </div>
      </div>
      <Introduction />
      <h2>Mes outils</h2>
    </div>
  );
}
