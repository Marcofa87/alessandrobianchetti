import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 sm:my-16 bg-stone-100 rounded-xl shadow-md">
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

            <p className=" text-[var(--color)] underline hover:font-bold">
              {" "}
              <a href="https://wa.me/393394955810" target="_blank">
                +39 3394955810
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            {/* Email icon placeholder */}
            <MdAlternateEmail className=" text-[var(--color)] text-2xl" />
          </div>
          <div className="ml-4">
            <p className=" font-medium text-[var(--color)] ">Indirizzo email</p>
            <p className=" text-[var(--color)] hover:font-bold underline">
              <a href="mailto:alessandrobianchetti.1984@gmail.com">
                alessandrobianchetti.1984@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            {/* Location icon placeholder */}
            <MdLocationOn className="text-[var(--color)] text-2xl" />
          </div>
          <div className="ml-4">
            <p className=" font-medium text-[var(--color)]">Indirizzo</p>
            <p className=" text-[var(--color)] underline hover:font-bold">
              <a
                href="https://www.google.com/maps/place/kamehouse+studio/@41.8910821,12.5221564,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61024cde5375:0x1a57d377453a50e1!8m2!3d41.8910821!4d12.5221564!16s%2Fg%2F11wmr8vhtj?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                Via Prenestina 60,b
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
