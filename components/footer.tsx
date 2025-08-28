import styles from "./comp-styles/footer.module.css";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content_top}>
        <div className={styles.footer_region_details}>
          <img src="/zim1.png" alt="flag" />
          <p>Zimbabwe</p>
          <div className={styles.region_dot}></div>
          <p>English</p>
        </div>
        <div className={styles.footer_socials}>
          <Link href="https://twitter.com/yourprofile" target="_blank">
            <BsTwitterX />
          </Link>
          <Link href="https://facebook.com/yourprofile" target="_blank">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com/yourprofile" target="_blank">
            <RiInstagramFill />
          </Link>
          <Link href="https://youtube.com/yourprofile" target="_blank">
            <IoLogoYoutube />
          </Link>
          <Link href="https://linkedin.com/yourprofile" target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <ul className={styles.footer_bottom}>
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <div></div>
        </li>
        <li>
          <Link href="/terms-of-service">Terms of Service</Link>
          <div></div>
        </li>
        <li>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <div></div>
        </li>
      </ul>
      <div className={styles.footer_bottom_logos}>
        <img src="/shadow-watch-logo2.png" alt="" />
        <div className={styles.protected_logo}>
          <p>You are protected</p>
          <IoShieldCheckmarkSharp size={35} />
        </div>
      </div>
      <p className={styles.footer_content_bottom_copy}>
        © 2025 <sup>___</sup> Shadow Watch. All rights reserved.
      </p>
    </footer>
  );
}
