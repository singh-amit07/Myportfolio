import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 py-20">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold mb-12"
      >
        My <span className="text-indigo-400">Projects</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <ProjectCard
          delay={0}
          title="Farmer E-Commerce Platform"
          desc="A MERN stack web app where farmers can list and sell products directly with cart and admin features."
          skills={["React", "Node.js", "MongoDB", "Express"]}
          live="https://organic-farm-gtes.vercel.app/"
          github="https://github.com/singh-amit07/Organic-Farm"
        />

        <ProjectCard
          delay={0.15}
          title="Virtual Interview Platform"
          desc="Mock interview platform with interactive questions and scoring flow."
          skills={["React", "JavaScript", "Neon", "UI"]}
          live="https://virtual-ai-interview.vercel.app/"
          github="https://github.com/singh-amit07/virtual-ai-interview"
        />

        <ProjectCard
          delay={0.3}
          title="My Portfolio"
          desc="Animated developer portfolio with skills, resume and projects."
          skills={["React", "Tailwind", "Motion"]}
          live="#"
          github="#"
        />

      </div>
    </section>
  );
}


/* ---------- Animated Project Card ---------- */

function ProjectCard({ title, desc, skills, live, github, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="
        bg-white/5 backdrop-blur
        border border-indigo-500/20
        rounded-2xl p-7
        shadow-xl shadow-indigo-900/20
        hover:bg-white/10 hover:-translate-y-2
        transition duration-300
        flex flex-col
      "
    >

      {/* Title */}
      <h3 className="text-xl font-semibold text-indigo-400 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">
        {desc}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((s, i) => (
          <span
            key={i}
            className="text-xs bg-indigo-500/10 border border-indigo-400/20 px-3 py-1 rounded-lg text-indigo-300"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">

        <a href={live} target="_blank">
          <button className="
            bg-indigo-600 hover:bg-indigo-500
            px-4 py-2 rounded-lg text-sm font-medium
            shadow-md shadow-indigo-600/40
            hover:-translate-y-1 hover:scale-105
            transition
          ">
            Live
          </button>
        </a>

        <a href={github} target="_blank">
          <button className="
            border border-white/30
            px-4 py-2 rounded-lg text-sm font-medium
            hover:bg-white/10
            hover:-translate-y-1 hover:scale-105
            transition
          ">
            GitHub
          </button>
        </a>

      </div>

    </motion.div>
  );
}
