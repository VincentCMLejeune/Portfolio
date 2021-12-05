import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div
            className={styles.flipCardFront}
            style={{
              background: `url(${props.img}) no-repeat center center fixed`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className={styles.flipCardBack}>
            <h2 className={styles.cardTitle}>{props.title}</h2>
            <p className={styles.subtitle}>{props.description}</p>
            <p className={styles.prompt}>Cliquez pour en savoir plus</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
