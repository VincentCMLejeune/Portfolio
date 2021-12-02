import Form from "../../components/form/Form";
import Header from "../../components/header/Header";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.introContainer}>
        <h2 className={styles.ensemble}>
          <span id={styles.spin}></span> ensemble
        </h2>
      </div>
      <Header />
      <h2>Contact</h2>
      <Form />
    </div>
  );
}
