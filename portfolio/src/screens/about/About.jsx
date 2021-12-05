import Header from "../../components/header/Header";
import Introduction from "../../components/introduction/Introduction";

import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.introductionContainer}>
        <div className={styles.introduction}>
          <h2>A propos</h2>
        </div>
      </div>
      <div className={styles.about}>
        <Introduction />
      </div>
    </>
  );
}
