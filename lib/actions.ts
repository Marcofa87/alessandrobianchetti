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
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "marco.falasca87@gmail.com",
      replyTo: data.email, // This allows you to reply directly to the sender
      subject: `New contact form submission: ${data.subject}`,
      text: `
        Name: ${data.name}
        Number: ${data.phone}
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
