import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.form}>
      <form
        action="https://formsubmit.co/9ca83417d36bcbc1302960454647c72c"
        method="POST"
      >
        <div className={styles.coordonnees}>
          <label>
            Nom (facultatif)
            <input type="name" name="name" placeholder="Sarah" />
          </label>
          <label>
            Mail
            <input
              type="email"
              name="email"
              placeholder="sarah.connor@skynet.com"
              required
            />
          </label>
        </div>
        <div className={styles.message}>
          <label>
            Message
            <input
              type="text"
              name="message"
              placeholder="Votre message"
              required
            />
          </label>
        </div>
        <button type="submit">Envoyer</button>
        <p className={styles.outro}>
          Vous pouvez aussi me contacter{" "}
          <a href="mailto:vincentcmlejeune@gmail.com">par mail</a> ou via{" "}
          <a
            href="https://www.linkedin.com/in/vincent-lejeune-285834221/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn.
          </a>
        </p>
      </form>
    </div>
  );
}
