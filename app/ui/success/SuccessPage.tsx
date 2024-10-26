import { Dumbbell } from "lucide-react";
import Link from "next/link";

export default function SuccessSubmit() {
  return (
    <div className="flex flex-col items-center mt-52 ">
      <h2 className=" mb-4">Successo!</h2>
      <p className="text-lg  mb-6">Il tuo form è stato inviato con successo.</p>
      <Dumbbell size={128} />
      <Link href="/" passHref>
        <button className="px-4 py-2 bg-[var(--tertiary-color)]  rounded hover:bg-red-800 transition">
          Torna alla Home
        </button>
      </Link>
    </div>
  );
}
