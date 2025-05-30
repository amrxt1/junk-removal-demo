import Container from "./shared/Container";
import Button from "./shared/Button";

function Hero() {
  return (
    <Container>
      <div id="hero" className="flex flex-col pt-16 pb-32 text-center gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-space font-bold">
            Expert Assembly, Right Where You Need It
          </h1>
          <h2 className=" text-xl">
            Bought something, but don't know how to put it together? Call us!
            Our professionals will come to your place, assemble, and put it in
            your desired place.
          </h2>
          <Button variant="accent" className="font-bold font-space text-lg">
            Contact Us
          </Button>
        </div>
        <div className="rounded-lg overflow-clip">
          <img src="furniture.jpg" alt="cozy-furniture" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
