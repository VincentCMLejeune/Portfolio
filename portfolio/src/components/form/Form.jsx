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
      </form>
    </div>
  );
}
