import Container from "./shared/Container";

import mailIcon from "../assets/images/mail.svg";
import phoneIcon from "../assets/images/phone.svg";

function Footer() {
  return (
    <Container className="bg-text pt-12 pb-16 text-background">
      <footer>
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="pb-2 text-lg font-semibold">Contact Us</h3>
            <p className="flex gap-2 items-center">
              <img src={phoneIcon} alt="company-phone" className="w-5 h-5" />
              <a href="tel:6047658450">604-765-8450</a>
            </p>
            <p className="flex gap-2 items-center">
              <img src={mailIcon} alt="company-mail" className="w-5 h-5" />
              <a href="mailto:vrangi774@gmail.com">vrangi774@gmail.com</a>
            </p>
          </div>
          <div className="">
            <p className="mb-2 text-lg font-semibold">Helpful Links</p>
            <nav className="flex flex-col">
              <a href="#top">Back to Top</a>
              <a href="#offers">What We Offer</a>
              <a href="#map">Our Location</a>
            </nav>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-12">
          © {new Date().getFullYear()} SDIARS. All rights reserved.
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
