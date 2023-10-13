import { useState } from "react";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  const [preventScroll, setPreventScroll] = useState<boolean>(false);
  return (
    <>
      <Header />
      <div
        className={`${
          preventScroll ? "overflow-hidden" : "overflow-y-scroll"
        } h-screen snap-y snap-mandatory`}
        id="main-container"
      >
        <Hero setPreventScroll={setPreventScroll} />
        <Skills />
        <Projects setPreventScroll={setPreventScroll} />
        <Testimonials setPreventScroll={setPreventScroll} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
