import AboutUs from "../components/About"
import Hero from "../components/Hero"
import Services from "../components/Service";
const LandingPage = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="services">
        <Services />
      </section>
    </main>
  );
}

export default LandingPage
