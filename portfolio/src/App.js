import About from "./screens/about/About";
import Contact from "./screens/contact/Contact";
import Projets from "./screens/projets/Projets";

import styles from "./App.module.css";

export default function App() {
  return (
    <div>
      <h1 className={styles.title}>Bienvenue</h1>
      <About />
      <Contact />
      <Projets />
    </div>
  );
}
