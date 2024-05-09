/* eslint-disable react/no-unescaped-entities */
export default function ContactFormEmail({ message, senderEmail }) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl p-8 bg-white border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          You received the following message from the contact form:
        </h2>
        <p className="mb-4">{message}</p>
        <hr className="border-t border-gray-300 my-4" />
        <p className="font-semibold">The sender's email is: {senderEmail}</p>
      </div>
    </div>
  );
}
