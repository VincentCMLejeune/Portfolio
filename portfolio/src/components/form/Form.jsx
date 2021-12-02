import styles from "./Form.module.css";

export default function Form() {
  return (
    <div className={styles.form}>
      Je suis le form et je suis en forme. A mort.
      <form action="https://formsubmit.co/9ca83417d36bcbc1302960454647c72c" method="POST">
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
