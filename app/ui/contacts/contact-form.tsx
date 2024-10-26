"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/../lib/actions";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(data);
      if (result.success) {
        setSubmitStatus("success");
        reset();
        router.push("/success");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-center mb-8">Contattami subito!</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-md mx-auto "
      >
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-[var(--background)]"
          >
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            className="mt-1 text-[var(--color)] block w-full rounded-md border-[var(--tertiary-color)] shadow-sm focus:border-[var(--tertiary-color)] focus:ring-[var(--tertiary-color)] p-2"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-[var(--tertiary-color)]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="number"
            className="block font-medium text-[var(--text-color)]"
          >
            Number
          </label>
          <input
            {...register("phone", { required: "Number is required" })}
            type="tel"
            id="number"
            className="mt-1 block w-full rounded-md text-[var(--color)] shadow-sm p-2"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-[var(--tertiary-color)]">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-medium text-[var(--text-color)]"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-[var(--tertiary-color)] text-[var(--color)] shadow-sm p-2"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-[var(--tertiary-color)]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-[var(--text-color)]">
            Subject
          </label>
          <input
            {...register("subject", { required: "Subject is required" })}
            type="text"
            id="subject"
            className="mt-1 block w-full rounded-md shadow-sm text-[var(--color)] p-2"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-[var(--tertiary-color)]">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-medium text-[var(--text-color)]"
          >
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md shadow-sm text-[var(--color)] p-2"
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-[var(--tertiary-color)]">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-[var(--tertiary-color)] text-[var(--text-color)] font-bold text-xl rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--tertiary-color)] focus:ring-offset-2"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* {submitStatus === "success" && (
          <p className="mt-2 text-sm text-green-600">
            Your message has been sent successfully!
          </p>
        )} */}
        {submitStatus === "error" && (
          <p className="mt-2 text-sm text-[var(--text-color)]">
            {errorMessage ||
              "There was an error sending your message. Please try again."}
          </p>
        )}
      </form>
    </div>
  );
}
