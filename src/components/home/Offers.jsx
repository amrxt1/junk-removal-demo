import Container from "../shared/Container";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Card({ title, desc }) {
  return (
    <div className="bg-background px-4 py-12 rounded-lg aspect-[4/3] text-center">
      <div className="space-y-2">
        <h2 className="text-xl font-space font-bold">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
}

const cards = [
  {
    title: "Furniture & Appliance Installations",
    desc: "We assemble and set up furniture, gym equipment, kitchen appliances — whatever you've got.",
  },
  {
    title: "Moving Help",
    desc: "Need a hand moving into a new place? We’ve got strong arms and a big van — let's go.",
  },
  {
    title: "Junk Removal",
    desc: "Mattress, old fridge, broken table — we’ll haul it out and dispose of it responsibly.",
  },
  {
    title: "Same-Day Service",
    desc: "Urgent job? We serve most cities in the Lower Mainland on short notice.",
  },
  {
    title: "Local, Friendly Technicians",
    desc: "Our team is vetted, trained, and local. We show up, get it done, and clean up after.",
  },
];

function Offers() {
  return (
    <Container id="offers" className="bg-text py-12">
      <h1 className="text-background pb-4 md:pb-8 lg:pb-12 font-space font-bold text-2xl text-center">
        Services We Provide
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
            <Card title={card.title} desc={card.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Offers;
