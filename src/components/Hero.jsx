function Hero() {
  return (
    <div className="hero">
      <div className="value">
        <div className="value-text">
          <h1 className="value-heading">
            Expert Assembly, Right Where You Need It
          </h1>
          <p>
            <span>
              Bought something, but don't know how to put it together? Call us!
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
        <img
          id="hero-image"
          src="https://www.pngall.com/wp-content/uploads/11/Home-Appliance-Background-PNG.png"
          alt="appliances"
        />
      </div>
    </div>
  );
}

export default Hero;
