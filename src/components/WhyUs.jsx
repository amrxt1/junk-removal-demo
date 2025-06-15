import Container from "./shared/Container";
import { motion } from "motion/react";

const cards = [
  {
    title: "Transparent Pricing",
    content: "What we quote is what you pay. No upsells. No hidden fees.",
    color: "bg-blue-50 text-blue-900",
  },
  {
    title: "We Haul the Old Stuff",
    content:
      "We don’t just install — we take care of the mess. Old furniture and packaging? Gone.",
    color: "bg-yellow-50 text-yellow-900",
  },
  {
    title: "Local & Trusted",
    content:
      "We’re not some faceless platform. We live here, we work here, and our reviews speak for themselves.",
    color: "bg-green-50 text-green-900",
  },
  {
    title: "Expert Technicians",
    content:
      "We work with all major brands and equipment types. Trained. Insured. Reliable.",
    color: "bg-gray-100 text-gray-800",
  },
];

function Card({ title, content, color }) {
  return (
    <div
      className={
        color +
        " p-8 py-16 rounded-lg mb-8 border-2 aspect-[4/3] sticky top-[17vh] "
      }
    >
      <h1 className="font-bold text-xl mb-4">{title} </h1>
      <p>{content} </p>
    </div>
  );
}

function WhyUs() {
  return (
    <Container className="py-12 relative">
      <h1 className="text-center font-space font-bold text-2xl mb-8 sticky top-[10vh] ">
        Why Us
      </h1>
      <div className="pb-2">
        {cards.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>
    </Container>
  );
}

export default WhyUs;
