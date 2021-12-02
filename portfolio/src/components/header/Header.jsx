import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={styles.name}>VINCENT LEJEUNE</div>
      </Link>
      <div className={styles.links}>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className={styles.link}>A propos</div>
        </Link>
        <Link to="/projets" style={{ textDecoration: "none" }}>
          <div className={styles.link}>Projets</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className={styles.link}>Contact</div>
        </Link>
      </div>
    </div>
  );
}
