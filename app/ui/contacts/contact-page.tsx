import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <div className="max-w-md mx-auto mt-10 p-6 sm:my-16 bg-stone-100 rounded-xl shadow-md">
      <h2 className="mb-6 text-[var(--color)]">Info:</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <Phone className="text-[var(--color)] w-6 h-6 transition-all duration-300 hover:font-bold" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-[var(--color)]">{t("phone")}</p>
            <a
              href="https://wa.me/393394955810"
              target="_blank"
              className="text-[var(--color)] underline transition-all duration-300 hover:font-bold"
            >
              +39 3394955810
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <Mail className="text-[var(--color)] w-6 h-6 transition-all duration-300 hover:font-bold" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-[var(--color)]">{t("email")}</p>
            <a
              href="mailto:alessandrobianchetti.1984@gmail.com"
              className="text-[var(--color)] underline transition-all duration-300 hover:font-bold"
            >
              alessandrobianchetti.1984@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <MapPin className="text-[var(--color)] w-6 h-6 transition-all duration-300 hover:font-bold" />
          </div>
          <div className="ml-4">
            <p className="font-medium text-[var(--color)]">{t("address")}</p>
            <a
              href="https://www.google.com/maps/place/kamehouse+studio/@41.8910821,12.5221564,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61024cde5375:0x1a57d377453a50e1!8m2!3d41.8910821!4d12.5221564!16s%2Fg%2F11wmr8vhtj?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="text-[var(--color)] underline transition-all duration-300 hover:font-bold"
            >
              Via Prenestina 60,b
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
