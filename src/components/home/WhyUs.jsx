import Container from "../shared/Container";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    title: "Transparent Pricing",
    content: "What we quote is what you pay. No hidden fees.",
    color: "flex flex-col h-full justify-end pl-8 pb-4 w-[50%] drop-shadow-sm",
    imgSrc: "pricing.png",
  },
  {
    title: "We Haul the Old Stuff",
    content:
      "We don’t just install — we take care of the mess. Old furniture and packaging? Gone.",
    color: "flex flex-col h-full justify-end pb-4 pl-4 w-[77%] drop-shadow-sm",
    imgSrc: "hauling.png",
  },
  {
    title: "Local & Trusted",
    content: "We operate locally and our reviews speak volumes.",
    color:
      "flex flex-col h-full justify-end pb-10 pl-4 w-[77%] drop-shadow-sm ",
    imgSrc: "trust.png",
  },
  {
    title: "Expert Technicians",
    content:
      "We work with all major brands and equipment types. Trained. Insured. Reliable.",
    color: "flex flex-col h-full justify-end pb-4 pl-4 w-[77%] drop-shadow-sm",
    imgSrc: "technician.png",
  },
  {
    title: "Flexible Scheduling",
    content:
      "Book appointments at your convenience — evenings and weekends available.",
    color:
      "flex flex-col h-full justify-start pt-12 pl-4 w-[77%] drop-shadow-sm",
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
      className={`rounded-lg mb-8 aspect-square sticky bg-cover bg-center overflow-clip`}
      style={{
        scale,
        top: `calc(17vh + ${i * 15}px)`,
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className={`${color} z-10`}>
        <h1 className="font-bold text-3xl mb-2">{title} </h1>
        <p className="font-semibold text-xl">{content} </p>
      </div>
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
        <div className="pb-1 text-white">
          {cards.map((card, index) => {
            const targetScale = 1 - (cards.length - index) * 0.05;
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
