"use client";

import Image from "next/image";
import styles from "./comp-styles/home-banner.module.css";
import Spacer from "./global-effectors/outer-spacing";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/thumbs";
import slides from "../app_data/banner-slides.json";

console.log("Data: ", slides);

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [face] = useState([
    "/mockfaces/manface1.jpg",
    "/mockfaces/manface2.webp",
    "/mockfaces/manface3.jpeg",
  ]);
  return (
    <header className={styles.banner_container}>
      <Swiper
        modules={[Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        autoplay={{
          delay: 10000, // 10 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        className={styles.banner_swiper}
        // className="mb-4 h-64 w-full"
      >
        {slides.map((slide_item) => {
          return (
            <SwiperSlide key={slide_item.id}>
              <div className={styles.banner}>
                <Image
                  src={slide_item.image}
                  alt="Banner picture"
                  fill
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <Spacer spacetype="both">
                    <div className={styles.client_trust_box_container}>
                      <div className={styles.client_trust_box}>
                        {face.map((face, index) => (
                          <CircleImage
                            key={index}
                            src={face}
                            alt="man"
                            classname={`${styles.client_circle}${index + 1}`}
                          />
                        ))}
                        <div
                          className={`${styles.client_circle4} ${styles.client_circle}`}
                        >
                          1.2k
                        </div>
                      </div>
                      <p>Clients trust us</p>
                    </div>
                    <h1 className={styles.title}>{slide_item.title}</h1>
                    <p className={styles.banner_story}>
                      {slide_item.description}
                    </p>
                    <div className={styles.cta_box}>
                      <button className={styles.cta_book_appointment}>
                        Book an appointment
                      </button>
                      <button className={styles.cta_contact_us}>
                        Contact Us
                      </button>
                    </div>
                  </Spacer>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Thumbs swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Thumbs]}
        className={styles.thumbs_container}
      >
        {slides.map((thumb, index) => (
          <SwiperSlide className={styles.thumbs_slide} key={index}>
            <img
              src={thumb.image}
              alt={`Thumb ${index}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

function CircleImage({
  src,
  alt,
  classname,
}: {
  src: string;
  alt: string;
  classname?: string;
}) {
  return (
    <div className={`${styles.client_circle} ${classname}`}>
      <Image src={src} alt={alt} fill className={styles.mockfaceimg} />
    </div>
  );
}
