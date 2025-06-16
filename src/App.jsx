import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Gallery from "./components/Gallery";
import WhyUs from "./components/WhyUs";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Offers />
      {/* <Gallery /> */}
      <WhyUs />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
