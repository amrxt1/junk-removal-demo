import Container from "./shared/Container";

function Card({ title, desc }) {
  return (
    <div className="bg-background px-4 py-13 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-xl font-space font-bold">{title}</h2>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
}

const cards = [
  {
    title: "Installation & Removal Services",
    desc: "We offer installation service of all kinds of furniture and appliances. We also offer removal services for your old stuff: appliances, furniture, mattress.",
  },
  {
    title: "Expert Team",
    desc: "We have the best team of technicians and movers, working with all the major furniture and appliance companies in the Lower Mainland.",
  },
  {
    title: "Same-Day Service",
    desc: "We offer same-day service for almost all major cities in the Lower Mainland, but sometimes it depends on your location.",
  },
];

function Offers() {
  return (
    <Container id="offers" className="bg-text py-12">
      <h1
        id="offer"
        className="text-background pb-2 font-space font-bold text-2xl"
      >
        What We Offer:
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} desc={card.desc} />
        ))}
      </div>
    </Container>
  );
}

export default Offers;
