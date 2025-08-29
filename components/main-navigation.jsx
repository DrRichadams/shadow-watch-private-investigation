'use client';

import styles from "./comp-styles/main-navigation.module.css";
import Link from "next/link";
import { IoMdPlayCircle } from "react-icons/io";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";


export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className={styles.main_nav_container}>
      <div className={styles.mobile_nav_overlay} style={{ display: isMenuOpen ? 'block' : 'none' }}>
        <button className={styles.close_menu_button} onClick={() => toggleMenu()}>
          <MdClose size={25} className={styles.close_menu_icon} />
        </button>
        <div className={styles.mobile_nav_prop}>
          <p>Shadow Watch</p>
        </div>
        <ul className={styles.mobile_nav_list}>
          <li onClick={() => toggleMenu()}><Link href="#home">Home</Link></li>
          <li onClick={() => toggleMenu()}><Link href="#about">About</Link></li>
          <li onClick={() => toggleMenu()}><Link href="#services">Services</Link></li>
          <li onClick={() => toggleMenu()}><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
      <ul className={styles.nav_list}>
        <li className={`${styles.nav_item} ${styles.hide_at_mobile}`}>
          <Link href="#home" className={styles.nav_link}>
            Home
          </Link>
        </li>
        <li className={`${styles.nav_item} ${styles.hide_at_mobile}`}>
          <Link href="#about" className={styles.nav_link}>
            About
          </Link>
        </li>
        <li className={`${styles.nav_item} ${styles.hide_at_mobile}`}>
          <Link href="#services" className={styles.nav_link}>
            Services
          </Link>
        </li>
        <button className={`${styles.nav_cta_appointment} ${styles.nav_cta} ${styles.hidden_on_desktop}`}>
          Book Appointment
        </button>
        <button className={`${styles.hidden_on_desktop}`} onClick={() => toggleMenu()}>
          <RiMenu3Fill size={30} className={styles.hamburger_menu_icon} />
        </button>
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
        <button className={`${styles.nav_cta_contact} ${styles.nav_cta} ${styles.hide_at_mobile}`}>
          <p>Contact Us</p>
          <IoMdPlayCircle size={20} />
        </button>
        <button className={`${styles.nav_cta_appointment} ${styles.nav_cta} ${styles.hide_at_mobile}`}>
          Book Appointment
        </button>
      </div>
    </nav>
  );
}
