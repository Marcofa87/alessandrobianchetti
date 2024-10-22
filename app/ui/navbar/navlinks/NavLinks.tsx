import Link from "next/link";
import useToggle from "@/components/hooks/useToggle";

export default function NavLinks() {
  const { isOpen, toggleMenu } = useToggle();
  return (
    <ul className="space-y-4">
      <li>
        <Link
          href="/structure"
          className="block hover:text-accent transition-colors duration-200"
          onClick={toggleMenu}
        >
          Struttura
        </Link>
      </li>
      <li>
        <Link
          href="/contacts"
          className="block hover:text-accent transition-colors duration-200"
          onClick={toggleMenu}
        >
          Contatti
        </Link>
      </li>
    </ul>
  );
}
