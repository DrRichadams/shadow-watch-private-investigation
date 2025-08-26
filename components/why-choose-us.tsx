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
        We are committed to delivering the best security services to our
        clients. Our team of trained professionals provides 24/7 monitoring,
        rapid response, and customized protection plans to ensure your safety
        and peace of mind. With advanced technology and a client-focused
        approach, we safeguard your assets and premises with reliability and
        integrity.
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
