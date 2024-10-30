import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-end w-3/4 h-20 md:max-w-3xl mx-auto mt-12">
      <FiInstagram className="mr-4 text-2xl" />
      <FiLinkedin className="text-2xl " />
      <FaWhatsapp className="text-2xl" />
      <FiFacebook className="text-2xl" />
    </footer>
  );
}
