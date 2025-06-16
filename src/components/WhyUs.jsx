import Container from "./shared/Container";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    title: "Transparent Pricing",
    content: "What we quote is what you pay. No upsells. No hidden fees.",
    color: "bg-blue-200 text-blue-900",
    imgSrc: "pricing.png",
  },
  {
    title: "We Haul the Old Stuff",
    content:
      "We don’t just install — we take care of the mess. Old furniture and packaging? Gone.",
    color: "bg-gray-200 text-gray-800",
    imgSrc: "hauling.png",
  },
  {
    title: "Local & Trusted",
    content:
      "We’re not some faceless platform. We live here, we work here, and our reviews speak for themselves.",
    color: "bg-green-200 text-green-900",
    imgSrc: "trust.png",
  },
  {
    title: "Expert Technicians",
    content:
      "We work with all major brands and equipment types. Trained. Insured. Reliable.",
    color: "bg-gray-200 text-gray-800",
    imgSrc: "technician.png",
  },
  {
    title: "Flexible Scheduling",
    content:
      "Book appointments at your convenience — evenings and weekends available.",
    color: "bg-blue-200 text-blue-900",
    imgSrc: "flexibility.png",
  },
];

function Card({
  title,
  content,
  color,
  imgSrc,
  i,
  targetScale,
  range,
  progress,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <motion.div
      className={
        "text-white p-8 py-16 rounded-lg mb-8 border-2 aspect-square sticky bg-cover bg-center"
      }
      style={{
        scale,
        top: `calc(17vh + ${i * 20}px)`,
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <h1 className="font-bold text-xl mb-4">{title} </h1>
      <p>{content} </p>
    </motion.div>
  );
}

function WhyUs() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Container className="pt-12 pb-8">
      <div ref={container} className="relative">
        <h1 className="text-center font-space font-bold text-2xl pb-8 sticky top-[10vh] ">
          Why Us
        </h1>
        <div className="pb-1">
          {cards.map((card, index) => {
            const targetScale = 1 - (cards.length - index) * 0.025;
            return (
              <Card
                key={index}
                {...card}
                i={index}
                targetScale={targetScale}
                progress={scrollYProgress}
                range={[0.25 * index, 1]}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default WhyUs;
