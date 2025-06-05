import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "hotmail", "yahoo", etc.
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

await transporter.sendMail({
  from: `"${name}" <${email}>`,
  to: process.env.RECEIVER_EMAIL,
  subject: "New Contact Form Message",
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
      <h2 style="color: #4CAF50;">📩 New Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; margin-top: 10px;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <br>
      <hr style="border: none; border-top: 1px solid #eee;">
      <footer style="font-size: 0.9em; color: #777;">
        You received this email from your portfolio contact form.
      </footer>
    </div>
  `,
});

    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
}
