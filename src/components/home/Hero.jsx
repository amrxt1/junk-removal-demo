import Container from "../shared/Container";
import Button from "../shared/Button";
import { motion } from "motion/react";

function Hero() {
  return (
    <Container className="relative">
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent rounded-full filter blur-2xl opacity-20 -z-10" />
      <motion.div
        initial={{ opacity: 0.3, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        id="hero"
        className="flex flex-col pt-16 pb-16 text-center gap-8 z-10 md:flex-row"
      >
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-3xl font-space font-bold md:text-left ">
            <span className="bg-gradient-to-l from-accent to-gray-500 bg-clip-text text-transparent">
              Fast & Reliable
            </span>
            , Junk Removal & Moving Services
          </h1>
          <h2 className=" text-xl md:text-left ">
            <p className="text-gray-500">
              Need to get rid of junk or move out?
            </p>
            <p className="font-semibold">
              <span className="text-gray-500 font-normal">
                We offer same-day junk removal and moving help across the Lower
                Mainland. &nbsp; <br />
              </span>
              Just call, book, and relax.
            </p>
          </h2>
          <Button
            variant="accent"
            className="font-bold font-space text-xl md:mt-16"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </div>

        <div className="rounded-lg overflow-clip aspect-[14/9] shadow-lg ">
          <img
            src="hero-banner.png"
            alt="cozy-furniture"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </Container>
  );
}

export default Hero;
