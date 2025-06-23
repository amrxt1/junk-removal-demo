import Container from "../components/shared/Container";
import ContactForm from "../components/shared/ContactForm";
const cards = [
  {
    title: "Same-Day Installations",
    content:
      "No more waiting around. We offer lightning-fast installations for your home or office, completed the very day you call. Because time is money, and you’re not made of patience.",
  },
  {
    title: "Custom Setup & Configuration",
    content:
      "Every space is different. We tailor your installation to your specific needs—whether it's mounting, wiring, or just making it look like we were never there.",
  },
  {
    title: "Maintenance & Upgrades",
    content:
      "Need a tune-up? Or maybe you're ready to upgrade your setup? We’ll handle the technical stuff while you pretend it was your idea all along.",
  },
];

const Card = ({ title, content }) => {
  return (
    <div className="border rounded-lg px-4 py-6 mb-8 shadow-md flex flex-col h-full justify-between">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <Container className="pb-12">
        <div className="font-space font-bold text-2xl text-center my-4">
          Our Services
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            return <Card key={index} {...card} />;
          })}
        </div>
      </Container>
      <ContactForm />
    </>
  );
};

export default Services;
