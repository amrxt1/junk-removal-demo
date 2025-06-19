import Container from "../shared/Container";

function FindUs() {
  return (
    <Container className="pt-12 pb-16 md:flex md:justify-center">
      <div className="text-center md:w-[50%] ">
        <h1 id="map" className="text-2xl font-space font-bold pb-2">
          Find us here
        </h1>
        <div className="w-full aspect-square rounded-xl border border-gray-300 shadow-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.296822720709!2d-122.89287362405015!3d49.156973971374214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d974daeb1601%3A0x12d6eb728cd4624f!2sScott%20Rd%2C%20Metro%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1707072662686!5m2!1sen!2sca"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}

export default FindUs;
