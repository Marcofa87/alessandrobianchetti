// app/contact/page.tsx
import ContactForm from "@/components/ui/contacts/contact-form";
import ContactPage from "@/components/ui/contacts/contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatta Alessandro Bianchetti - Personal Trainer",
  description:
    "Contatta Alessandro Bianchetti, personal trainer a Roma, per allenamenti personalizzati e consulenze sulla postura.",
  keywords: [
    "contatti personal trainer",
    "Roma personal trainer",
    "consulenza postura",
    "allenamenti personalizzati",
  ],
  /* openGraph: {
    title: "Contatta Alessandro Bianchetti - Personal Trainer",
    description:
      "Prenota una consulenza con Alessandro Bianchetti, personal trainer a Roma specializzato in allenamenti personalizzati e postura.",
    url: "https://alessandrobianchetti.vercel.app/contacts",
    images: [
      {
        url: "https://URL_dell_immagine_di_preview_contatti",
        width: 800,
        height: 600,
        alt: "Contatti Alessandro Bianchetti",
      },
    ],
  }, */
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center lg:flex-row lg:justify-around mx-auto space-y-8 md:space-y-0 md:space-x-8">
        {/* <div className="w-full max-w-md">
          <ContactForm />
        </div> */}
        <div className="w-full max-w-md">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}
