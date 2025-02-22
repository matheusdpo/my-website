import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Aside() {
  return (
    <aside className="hidden md:flex w-20 flex-col items-center py-8 bg-gray-800 fixed left-0 top-0 h-full z-10">
      <Link
        href="https://linkedin.com/in/matheus-de-paulo-oliveira"
        target="_blank"
        className="mb-6 text-gray-400 hover:text-blue-400 transition"
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
        className="mt-6 text-gray-400 hover:text-pink-400 transition"
      >
        <FaInstagram size={28} />
      </Link>
      <Link
        href="http://www.x.com/_matheusdpo"
        target="_blank"
        className="mt-6 text-gray-400 hover:text-blue-400 transition"
      >
        <FaXTwitter size={28} />
      </Link>
      <Link
        href="discord://-/users/285224406077407232"
        target="_blank"
        className="mt-6 text-gray-400 hover:text-indigo-400 transition"
      >
        <FaDiscord size={28} />
      </Link>
    </aside>
  );
}