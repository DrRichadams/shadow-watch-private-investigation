import Banner from "@/components/home-banner";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Banner />
    </div>
  );
}
