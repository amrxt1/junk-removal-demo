import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import WhyUs from "../components/home/WhyUs";
import FindUs from "../components/shared/FindUs";
import ContactForm from "../components/shared/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Offers />
      <ContactForm />
      <FindUs />
    </>
  );
}
