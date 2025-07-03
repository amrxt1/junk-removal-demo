import Container from "../components/shared/Container";
import ContactForm from "../components/shared/ContactForm";

import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <Container>
        <div className="my-8">
          <motion.h1
            initial={{ opacity: 0.3, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-bold mb-4 text-center"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0.3, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 w-full flex justify-center"
          >
            <img
              src="before-aboutUs.png"
              alt="Our Team Illustration"
              className="rounded-lg lg:w-[60%]"
            />
          </motion.div>
          <div className="text-lg">
            <p className="mb-4 text-gray-700">
              QuickMove is a local team based in the Lower Mainland, offering
              reliable junk removal and moving services — with same-day
              availability when you need it most.
            </p>
            <p className="mb-4 text-gray-700">
              We handle everything from old furniture and appliance pickups to
              full residential moves. Our goal is to make the process simple,
              efficient, and stress-free.
            </p>
            <p className="mb-4 text-gray-700">
              Whether you're clearing out a basement, upgrading your space, or
              switching apartments, we bring the muscle, the truck, and a
              no-nonsense work ethic.
            </p>
            <p className="mb-4 text-gray-700">
              We're fully insured, always on time, and serious about doing the
              job right. No hidden fees. No delays. Just clear, upfront service
              you can count on.
            </p>
            <p className="mb-4 text-gray-700">
              Ready to book or have questions? Reach out — we’re quick to
              respond and quicker to show up.
            </p>
          </div>
        </div>
      </Container>
      <ContactForm />
    </>
  );
};

export default About;
