import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-28">
      <Dumbbell className="my-8" size={128} color="#c1292e" />
      <h2 className="text-4xl font-bold mb-4">404 - Pagina non trovata</h2>
      <p className="text-xl mb-8 text-center max-w-md">
        Oops! Se non trovi la pagina desiderata è perchè anche lei è sicuramente
        in Palestra!
      </p>
      <Link href="/" passHref>
        <button className="px-4 py-2 bg-[var(--tertiary-color)]  rounded hover:bg-red-800 transition font-bold">
          Torna alla Home
        </button>
      </Link>
    </div>
  );
}
