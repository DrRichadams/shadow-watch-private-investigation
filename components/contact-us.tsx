import styles from "./comp-styles/contact-us.module.css";

export default function ContactUs() {
  return (
    <section className={styles.contact_us_container}>
      <div className={styles.contact_us_titles_box}>
        <h3 className={styles.contact_us_title}>Contact Us</h3>
        <p className={styles.contact_us_description}>
          If you have any questions or need assistance, feel free to reach out
          to us.
        </p>
      </div>
      <form className={styles.contact_us_form}>
        <div className={styles.user_details}>
          <input
            type="text"
            placeholder="Enter your First name"
            className={styles.user_details_sec_input}
          />
          <input
            type="text"
            placeholder="Enter your Second name"
            className={styles.user_details_sec_input}
          />
        </div>
        <input
          type="text"
          placeholder="Enter your Email"
          className={styles.user_details_sec_input}
        />
        <input
          type="text"
          placeholder="Enter your Subject"
          className={styles.user_details_sec_input}
        />
        <textarea
          name=""
          id=""
          className={styles.user_details_sec_input_area}
          placeholder="Your Message"
        ></textarea>
        <button className={styles.contact_us_form_button}>Send Message</button>
      </form>
    </section>
  );
}
