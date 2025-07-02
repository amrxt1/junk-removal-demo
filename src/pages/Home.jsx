import Hero from "../components/home/Hero";
import ServicesWeProvide from "../components/home/ServicesWeProvide";
import FindUs from "../components/shared/FindUs";
import ContactForm from "../components/shared/ContactForm";
import WhyUs from "../components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesWeProvide />
      <WhyUs />
      <ContactForm />
      <FindUs />
    </>
  );
}
