"use client";

import { useRef } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const formRef = useRef(null);

  function handleSubmit() {
    toast.success("Your response has been submitted!");
    formRef.current.reset();
  };

  return (
    <>
      <form
        ref={formRef}
        className="space-y-6"
        action="https://docs.google.com/forms/d/e/1FAIpQLSePIueg6MYSl4_mkEQ-QVB2P0XXuE7JD6_GX09u_JVuk_KFpQ/formResponse"
        method="POST"
        target="hidden_iframe"
      >
        <div>
          <label
            className="text-sm text-gray-700 block mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="text"
            id="name"
            name="entry.1687351486"
            required
          />
        </div>

        <div>
          <label
            className="text-sm text-gray-700 block mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg"
            type="email"
            id="email"
            name="entry.322053848"
            required
          />
        </div>

        <div>
          <label
            className="text-sm text-gray-700 block mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg"
            id="message"
            name="entry.1203224935"
            required
            rows="6"
          />
        </div>

        <button
          className="w-full xl:w-auto bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Hidden iframe to prevent redirection */}
      <iframe
        name="hidden_iframe"
        className="hidden"
        onLoad={handleSubmit}
      />
    </>
  );
}
