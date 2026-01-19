import About from "../../components/landing/about-section/About";
import Built from "../../components/landing/Built";
import Hero from "../../components/landing/Hero";
import PicCarousel from "../../components/landing/PicCarousel";
import Reward from "../../components/landing/Reward";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Reward />
        <Built />
        <PicCarousel />
        <Footer />
      </main>
    </div>
  );
}
