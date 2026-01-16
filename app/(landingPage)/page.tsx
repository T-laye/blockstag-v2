import About from "../../components/landing/about-section/About";
import Hero from "../../components/landing/Hero";
import Header from "../../components/layout/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Hero />
        <About />
      </main>
    </div>
  );
}
