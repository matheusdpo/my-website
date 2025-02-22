export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 border-t border-gray-700 py-6 text-center relative z-10">
        <p className="text-gray-400 text-sm font-mono px-4">
          Copyright © {new Date().getFullYear()} Made by matheusdpo
        </p>
        <p className="text-gray-400 text-sm font-mono px-4">
          Version SNAPSHOT-1.0.0
        </p>
      </footer>
    );
  }