import Container from "../shared/Container";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const cards = [
  {
    title: "Junk Removal",
    desc: "Mattress, old fridge, broken table — we’ll haul it out and dispose of it responsibly.",
    testimonial: {
      name: "Sarah from Surrey",
      comment:
        "Booked last minute and they still showed up early. Fast and professional!",
    },
  },
  {
    title: "Moving Help",
    desc: "Need a hand moving into a new place? We’ve got strong arms and a big van — let's go.",
    testimonial: {
      name: "Jason L.",
      comment: "They moved my whole apartment in under 3 hours. Lifesavers!",
    },
  },
  {
    title: "Furniture & Appliance Pickup",
    desc: "We pick up, deliver, and set up heavy items — hassle-free.",
    testimonial: {
      name: "Preeti M.",
      comment:
        "They brought in my new couch and even unboxed it. Super helpful guys.",
    },
  },
  {
    title: "Same-Day Service",
    desc: "Urgent job? We serve most cities in the Lower Mainland on short notice.",
    testimonial: {
      name: "Moe from Richmond",
      comment: "Called at 10am, junk was gone by 2pm. Insane turnaround time.",
    },
  },
  {
    title: "Upfront, Honest Pricing",
    desc: "What we quote is what you pay — no hidden fees, ever.",
    testimonial: {
      name: "Lana K.",
      comment: "No surprises at all — quote was bang on. Respect.",
    },
  },
];

function Card({ title, desc, testimonial }) {
  return (
    <div
      className="bg-background px-4 py-8 md:px-8 md:py-12 rounded-lg
     aspect-[4/3] flex flex-col justify-between"
    >
      <div className="space-y-3 text-center">
        <h2 className="text-xl font-space font-bold">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>

      {testimonial && (
        <div
          className="mt-6 flex items-center gap-4 bg-muted px-4 py-3
         rounded-lg border border-border"
        >
          <div
            className="w-10 h-10 rounded-full bg-red-200 border
           border-red-400 shrink-0"
          />
          <div className="text-sm">
            <p className="font-semibold">{testimonial.name} says:</p>
            <p className="italic text-muted-foreground">
              “{testimonial.comment}”
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function WhyUs() {
  return (
    <Container id="offers" className="bg-text py-12">
      <h1 className="text-background pb-4 md:pb-8 lg:pb-12 font-space font-bold text-2xl text-center">
        Why Us{" "}
      </h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={100}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3300,
          disableOnInteraction: false,
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              title={card.title}
              desc={card.desc}
              testimonial={card.testimonial}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default WhyUs;
