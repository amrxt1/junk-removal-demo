import Container from "../components/shared/Container";
import ContactForm from "../components/shared/ContactForm";

const About = () => {
  return (
    <>
      <Container>
        <div className="my-8">
          <h1 className="text-2xl font-bold mb-4 text-center">About Us</h1>
          <div className="mb-6 text-center">
            <img
              src="/about_image.png"
              alt="Our Team Illustration"
              className="mx-auto w-full max-w-md rounded-lg "
            />
          </div>
          <p className="mb-4 text-gray-700">
            We’re not a big, faceless company. We’re a small, faceless company—
            but with heart. Our mission is to make same-day installations feel
            less like a hassle and more like a superpower.
          </p>
          <p className="mb-4 text-gray-700">
            With a mix of technical skill, speed, and just enough charm to make
            your grandma smile, we help homes and offices get set up fast. No
            long waits. No flaky promises. Just real service, real quick.
          </p>
          <p className="mb-4 text-gray-700">
            Whether it's mounting, wiring, troubleshooting, or upgrading, we
            show up on time and get the job done right—the first time. Because
            we know you’ve got better things to do than wait around all day.
          </p>
          <p className="mb-4 text-gray-700">
            Behind our services is a team of humans (and one suspiciously
            capable AI) who care about doing things properly. We believe in fast
            work, clean finishes, and a no-drama approach.
          </p>
          <p className="mb-4 text-gray-700">
            Want to learn more or book a service? Just reach out. Or send smoke
            signals. We’ll probably respond faster than your internet provider.
          </p>
        </div>
      </Container>
      <ContactForm />
    </>
  );
};

export default About;
