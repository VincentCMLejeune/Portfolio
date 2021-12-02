import Header from "../../components/header/Header";

import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <Header />
      <h2>About</h2>
      <div className={styles.ultrabigdiv}>Hello</div>
    </div>
  );
}
