function Offers() {
  return (
    <div className="grid-container">
      <h1 id="offer">What We Offer:</h1>
      <div className="grid-item">
        <img src="assets/images/furniture.svg" alt="" />
        <h3>Installation & Removal Services</h3>
        <p>
          We offer installation service of all kinds of furniture and
          appliances. We also offer removal services for your old stuff:
          appliances, furniture, mattress.
        </p>
      </div>
      <div className="grid-item">
        <img src="assets/images/certified.svg" alt="" />
        <h3>Expert Team</h3>
        <p>
          We have the best team of technicians and movers, working with all the
          major furniture and appliance companies in the Lower Mainland.
        </p>
      </div>
      <div className="grid-item">
        <img src="assets/images/sameday.svg" alt="" />
        <h3>Same-Day Service</h3>
        <p>
          We offer same-day service for almost all major cities in the Lower
          Mainland, but sometimes it depends on your location.
        </p>
      </div>
    </div>
  );
}

export default Offers;
