import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className=" mb-6 text-[var(--color)]">Informazioni</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            {/* Phone icon placeholder */}
            <FaMobileAlt className=" text-[var(--color)] text-2xl" />
          </div>
          <div className="ml-4">
            <p className=" font-medium text-[var(--color)]">
              Numero di telefono
            </p>
            <p className=" text-[var(--color)]">+39 123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            {/* Email icon placeholder */}
            <MdAlternateEmail className=" text-[var(--color)] text-2xl" />
          </div>
          <div className="ml-4">
            <p className=" font-medium text-[var(--color)]">Indirizzo email</p>
            <p className=" text-[var(--color)]">esempio@email.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            {/* Location icon placeholder */}
            <MdLocationOn className="text-[var(--color)] text-2xl" />
          </div>
          <div className="ml-4">
            <p className=" font-medium text-[var(--color)]">Località</p>
            <p className=" text-[var(--color)]">Roma, Italia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
