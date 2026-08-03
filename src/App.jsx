import Navbar from "./Components/Sections/Navbar";
import Home from "./Components/Sections/Home";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;