"use client";

import styles from "./comp-styles/testimonial.module.css";
import testimonials from "../app_data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  return (
    <section className={styles.testimonial_container}>
      <h2 className={styles.testimonial_heading}>Testimonials</h2>
      <p className={styles.testimonial_text}>
        What our clients say about us. We value your privacy and security—only
        verified feedback is displayed, and all testimonials are reviewed to
        ensure compliance with our safety standards.
      </p>

      <div className="testimonials_box">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          className={styles.swiper_container}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.testimonial_card}>
              <div>
                <p className={styles.testimonial_message}>
                  "{testimonial.testimonial}"
                </p>
                <p className={styles.testimonial_author}>
                  - {testimonial.author}, {testimonial.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
