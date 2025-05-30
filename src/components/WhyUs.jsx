import Container from "./shared/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

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
    <div className="h-full bg-text text-background py-16 aspect-[4/3] px-4 rounded-lg">
      <h3 className="font-space font-bold text-xl pb-2">{title}</h3>
      <p className="text-lg">{desc}</p>
    </div>
  );
}

function WhyUs() {
  return (
    <Container className="py-12">
      <h1 className="text-2xl font-space font-bold">Why Choose Us:</h1>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.25 },
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
