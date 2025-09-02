"use client";

import styles from "./comp-styles/about.module.css";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineTimer } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { ImHappy2 } from "react-icons/im";
import "./comp-styles/about.css";

gsap.registerPlugin(ScrollTrigger);

/**
 * Renders the About section showcasing the company's key qualities.
 *
 * @returns {JSX.Element} The About section component.
 *
 * @remarks
 * - Uses GSAP for scroll-triggered animations on quality circles.
 * - Displays three qualities: Timely Delivery, Business Acumen, and Customer Satisfaction.
 * - Utilizes React hooks (`useState`, `useRef`, `useEffect`) for state and animation logic.
 */
export default function About() {
  const [circleData, setCircleData] = useState([
    {
      id: 1,
      icon: <MdOutlineTimer size={30} color="#fd1d1d" />,
      title: "Timely Delivery",
      description:
        "We respond in time, we deliver results in time and we work with time",
    },
    {
      id: 2,
      icon: <BiSolidBusiness size={30} color="#fd1d1d" />,
      title: "Business Acumen",
      description:
        "We understand the business landscape and provide solutions that drive success.",
    },
    {
      id: 3,
      icon: <ImHappy2 size={30} color="#fd1d1d" />,
      title: "Customer Satisfaction",
      description:
        "We prioritize our clients' needs and strive to exceed their expectations.",
    },
  ]);
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // loop through each circle and apply GSAP animation
    circlesRef.current.forEach((circle) => {
      if (!circle) return;

      gsap.fromTo(
        circle,
        { scale: 0 }, // start small
        {
          scale: 1, // grow to normal size
          duration: 1.2,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: circle,
            start: "top 80%", // when the top of the circle hits 80% of the viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.about_container}>
      <div className={styles.about_inner_circle_container}>
        <h3 className={styles.about_main_title}>OUR QUALITIES</h3>
        <p className={styles.about_main_subtitle}>
          These are the qualities that make us your most trusted partner in your
          journey of Security and private investigations
        </p>
        <button className={styles.about_main_button}>
          <p>About Us</p> <MdOutlineArrowOutward />
        </button>
        {circleData.map((circle, index) => (
          <div
            key={circle.id}
            className={`about_inner_details_${
              index + 1
            } about_inner_details_circle`}
            ref={(el: HTMLDivElement | null) => {
              if (el) circlesRef.current[index] = el;
            }}
          >
            {circle.icon}
            <h4>{circle.title}</h4>
            <p>{circle.description}</p>
            <div className="dotted_border"></div>
          </div>
        ))}
      </div>
      <div className={styles.mobile_about_container}>
        <h3 className={styles.mobile_about_main_title}>OUR QUALITIES</h3>
        <p className={styles.mobile_about_main_subtitle}>
          These are the qualities that make us your most trusted partner in your
          journey of Security and private investigations
        </p>
        <button className={styles.mobile_about_main_button}>
          <p>About Us</p> <MdOutlineArrowOutward />
        </button>
        {circleData.map((circle, index) => (
          <div
            key={circle.id}
            className={`mobile_about_inner_details_${
              index + 1
            } mobile_about_inner_details_circle`}
            ref={(el: HTMLDivElement | null) => {
              if (el) circlesRef.current[index] = el;
            }}
          >
            {circle.icon}
            <h4>{circle.title}</h4>
            <p>{circle.description}</p>
            <div className="mobile_dotted_border"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
