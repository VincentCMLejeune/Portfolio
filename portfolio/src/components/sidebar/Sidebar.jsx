import { Link } from "react-router-dom";

import bgLogo from "../../assets/bagarre screens/logo.png";
import garouLogo from "../../assets/garou screens/logo.png";
import runLogo from "../../assets/runtime screens/logo.png";
import wildLogo from "../../assets/advisor screens/logo.png";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sideBar}>
      <Link to="/projets/bagarre" style={{ textDecoration: "none" }}>
        <div className={styles.link}>
          <h2>Bagarre Club</h2>
          <img src={bgLogo} alt="Bagarre Club" />
        </div>
      </Link>
      <Link to="/projets/runtime" style={{ textDecoration: "none" }}>
        <div className={styles.link}>
          <h2>Runtime Terror</h2>
          <img src={runLogo} alt="Runtime terror" />
        </div>
      </Link>
      <Link to="/projets/garou" style={{ textDecoration: "none" }}>
        <div className={styles.link}>
          <h2>Loup Garou</h2>
          <img src={garouLogo} alt="Garou" />
        </div>
      </Link>
      <Link to="/projets/advisor" style={{ textDecoration: "none" }}>
        <div className={styles.link}>
          <h2>Wild Advisor</h2>
          <img src={wildLogo} alt="Wild advisor" />
        </div>
      </Link>
    </div>
  );
}
