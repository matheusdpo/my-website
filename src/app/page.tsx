"use client";

import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import profilePic from "@/assets/1_picture.jpeg"; // Importação direta
import aboutMePic from "@/assets/2_picture.jpeg"; // Importação direta

export default function Home() {
  const [language, setLanguage] = useState("EN");

  return (
    <main className="flex min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background com efeito de código */}
      <div className="absolute inset-0 z-0">
        <div className="code-background"></div>
      </div>

      {/* Barra lateral (oculta em dispositivos móveis) */}
      <aside className="hidden md:flex w-20 flex-col items-center py-8 bg-gray-800 fixed left-0 top-0 h-full z-10">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="mb-6 text-gray-400 hover:text-blue-400 transition"
        >
          <FaLinkedin size={28} />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          className="text-gray-400 hover:text-purple-400 transition"
        >
          <FaGithub size={28} />
        </Link>
        <Link
          href="http://www.instagram.com"
          target="_blank"
          className="mt-6 text-gray-400 hover:text-pink-400 transition"
        >
          <FaInstagram size={28} />
        </Link>
        <Link
          href="http://www.x.com"
          target="_blank"
          className="mt-6 text-gray-400 hover:text-blue-400 transition"
        >
          <FaXTwitter size={28} />
        </Link>
        <Link
          href="http://www.discord.com"
          target="_blank"
          className="mt-6 text-gray-400 hover:text-indigo-400 transition"
        >
          <FaDiscord size={28} />
        </Link>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col items-center p-6 md:ml-20 w-full relative z-10">
        {/* Cabeçalho */}
        <header className="w-full flex flex-col md:flex-row justify-between items-center p-6 max-w-6xl border-b border-gray-700">
          <h1 className="text-lg font-bold text-gray-300 font-mono mb-4 md:mb-0">
            Matheus de Paulo Oliveira
          </h1>
          <nav className="flex flex-wrap gap-4 items-center">
            <Link
              href="#home"
              className="text-md text-gray-400 hover:text-blue-400 transition font-mono"
            >
              #home
            </Link>
            <Link
              href="#projects"
              className="text-md text-gray-400 hover:text-purple-400 transition font-mono"
            >
              #projects
            </Link>
            <Link
              href="#works"
              className="text-md text-gray-400 hover:text-green-400 transition font-mono"
            >
              #works
            </Link>
            <Link
              href="#about"
              className="text-md text-gray-400 hover:text-pink-400 transition font-mono"
            >
              #about me
            </Link>
            <Link
              href="#contact"
              className="text-md text-gray-400 hover:text-indigo-400 transition font-mono"
            >
              #contact
            </Link>
            <div className="relative group">
              <button className="text-md text-gray-400 hover:text-white transition border border-gray-600 px-3 py-1 rounded font-mono">
                {language} ▼
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setLanguage("EN")}
                  className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left font-mono"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("PT")}
                  className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left font-mono"
                >
                  PT
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Apresentação */}
        <section className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-20">
          <div className="text-left max-w-lg mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Matheus is a Java <br /> Back-End Developer
            </h2>
            <p className="text-lg text-gray-400 mt-6 font-mono">
              I build scalable and efficient backend applications using Java and
              Spring Boot, ensuring robust and high-performance solutions.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition font-mono"
            >
              Contact Me
            </Link>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="w-64 h-64 md:w-1025 md:h-1025 bg-gray-700 rounded-full flex items-center justify-center text-xl border-4 border-blue-400">
              <Image
                src={profilePic}
                alt="Your Photo"
                width={256}
                height={256}
                className="rounded-full object-cover"
              />
            </div>
            <p className="mt-6 text-gray-300 text-lg font-mono">
              Currently working on{" "}
              <span className="text-blue-400">Yank! Solutions</span>
            </p>
          </div>
        </section>

        {/* Frase destaque */}
        <section className="mt-20 text-center text-2xl font-semibold text-gray-400 border-t border-gray-700 pt-8">
          <p className="font-mono">
            &quot;By failing to prepare, you’re preparing to fail&quot;
          </p>
          <p className="text-gray-500 mt-2 font-mono">- Benjamin Franklin</p>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16 max-w-6xl w-full">
          <h3 className="text-3xl font-bold text-gray-300 font-mono">
            Projects
          </h3>
          <div className="flex overflow-x-scroll space-x-8 mt-6 p-4">
            {/* Projetos */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[12rem] bg-gray-800 rounded-lg p-6 flex-shrink-0"
              >
                <h4 className="text-xl font-bold text-gray-300 font-mono">
                  Project {index + 1}
                </h4>
                <p className="text-gray-400 mt-4 font-mono">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eget felis eget tortor ultrices.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="disabled opacity-50 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition font-mono"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16 max-w-6xl w-full">
          <h3 className="text-3xl font-bold text-gray-300 font-mono">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-6">
            {/* Skills */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-xl font-bold text-gray-300 font-mono">
                Programming Languages
              </h4>
              <p className="text-gray-400 mt-4 font-mono">
                Java, Python, JavaScript, ShellScript
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-xl font-bold text-gray-300 font-mono">
                Frameworks
              </h4>
              <p className="text-gray-400 mt-4 font-mono">
                Spring Framework, Hibernate, React, React Native
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-xl font-bold text-gray-300 font-mono">
                Databases
              </h4>
              <p className="text-gray-400 mt-4 font-mono">
                MySQL, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-xl font-bold text-gray-300 font-mono">
                Devops & Infra
              </h4>
              <p className="text-gray-400 mt-4 font-mono">
                Linux, Docker, RabbitMQ, AWS
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-xl font-bold text-gray-300 font-mono">
                Languages
              </h4>
              <p className="text-gray-400 mt-4 font-mono">
                Portuguese (Native)
              </p>
              <p className="text-gray-400 mt-4 font-mono">English (B2)</p>
              <p className="text-gray-400 mt-4 font-mono">Georgian (A1)</p>
            </div>
          </div>
        </section>

        {/* About me */}
        <section className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-20">
          <div className="w-64 h-64 md:w-3620 md:h-3620 bg-gray-700 rounded-full flex items-center justify-center text-xl border-4 border-blue-400 mb-8 md:mb-0">
            <Image
              src={aboutMePic}
              alt="Your Photo"
              width={256}
              height={256}
              className="rounded-full object-cover"
            />
          </div>
          <div className="text-right max-w-lg">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              About me
            </h3>
            <p className="text-lg text-gray-400 mt-6 font-mono">
              Hello, I am Matheus de Paulo Oliveira!
            </p>
            <p className="text-lg text-gray-400 mt-6 font-mono">
              I am a Brazilian backend developer based in São Paulo, Brazil.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition font-mono"
            >
              Read more
            </Link>
          </div>
        </section>

        <section id="certifications" className="mt-16 max-w-6xl w-full">
          <h3 className="text-3xl font-bold text-gray-300 font-mono">
            Certifications
          </h3>
          <div className="flex overflow-x-scroll space-x-8 mt-6 p-4">
            {/* Certificações */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[24rem] bg-gray-800 rounded-lg p-6 flex-shrink-0"
              >
                <h4 className="text-xl font-bold text-gray-300 font-mono">
                  Certification {index + 1}
                </h4>
                <p className="text-gray-400 mt-4 font-mono">
                  Details about the certification.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-20 mb-20">
          <div className="text-right max-w-lg mb-8 md:mb-0">
            <h3 className="text-3xl font-bold text-gray-300 font-mono">
              Contact me
            </h3>
            <p className="text-lg text-gray-400 mt-6 font-mono">
              I am interested in freelance opportunities. However, if you have
              other request or question, do not hesitate to contact me.
            </p>
          </div>
          <Link
            href="#contact"
            className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-lg hover:from-blue-600 hover:to-purple-600 transition font-mono"
          >
            Contact Me
          </Link>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-900 border-t border-gray-700 py-6 text-center relative z-10">
          <p className="text-gray-400 text-sm font-mono px-4">
            Copyright © {new Date().getFullYear()} Made by matheusdpo
          </p>
        </footer>
      </div>
    </main>
  );
}
