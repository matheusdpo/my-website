"use client";

import Link from "next/link";
import { useState } from "react"; 

export default function Header() {
  const [language, setLanguage] = useState("EN"); 

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center p-6 max-w-6xl border-b border-gray-700">
      <h1 className="text-lg font-bold text-gray-300 font-mono mb-4 md:mb-0">
        <Link href="/">Matheus de Paulo Oliveira</Link>
      </h1>
      <nav className="flex flex-wrap gap-4 items-center">
        <Link
          href="/"
          className="text-md text-gray-400 hover:text-blue-400 transition font-mono"
        >
          #init
        </Link>
        <Link
          href="/#projects"
          className="text-md text-gray-400 hover:text-purple-400 transition font-mono"
        >
          #projects
        </Link>
        <Link
          href="/#skills"
          className="text-md text-gray-400 hover:text-green-400 transition font-mono"
        >
          #skills
        </Link>
        <Link
          href="/#about-me"
          className="text-md text-gray-400 hover:text-pink-400 transition font-mono"
        >
          #about_me
        </Link>
        <Link
          href="/#certifications"
          className="text-md text-gray-400 hover:text-indigo-400 transition font-mono"
        >
          #certifications
        </Link>
        <Link
          href="/#contact"
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
          </div>
        </div>
      </nav>
    </header>
  );
}