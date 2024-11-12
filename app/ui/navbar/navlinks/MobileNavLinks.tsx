import Link from "next/link";
import useToggle from "@/components/hooks/useToggle";

export default function MobileNavLinks() {
  const { toggleMenu } = useToggle();
  return (
    <ul className="space-y-4">
      <li>
        <Link
          href="/structure"
          className="block hover:text-accent transition-colors duration-200 font-bold"
          onClick={toggleMenu}
        >
          Struttura
        </Link>
      </li>
      <li className="z-40">
        <Link
          href="/contacts"
          className="block hover:text-accent transition-colors duration-200 font-bold"
          onClick={toggleMenu}
        >
          Contatti
        </Link>
      </li>
    </ul>
  );
}
