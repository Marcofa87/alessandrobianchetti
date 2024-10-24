"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  object: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    object: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:marco.falasca87@gmail.com?object=${encodeURIComponent(
      formData.object
    )}&body=${encodeURIComponent(
      `Nome: ${formData.name} Email: ${formData.email} Telefono: ${formData.phone}  Messaggio: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-[var(--text-color)]"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 text-[var(--color)] block w-full rounded-md border-[var(--tertiary-color)] shadow-sm focus:border-[var(--tertiary-color)] focus:ring-[var(--tertiary-color)] p-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-medium text-[var(--text-color)]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-[var(--tertiary-color)] text-[var(--color)] shadow-sm  p-2"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block font-medium text-[var(--text-color)]"
          >
            Telefono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md text-[var(--color)] shadow-sm  p-2"
          />
        </div>

        <div>
          <label htmlFor="object" className="block text-[var(--text-color)] ">
            Oggetto
          </label>
          <input
            type="text"
            id="object"
            name="object"
            value={formData.object}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm text-[var(--color)] p-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-medium text-[var(--text-color)]"
          >
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full  rounded-md shadow-sm text-[var(--color)] p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[var(--tertiary-color)] text-[var(--text-color)] font-bold text-xl rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--tertiary-color)] focus:ring-offset-2"
        >
          Invia
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
