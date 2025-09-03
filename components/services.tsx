import styles from "./comp-styles/services.module.css";
import services from "../app_data/banner-slides.json";

export default function Services() {
  return (
    <section className={styles.services_container}>
      <h2 className={styles.services_title}>Our Services</h2>
      <p className={styles.services_description}>
        <sup>____</sup> We offer a wide range of <span>security services</span>{" "}
        to help you get <span>peace of mind</span> on all your business and
        personal dealings
      </p>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div className={styles.service_container} key={service.id}>
            <div className={styles.service_image_box}>
              <img src={service.image} alt={service.title} />
            </div>
            <div className={styles.service_details}>
              <h4 className={styles.service_title}>{service.title}</h4>
              <p className={styles.service_description}>
                {service.description}
              </p>
              <button className={styles.service_cta}>
                Book an appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
