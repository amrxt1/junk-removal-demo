import Container from "../shared/Container";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    title: "Junk Removal",
    content:
      "From broken furniture to renovation debris. We haul it fast, clean, and responsibly.",
    color: "flex flex-col h-full justify-end pl-8 pb-4 w-[50%] drop-shadow-sm",
    imgSrc: "hauling.png",
  },
  {
    title: "Local Moving Help",
    content:
      "Moving apartments or offices? We bring the muscle, van, and reliability you need.",
    color: "flex flex-col h-full justify-end pb-4 pl-4 w-[77%] drop-shadow-sm",
    imgSrc: "technician.png",
  },
  {
    title: "Appliance & Furniture Pickup",
    content:
      "Bought something heavy or awkward to move? We’ll get it delivered and placed.",
    color:
      "flex flex-col h-full justify-end pb-10 pl-4 w-[77%] drop-shadow-sm ",
    imgSrc: "trust.png",
  },
  {
    title: "Eco-Friendly Disposal",
    content:
      "We don’t just dump it. We sort, recycle, and dispose responsibly whenever possible.",
    color: "flex flex-col h-full justify-end pb-4 pl-4 w-[77%] drop-shadow-sm",
    imgSrc: "pricing.png",
  },
  {
    title: "Same-Day Availability",
    content:
      "Need it gone today? We offer urgent junk removal and moving help across the Lower Mainland.",
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
      className={`rounded-lg mb-24 aspect-square sticky bg-cover bg-center overflow-clip md:h-[70vh] w-full `}
      style={{
        scale,
        top: `calc(10vh + ${i * 25}px)`,
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

function ServicesWeProvide() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Container className="pt-12">
      <div ref={container} className="relative">
        <h1 className="text-center font-space font-bold text-2xl pb-8  ">
          Services We Provide
        </h1>
        <div className="pb-1 text-white">
          {cards.map((card, index) => {
            const targetScale = 1 - (cards.length - index) * 0.04;
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

export default ServicesWeProvide;
