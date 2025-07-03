import Container from "../components/shared/Container";
import ContactForm from "../components/shared/ContactForm";

import { motion } from "motion/react";

const cards = [
  {
    title: "Moving Help",
    content:
      "Need a hand moving across town or just up the street? We bring the muscle, the van, and the peace of mind.",
  },
  {
    title: "Junk Removal",
    content:
      "From old mattresses to renovation debris, we haul it all — fast, clean, and responsibly. No hidden fees. No heavy lifting for you.",
  },
  {
    title: "Appliance & Furniture Pickup",
    content:
      "Bought something bulky? We'll pick it up, bring it in, and place it exactly where you want it — without damage, delays, or excuses.",
  },
  {
    title: "Same-Day & Emergency Service",
    content:
      "Got a tight schedule? We offer same-day service in most of the Lower Mainland. Call us now, we’ll get it done.",
  },
  {
    title: "Eco-Friendly Disposal",
    content:
      "We don't just dump your junk — we recycle, donate, and dispose responsibly whenever possible. Good for you, better for the planet.",
  },
  {
    title: "Flexible Scheduling",
    content:
      "Weekends? Evenings? Last minute? We’ll make it work. Just let us know what time suits you best.",
  },
];

const Card = ({ title, content }) => {
  return (
    <div
      className="border-2 border-gray-600 rounded-lg px-4 py-6 
     shadow-md h-full space-y-2"
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <Container className="pb-12">
        <motion.div
          initial={{ opacity: 0.3, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-space font-bold text-2xl text-center my-4"
        >
          Our Services
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full flex justify-center"
        >
          <img
            src="services-page.png"
            alt="a moving truck in front of a house"
            className="rounded-lg mb-8 drop-shadow-md border-gray-500 w-full lg:w-[60%]"
          />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </Container>
      <ContactForm />
    </>
  );
};

export default Services;
