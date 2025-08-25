import Banner from "@/components/home-banner";
import styles from "./home.module.css";
import MainNavigation from "@/components/main-navigation";
import About from "@/components/about";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <MainNavigation />
      <Banner />
      <About />
    </div>
  );
}
