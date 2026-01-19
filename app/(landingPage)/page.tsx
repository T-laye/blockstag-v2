import About from "../../components/landing/about-section/About";
import Built from "../../components/landing/Built";
import Hero from "../../components/landing/Hero";
import Reward from "../../components/landing/Reward";
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
      </main>
    </div>
  );
}
