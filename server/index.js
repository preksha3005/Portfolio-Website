import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Message from "./Models/Message.js";
import cookieParser from "cookie-parser";
import { Resend } from "resend";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "https://portfoliofrontend-6tgu.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser()); // middleware function in Express.js that enables the parsing of cookies in incoming requests.

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    // Exit process with failure code if database connection fails
    process.exit(1);
  });

const resend = new Resend(process.env.RESEND_API_KEY);

// Send message from contact form
app.post("/sendmessage", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Send email via Resend API
    await resend.emails.send({
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER, 
      subject: `Portfolio message from ${name}`,
      text: `You got a message!! \n\n Name: ${name} \n Email: ${email} \n Message: ${message}`,
      replyTo: email, 
    });

    // Save message to MongoDB
    const newMessage = new Message({
      name,
      email,
      message,
      createdAt: new Date(),
    });
    await newMessage.save();

    res.json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Resend API error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
