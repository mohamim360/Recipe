"use server";
import React from "react"; 
import ContactFormEmail from "@/component/ContactFormEmail";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  let data;

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mohamim360@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });


  return {
    data,
  };
};