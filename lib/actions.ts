"use server";

import nodemailer from "nodemailer";

type EmailData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

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
      port: parseInt(process.env.SMTP_PORT || "587"),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: "marco.falasca87@gmail.com",
      subject: `New contact form submission: ${data.subject}`,
      text: `
        Name: ${data.name}
        Number: ${data.phone}
        Email: ${data.email}
        Subject: ${data.subject}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
