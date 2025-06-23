import Container from "./Container";

function ContactForm() {
  return (
    <Container id="contact" className="py-12 bg-foreground">
      <h1 className="text-2xl font-bold font-space text-center pb-6 text-background">
        Book a Free Estimate
      </h1>
      <div className="bg-background px-4 py-12 rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (not really)!");
          }}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1 font-semibold">
            Name
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 rounded-md bg-background text-foreground border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>
          <label className="flex flex-col gap-1 font-semibold">
            Phone Number
            <input
              type="tel"
              placeholder="604-555-1234"
              className="px-4 py-2 rounded-md bg-background text-foreground border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>
          <label className="flex flex-col gap-1 font-semibold">
            Address
            <input
              type="text"
              placeholder="123 Main St, Surrey, BC"
              className="px-4 py-2 rounded-md bg-background text-foreground border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>
          <button
            type="submit"
            className="bg-accent text-background font-bold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </Container>
  );
}

export default ContactForm;
