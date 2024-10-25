"use server";

import nodemailer from "nodemailer";

type EmailData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  console.log("Attempting to send email...");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log("Transporter created");

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

  console.log("Mail options set");

  try {
    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}`);
    } else {
      throw new Error("Failed to send email: Unknown error");
    }
  }
}
