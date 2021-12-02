import Header from "../../components/header/Header";

import styles from "./Details.module.css";

export default function DetailBagarre() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>La carte du Bagarre Club</h2>
      </div>
    </div>
  );
}
