// components
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "./Portfolio";
import Clients from "./Clients";
import Blog from "./Blog";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

export default function Main() {
  const mainClass = "main";

  return (
    <>
      <main className={mainClass}>
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
