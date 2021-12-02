import Header from "../../components/header/Header";

import styles from "./Details.module.css";

export default function DetailRuntime() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>La carte du RunTime Terror</h2>
      </div>
    </div>
  );
}
