import ContactForm from "../components/shared/ContactForm";
import Container from "../components/shared/Container";
import FindUs from "../components/shared/FindUs";
const Contact = () => {
  return (
    <>
      <Container>
        <h1 className="text-2xl font-bold font-space text-center my-4">
          Contact Us
        </h1>
      </Container>
      <div className=" w-full flex justify-center items-center">
        <ContactForm />
      </div>
      <FindUs />
    </>
  );
};

export default Contact;
