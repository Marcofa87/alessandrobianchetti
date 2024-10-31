import nodemailer from "nodemailer";
import crypto from "crypto";

export async function sendVerificationEmail(email: string) {
  const token = crypto.randomBytes(20).toString("hex");

  const verificationLink = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/verify-email?token=${token}&email=${encodeURIComponent(email)}`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Verifica il tuo indirizzo email",
    html: `<p>Clicca <a href="${verificationLink}">qui</a> per verificare il tuo indirizzo email.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending verification email:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to send verification email",
    };
  }
}
