import Container from "./shared/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reasons = [
  {
    title: "Transparent Pricing",
    desc: "No hidden fees. Our quotes are clear, upfront, and fair — always.",
  },
  {
    title: "Trained Professionals",
    desc: "Every technician on our team is trained, vetted, and committed to top-tier service.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Book when it works for you — same-day, weekend, or evening slots available.",
  },
  {
    title: "Local & Trusted",
    desc: "We're a local team that knows the Lower Mainland — and our reviews prove it.",
  },
];

function Card({ title, desc }) {
  return (
    <div className="bg-text text-background py-16 aspect-[4/3] px-4 rounded-lg">
      <h3 className="font-space font-bold text-2xl pb-4">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function WhyUs() {
  return (
    <Container>
      <h1>Why Choose Us:</h1>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
        }}
      >
        {reasons.map((reason, idx) => (
          <SwiperSlide key={idx}>
            <Card title={reason.title} desc={reason.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default WhyUs;
