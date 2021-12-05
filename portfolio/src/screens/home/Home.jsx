import { Link } from "react-router-dom";
import { useState } from "react";

// import profile from "../../assets/temp.png";

import styles from "./Home.module.css";

export default function Home() {
  const [aboutHover, setAboutHover] = useState(false);
  const [projetsHover, setProjetsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <div className={styles.homeBackground}>
      <div className={styles.linksContainer}>
        <Link to="/about" style={{ textDecoration: "none" }}>
          {aboutHover ? (
            <div
              className={styles.linkHover}
              onMouseLeave={() => setAboutHover(false)}
            >
              me connaître
            </div>
          ) : (
            <div
              className={styles.link}
              onMouseOver={() => setAboutHover(true)}
            >
              Je suis Vincent
            </div>
          )}
        </Link>
        <Link to="/projets" style={{ textDecoration: "none" }}>
          {projetsHover ? (
            <div
              className={styles.linkHover}
              onMouseLeave={() => setProjetsHover(false)}
            >
              voir mes projets
            </div>
          ) : (
            <div
              className={styles.link}
              onMouseOver={() => setProjetsHover(true)}
            >
              développeur web
            </div>
          )}
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          {contactHover ? (
            <div
              className={styles.linkHover}
              onMouseLeave={() => setContactHover(false)}
            >
              me contacter
            </div>
          ) : (
            <div
              className={styles.link}
              onMouseOver={() => setContactHover(true)}
            >
              enchanté
            </div>
          )}
        </Link>
      </div>
      {/* <img className={styles.profile} src={profile} alt="Profile" /> */}
    </div>
  );
}
