import Link from "next/link";

export default function DesktopNavLinks() {
  return (
    <div>
      <Link
        href="/structure"
        className="hover:text-accent transition-colors duration-200 mr-3"
      >
        Struttura
      </Link>
      <Link
        href="/contacts"
        className="hover:text-accent transition-colors duration-200"
      >
        Contatti
      </Link>
    </div>
  );
}
