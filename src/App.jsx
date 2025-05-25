import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)

  setTimeout(()=>setCount(count+1), 1000)

  return (
    <>
    {count}
      <div className="header">
        <div className="header-logo">Same Day Installations and Removal Service</div>
        <div className="nav-bar">
          <a href="#offer">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#map">Find Us</a>
          <a>Contact Us</a>
        </div>
      </div>
      <div className="container">
        <div className="hero">
          <div className="value">
            <div className="value-text">
              <h1 className="value-heading">
                Expert Assembly, Right Where You Need It
              </h1>
              <p>
                <span
                  >Bought something, but don't know how to put it together? Call
                  us!</span
                ><br />
                Our professionals will come to your place, assemble, and put it in
                your desired place.
              </p>
              <a href="tel:6047658450" id="contact-btn">Contact Us</a>
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

        <h1
          
          id="offer"
        >
          What We Offer:
        </h1>
        <div className="grid-container">
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
              We have the best team of technicians and movers, working with all
              the major furniture and appliance companies in the Lower Mainland.
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
        <h1
          id="gallery"
        >
          Gallery
        </h1>
        <div className="gallery">
          <img
            src="https://images.unsplash.com/photo-1706562018252-5ce3eadb2288?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1706535564563-d5613c74b78d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image 2"
          />
          <img
            src="https://images.unsplash.com/photo-1706982706385-a50cccfcb8b5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image 3"
          />
          <img
            src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image 4"
          />
          <img
            src="https://images.unsplash.com/photo-1706706588488-7f1ed39abe18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image 5"
          />
        </div>
        <h1
          id="map"
        >
          Find us here
        </h1>
        <div className="map">
          
        </div>

        <div className="footer">
          <h3>Contact Us For a Free Quote</h3>
          <p>
            <img src="assets/images/phone.svg" alt="" />
            <a href="tel:6047658450">604-765-8450</a>
          </p>
          <p>
            <img src="assets/images/mail.svg" alt="" />
            <a href="mailto:vrangi774@gmail.com">vrangi774@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
