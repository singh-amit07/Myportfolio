import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/20 mt-20 py-6 px-8 md:px-16 text-sm text-gray-400 bg-black">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} Amit Singh
        </p>

        {/* Middle Links */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-indigo-400">Home</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>

        {/* Right Icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/singh-amit07" target="_blank" className="hover:text-indigo-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amit-singh-8b767a296/" target="_blank" className="hover:text-indigo-400">
            <FaLinkedin />
          </a>
        </div>

      </div>

    </footer>
  );
}
