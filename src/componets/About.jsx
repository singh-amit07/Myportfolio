import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-8 md:px-16 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">About Me</h2>

      {/* Corrected About Text */}
   {/* Corrected About Text */}
<div className="max-w-[75%] mx-auto">
  <p className="text-gray-200 font-semibold leading-relaxed">
    I am <span className="text-indigo-400">Amit Singh</span>, an aspiring
    <span className="text-indigo-400"> Software Developer</span> with a strong
    focus on <span className="text-indigo-400">Java and Data Structures & Algorithms</span>.
    I regularly practice DSA problems on LeetCode using Java to strengthen my
    problem-solving and logical thinking skills.
    <br /><br />

    Along with that, I am a <span className="text-indigo-400">Web Developer</span>
    who builds modern, responsive, and user-friendly web applications using
    React, JavaScript, and Node.js.
    <br /><br />

    I also have working knowledge of Python and SQL databases, which helps me
    understand data handling and application workflows.
    <br /><br />

    My goal is to grow as a professional software developer by continuously
    learning new technologies and building real-world projects that solve
    practical problems.
  </p>
</div>



      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {/* Java / DSA */}
        <div className="bg-white/5 border border-indigo-500/20 rounded-2xl p-8 hover:bg-white/10 transition shadow-lg hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">
            Java & DSA
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Core Java</li>
            <li>• OOP Concepts</li>
            <li>• Data Structures</li>
            <li>• LeetCode Practice</li>
          </ul>
        </div>

        {/* Web Development */}
        <div className="bg-white/5 border border-indigo-500/20 rounded-2xl p-8 hover:bg-white/10 transition shadow-lg hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">
            Web Development
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• React JS</li>
            <li>• JavaScript (ES6+)</li>
            <li>• Node.js</li>
            <li>• HTML / CSS</li>
            <li>• Tailwind CSS</li>
          </ul>
        </div>

        {/* Database */}
        <div className="bg-white/5 border border-indigo-500/20 rounded-2xl p-8 hover:bg-white/10 transition shadow-lg hover:-translate-y-2">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">
            Database
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>• SQL</li>
            <li>• MySQL</li>
            <li>• PostgreSQL</li>
            <li>• MongoDB (Basics)</li>
          </ul>
        </div>

      </div>
    </motion.section>
  );
}
