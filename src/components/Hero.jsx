import Container from "./shared/Container";
import Button from "./shared/Button";

import { motion } from "motion/react";

function Hero() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        id="hero"
        className="flex flex-col pt-16 pb-32 text-center gap-8"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-space font-bold">
            Expert Assembly, Right Where You Need It
          </h1>
          <h2 className=" text-xl">
            <p>Bought something, but don't know how to put it together?</p>
            <p>
              Call us! Our professionals will come to your place, and assemble
              everything.
            </p>
          </h2>
          <Button variant="accent" className="font-bold font-space text-lg">
            Contact Us
          </Button>
        </div>
        <div className="rounded-lg overflow-clip aspect-[14/9] ">
          <img
            src="furniture.jpg"
            alt="cozy-furniture"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </Container>
  );
}

export default Hero;
