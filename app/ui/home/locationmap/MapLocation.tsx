// pages/ui/home/locationmap.tsx

export default function MapLocation() {
  return (
    <div>
      <h2 className="text-center mb-6">Mi trovi qui</h2>
      <div className="relative w-full h-0 pb-[56.25%]">
        {" "}
        {/* Proporzioni 16:9 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.1204577249193!2d12.521261629064592!3d41.89135588033563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f618ee46ec001%3A0x7e1beabc34025ecd!2sVia%20Prenestina%2C%2060%2C%2000176%20Roma%20RM!5e0!3m2!1sit!2sit!4v1729674890696!5m2!1sit!2sit"
          className="absolute top-0 left-0 w-full h-full border-2 border-[var(--tertiary-color)]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
