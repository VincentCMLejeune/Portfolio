import Header from "../../components/header/Header"

import styles from "./Contact.module.css"

export default function Contact() {
    return (
        <div>
            <Header />
            <h2 className={styles.contact}>Contact</h2>
        </div>
    )
}