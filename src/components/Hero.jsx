import Container from "./shared/Container";
import Button from "./shared/Button";

import { motion } from "motion/react";

function Hero() {
  return (
    <Container className="relative">
      <div className="absolute inset-0" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full filter blur-2xl opacity-20 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        id="hero"
        className="flex flex-col pt-16 pb-24 text-center gap-8"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-space font-bold ">
            <span className="bg-gradient-to-l from-accent to-gray-500 bg-clip-text text-transparent">
              Expert Assembly
            </span>
            , Right Where You Need It
          </h1>
          <h2 className=" text-xl ">
            <p>Bought something, but don't know how to put it together?</p>
            <p>
              Call us! Our professionals will come to your place, and assemble
              everything.
            </p>
          </h2>
          <Button variant="accent" className="font-bold font-space text-xl">
            Contact Us
          </Button>
        </div>

        <div className="rounded-lg overflow-clip aspect-[14/9] shadow-lg ">
          <img
            src="furniture.png"
            alt="cozy-furniture"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </Container>
  );
}

export default Hero;
