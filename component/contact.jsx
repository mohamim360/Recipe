"use client";

import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact me</h1>

      <p className="text-gray-700 mb-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mohamim360@gmail.com">
          mohamim360@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="space-y-4" action={async (formData) => {
          const { data, error } = await sendEmail(formData);
        }}>
        <div>
          <label htmlFor="senderEmail" className="block text-gray-700">
            Your Email
          </label>
          <input
            id="senderEmail"
            className="w-full h-12 px-4 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full h-32 px-4 py-2 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
        </div>
        
        <button
          className="w-full h-12 px-6 bg-blue-500  rounded-lg hover:bg-blue-600 "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
