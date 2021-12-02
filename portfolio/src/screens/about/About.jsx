import Header from "../../components/header/Header"

import styles from "./About.module.css"

export default function About() {
    return (
        <div>
            <Header />
            <h2 className={styles.about}>About</h2>
        </div>
    )
}