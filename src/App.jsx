import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Gallery from "./components/Gallery";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  setTimeout(() => setCount(count + 1), 1000);

  return (
    <>
      <Header />
      <Hero />
      <Offers />
      {/* <Gallery /> */}
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
