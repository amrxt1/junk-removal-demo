import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./shared/Container";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container className="bg-foreground text-background py-2 sticky top-0 z-50 w-full">
      <div>
        <div className="flex justify-between items-center">
          <div className="font-bold font-space flex items-center gap-2">
            <img src="icon.svg" alt="icon" className="w-10 h-10" />
            QuickMove Installations
          </div>

          <div className="hidden md:flex font-bold font-mono gap-4">
            <Link to="/">HOME</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="px-4 pb-4 flex flex-col md:hidden mt-2 space-y-2 font-mono font-bold absolute bg-text w-full left-0">
            <Link to="/" onClick={() => setOpen(false)}>
              HOME
            </Link>
            <Link to="/services" onClick={() => setOpen(false)}>
              SERVICES
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              ABOUT
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Header;
