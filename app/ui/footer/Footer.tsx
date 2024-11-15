import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-end w-3/4 h-20 md:max-w-3xl mx-auto mt-12">
      <a
        href="https://www.instagram.com/alexroma84/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Instagram profile"
      >
        <FiInstagram className="mr-4 text-2xl transform transition-transform duration-200 hover:-translate-y-1 hover:text-[var(--tertiary-color)]" />
      </a>
      <a
        href="https://www.linkedin.com/in/alessandro-bianchetti-53562a88/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <FiLinkedin className="text-2xl mr-3 transform transition-transform duration-200 hover:-translate-y-1 hover:text-[var(--tertiary-color)]" />
      </a>
      <a
        href="https://www.facebook.com/alessandro.bianchetti.39/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my Facebook profile"
      >
        <FiFacebook className="text-2xl mr-3 transform transition-transform duration-200 hover:-translate-y-1 hover:text-[var(--tertiary-color)]" />
      </a>
      <a
        href="https://wa.me/393394955810"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
      >
        <FaWhatsapp className="text-2xl transform transition-transform duration-200 hover:-translate-y-1 hover:text-[var(--tertiary-color)]" />
      </a>
    </footer>
  );
}
