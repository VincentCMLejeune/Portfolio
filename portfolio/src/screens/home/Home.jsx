import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.link}>Je suis Vincent</div>
      <div className={styles.link}>développeur en formation</div>
      <div className={styles.link}>Enchanté !</div>
    </div>
  );
}
