import Banner from "@/components/home-banner";
import styles from "./home.module.css";
import MainNavigation from "@/components/main-navigation";
import About from "@/components/about";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonial from "@/components/testimonial";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <MainNavigation />
      <Banner />
      <About />
      <WhyChooseUs />
      <Services />
      <Testimonial />
      <ContactUs />
      <Newsletter />
      <Footer />
    </div>
  );
}
