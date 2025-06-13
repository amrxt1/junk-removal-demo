import Container from "./shared/Container";
import { motion } from "motion/react";

function WhyUs() {
  return (
    <Container className="py-12">
      <div>
        <h1 className="text-2xl font-space font-bold text-center pb-6 text-text">
          Why Clients Trust Us
        </h1>

        <div className="grid grid-cols-3 gap-2 auto-rows-fr relative overflow-hidden">
          {/* Transparent Pricing */}
          <motion.div
            initial={{ opacity: 1, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative col-span-2 rounded-md overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url(/src/assets/images/home/pricing.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold font-space mb-2 text-center">
                Transparent Pricing
              </h3>
              <p className="text-base opacity-90 text-center">
                What we quote is what you pay — no surprises.
              </p>
            </div>
          </motion.div>

          {/* We Haul Old Stuff */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="bg-background text-text border border-text/33 p-4 rounded-md 
                         col-span-1 flex flex-col justify-between h-full"
          >
            <h3 className="text-xl font-bold font-space mb-2">
              We Haul Old Stuff
            </h3>
            <p className="text-base opacity-80">
              Furniture, mattresses, appliances — out of your way.
            </p>
          </motion.div>

          {/* Local & Trusted */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-background text-text border border-text/33 p-4 rounded-md 
                       col-span-1 flex flex-col justify-between h-full"
          >
            <h3 className="text-xl font-bold font-space mb-2">
              Local & Trusted
            </h3>
            <p className="text-base opacity-80">
              We’re a local team that knows the Lower Mainland — and our reviews
              prove it.
            </p>
          </motion.div>

          {/* Expert Technicians */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="relative col-span-2 rounded-md overflow-hidden bg-cover bg-center shadow-md"
            style={{
              backgroundImage: "url(/src/assets/images/home/moving-crew.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold font-space mb-2 text-center">
                Expert Technicians
              </h3>
              <p className="text-base opacity-90 text-center">
                Certified, vetted, and experienced — we work with all major
                brands.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

export default WhyUs;
