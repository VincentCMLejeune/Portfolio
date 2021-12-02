import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.form}>
      <p className={styles.ensemble}><span id={styles.spin}></span> ensemble</p>
      <form
        action="https://formsubmit.co/9ca83417d36bcbc1302960454647c72c"
        method="POST"
      >
        <label>
          Nom (facultatif)
          <input type="text" name="name" placeholder="Sarah" />
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
        <label>
          Message
          <input
            type="text"
            name="message"
            placeholder="Votre message"
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
