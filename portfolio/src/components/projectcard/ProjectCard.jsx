import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img
              className={styles.flipCardImage}
              src={props.img}
              alt={props.title}
            />
          </div>
          <div className={styles.flipCardBack}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
