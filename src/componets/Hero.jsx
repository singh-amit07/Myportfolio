import { motion } from "framer-motion";
import amitpo from "../assets/amitpo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center px-8 md:px-16 pt-6"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-indigo-400 mb-3 tracking-wide">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-400">Amit Singh</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
           Aspiring Software Developer focused on Java, DSA, and Full Stack Web Development.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-8">

            <a href="#projects">
              <button className="
                bg-indigo-600 hover:bg-indigo-500
                px-7 py-3 rounded-xl font-medium
                transition-all duration-300
                shadow-lg shadow-indigo-600/40
                hover:shadow-indigo-500/70
                hover:-translate-y-1 hover:scale-105
              ">
                View Projects
              </button>
            </a>

            <a href="/resume.pdf" download>
              <button className="
                border border-white/30
                px-7 py-3 rounded-xl font-medium
                transition-all duration-300
                hover:bg-white/10
                shadow-lg shadow-black/30
                hover:-translate-y-1 hover:scale-105
              ">
                Download Resume
              </button>
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end items-center md:mr-16"
        >
          <div className="relative">

            {/* Glow Aura */}
            <div className="absolute -inset-6 bg-indigo-600/20 blur-3xl rounded-3xl"></div>

            <img
              src={amitpo}
              alt="Amit Singh"
              className="
                relative
                w-[320px] md:w-[360px]
                h-[440px] md:h-[500px]
                object-cover
                rounded-3xl
                border border-indigo-500/30
                shadow-2xl shadow-indigo-900/50
                brightness-105 contrast-105
                transition duration-500
                hover:scale-105
              "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
