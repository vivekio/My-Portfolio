"use client";
import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const myEmail = process.env.NEXT_PUBLIC_RECEIVER_EMAIL || "";
  const myPhone = process.env.NEXT_PUBLIC_RECEIVER_PHONE || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id ="contact" className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
      {/* Left Side - Info & Icons */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let’s connect</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

      <div className="space-y-4">
  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
    <Mail className="w-5 h-5 text-yellow-500" />
    <a href={`mailto:${myEmail}`} className="hover:underline">
      {myEmail}
    </a>
  </div>
  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
    <Phone className="w-5 h-5 text-yellow-500" />
    <a href={`tel:${myPhone}`} className="hover:underline">
      {myPhone}
    </a>
  </div>
  <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
    <MapPin className="w-5 h-5 text-yellow-500" />
    <span> Ahmedabad , Gujarat , India</span>
  </div>
</div>


        {/* Social Media Icons */}
        <div className="flex space-x-6 pt-6">
          <a href="https://github.com/vivekio" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-yellow-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/vivek-pankhaniya-011556223" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-yellow-500 transition" />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center lg:text-left mb-2">Contact Us</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-600 pt-2">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}
