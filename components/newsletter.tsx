import styles from "./comp-styles/newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.newsletter_container}>
      <h2 className={styles.newsletter_title}>Join our Newsletter</h2>
      <p className={styles.newsletter_description}>
        We give you updates on all the latest security news and stories that
        help you stay up to date with whats trending in the security spaces
      </p>
      <form className={styles.newsletter_form_container}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
