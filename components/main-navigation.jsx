import styles from "./comp-styles/main-navigation.module.css";
import Link from "next/link";
import { IoMdPlayCircle } from "react-icons/io";
import Image from "next/image";

export default function MainNavigation() {
  return (
    <nav className={styles.main_nav_container}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link href="#home" className={styles.nav_link}>
            Home
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="#about" className={styles.nav_link}>
            About
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="#services" className={styles.nav_link}>
            Services
          </Link>
        </li>
      </ul>
      <div className={styles.logo}>
        <Image
          src="/shadow-watch-logo.png"
          alt="Logo"
          fill
          className={styles.logo_image}
        />
      </div>
      <div className={styles.nav_cta_container}>
        <button className={`${styles.nav_cta_contact} ${styles.nav_cta}`}>
          <p>Contact Us</p>
          <IoMdPlayCircle size={20} />
        </button>
        <button className={`${styles.nav_cta_appointment} ${styles.nav_cta}`}>
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
