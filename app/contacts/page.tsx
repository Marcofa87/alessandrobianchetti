import ContactForm from "@/components/ui/contacts/contact-form";
import ContactPage from "@/components/ui/contacts/contact-page";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center lg:flex-row  lg:justify-around mx-auto space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full max-w-md">
          <ContactForm />
        </div>
        <div className="w-full max-w-md">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}
