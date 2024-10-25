"use server";

import nodemailer from "nodemailer";

export async function sendEmail(data: {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // Assicurati che la porta sia un numero
      secure: process.env.SMTP_PORT === "465", // Usa `secure` solo con la porta 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Password per app generata per l'autenticazione a 2 fattori
      },
      debug: true, // Abilita debug
      logger: true, // Abilita il log per vedere i dettagli delle operazioni
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "marco.falasca87@gmail.com",
      replyTo: data.email, // Permette di rispondere direttamente al mittente
      subject: `New contact form submission: ${data.subject}`,
      text: `
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Subject: ${data.subject}
        Message: ${data.message}
      `,
    };

    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
