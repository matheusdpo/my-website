// app/components/Contact.tsx
"use client";

import Layout from "@/app/components/Layout";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, email, message }),
      });

      if (response.ok) {
        setIsSent(true);
        setSubject("");
        setEmail("");
        setMessage("");
      } else {
        alert("There was an error sending the e-mail. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending the e-mail. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="flex flex-col items-center w-full max-w-6xl mt-20 p-6">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Contact Me
        </h2>
        <p className="text-lg text-gray-400 mt-6 font-mono text-center">
          Fill the form below to send me an e-mail directly.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-8">
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-400 font-mono mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 font-mono mb-2">
              Your E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-400 font-mono mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition font-mono"
          >
            {isLoading ? "Sending..." : "Send E-mail"}
          </button>

          {isSent && (
            <p className="mt-4 text-green-400 font-mono text-center">
              Your e-mail was sent successfully!
            </p>
          )}
        </form>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 font-mono">
            Or find me on social media
          </h3>
          <div className="flex justify-center space-x-6 mt-6">
            <Link
              href="https://linkedin.com/in/matheus-de-paulo-oliveira"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://github.com/matheusdpo"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href="http://www.instagram.com/_matheusdpo"
              target="_blank"
              className="text-gray-400 hover:text-pink-400 transition"
            >
              <FaInstagram size={28} />
            </Link>
            <Link
              href="http://www.x.com/_matheusdpo"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaXTwitter size={28} />
            </Link>
            <Link
              href="discord://-/users/285224406077407232"
              target="_blank"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              <FaDiscord size={28} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}