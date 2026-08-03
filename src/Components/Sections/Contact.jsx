import React, { useState } from "react";

const YOUR_EMAIL = "brosnanbarongo@gmail.com"; // Your email is ready here!

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFormStatus("Sending your message...");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New portfolio message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Send failed");

      setFormStatus("✅ Message sent successfully! I'll reply to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setFormStatus(`❌ Oops! Something went wrong. Please email me directly at ${YOUR_EMAIL}`);
    } finally {
      setSending(false);
      setTimeout(() => setFormStatus(""), 6000);
    }
  };

  return (
    <div className="w-full bg-[#09090b] flex flex-col justify-center items-center px-4 py-24" id="contact">
      {/* Heading */}
      <div className="mb-12 flex items-center text-center justify-center flex-col">
        <div className="flex items-center justify-center mb-4 relative h-6 w-12">
          <span className="blinking-circle absolute w-2 h-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          <span className="blinking-circle absolute w-4 h-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Wanna Build a Project?
        </h2>
      </div>

      {/* Contact Form */}
      <div className="bg-[#18181b] border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Reach Out To Me</h2>

        {formStatus && (
          <p className="text-center mb-4 text-[#8b5cf6] bg-[#8b5cf6]/10 p-3 rounded-lg border border-[#8b5cf6]/30 text-sm">
            {formStatus}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#09090b] border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#8b5cf6] outline-none transition placeholder-gray-600"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#09090b] border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#8b5cf6] outline-none transition placeholder-gray-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#09090b] border border-white/10 text-white rounded-xl focus:ring-2 focus:ring-[#3b82f6] focus:border-[#8b5cf6] outline-none transition h-32 placeholder-gray-600"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold py-3.5 rounded-xl hover:brightness-110 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}