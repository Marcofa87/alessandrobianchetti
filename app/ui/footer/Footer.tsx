import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-end w-3/4 h-20 md:max-w-3xl mx-auto mt-12">
      <a href="https://www.instagram.com/alexroma84/" target="_blank">
        <FiInstagram className="mr-4 text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/alessandro-bianchetti-53562a88/">
        <FiLinkedin className="text-2xl mr-3" target="_blank" />
      </a>
      <a
        href="https://www.facebook.com/alessandro.bianchetti.39/"
        target="_blank"
      >
        <FiFacebook className="text-2xl mr-3" />
      </a>
      <a href="https://wa.me/393394955810">
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
}
