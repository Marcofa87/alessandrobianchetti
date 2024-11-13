import { useTranslations } from "next-intl";

export default function MapLocation() {
  const t = useTranslations("HomePage");
  return (
    <div className="p-8 md:w-3/4 lg:w-3/6 m-auto">
      <h2 className="text-center mb-6 text-4xl">{t("mapLocation")}</h2>
      <div className="relative w-full h-0 pb-[56.25%] m-auto sm:pb-[75%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0823483175045!2d12.519581476484426!3d41.89108606460039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61024cde5375%3A0x1a57d377453a50e1!2skamehouse%20studio!5e0!3m2!1sit!2sit!4v1730311292153!5m2!1sit!2sit"
          className="absolute top-0 left-0 w-full h-full border-8 border-[var(--background)]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa della posizione di Kamehouse Studio a Roma"
        ></iframe>
      </div>
    </div>
  );
}
