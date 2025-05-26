import Container from "./shared/Container";

function Hero() {
  return (
    <Container>
      <div className="hero">
        <div className="value">
          <div className="value-text">
            <h1 className="font-space">
              Expert Assembly, Right Where You Need It
            </h1>
            <p>
              <span>
                Bought something, but don't know how to put it together? Call
                us!
              </span>
              <br />
              Our professionals will come to your place, assemble, and put it in
              your desired place.
            </p>
            <a href="tel:6047658450" id="contact-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <img src="furniture.jpg" alt="cozy-furniture" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
