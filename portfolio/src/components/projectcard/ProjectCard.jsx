import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className={styles.projectCard}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.img} alt={props.title} className={styles.cardImg} />
      </div>
    </Link>
  );
}
