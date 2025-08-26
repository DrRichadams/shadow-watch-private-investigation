"use client";

import styles from "./comp-styles/why-us.module.css";
import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";

export default function WhyChooseUs() {
  const [whys] = useState([
    {
      id: 1,
      title: "Licensed & Confidential",
    },
    {
      id: 2,
      title: "Experienced Investigators",
    },
    {
      id: 3,
      title: "Fast & Reliable Results",
    },
    {
      id: 4,
      title: "24/7 Client Support",
    },
  ]);

  return (
    <section className={styles.why_us_container}>
      <h3 className={styles.why_us_title}>Why Choose Us?</h3>
      <p className={styles.why_us_description}>
        We offer a comprehensive range of security and investigative services,
        including Infidelity Investigations with a discreet process and
        confidentiality assurance, DNA Testing Verifications through certified
        labs with high accuracy rates, and Polygraph (Lie Detector) Services
        conducted by qualified examiners. Our Company Background Checks provide
        corporate due diligence and business intelligence reports for risk
        mitigation, while our Fraud Investigations cover financial fraud,
        identity theft, and recovery assistance. All findings are presented
        professionally, ensuring your privacy and peace of mind.
      </p>
      <div className={styles.why_us_details_box}>
        {whys.map((why) => (
          <div className={styles.why_us_box} key={why.id}>
            <div className={styles.why_us_inner_box}>
              <FaSquareCheck />
              <p>{why.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
