export default function Navbar() {
  return (
<nav className="h-20 flex items-center justify-between px-8 bg-white/5 sticky top-0 z-50 backdrop-blur">

      <h1 className="font-bold text-lg">Amit Singh</h1>

      <div className="flex gap-8 text-gray-300 font-medium gap-8">

        <a href="#home"
           className="transition-colors duration-300 hover:text-indigo-400">
          Home
        </a>

        <a href="#about"
           className="transition-colors duration-300 hover:text-indigo-400">
          About
        </a>

        <a href="#skills"
           className="transition-colors duration-300 hover:text-indigo-400">
          Skills
        </a>

        <a href="#projects"
           className="transition-colors duration-300 hover:text-indigo-400">
          Projects
        </a>

        <a href="#contact"
           className="transition-colors duration-300 hover:text-indigo-400">
          Contact
        </a>

      </div>

    </nav>
  );
}
