import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub
} from "react-icons/fa";

import {
  SiJavascript, SiExpress,
  SiMongodb, SiMysql, SiPostgresql,
  SiPostman, SiIntellijidea
} from "react-icons/si";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="px-8 md:px-16 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-extrabold mb-12">
  My <span className="text-indigo-400">Skills</span>
</h2>


      {/* 2 × 2 GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Full Stack */}
        <SkillBox
          title="Full Stack Developer"
          skills={[
            [FaReact, "React"],
            [SiJavascript, "JavaScript"],
            [FaNodeJs, "Node.js"],
            [SiExpress, "Express"],
          ]}
        />

        {/* Java Developer */}
        <SkillBox
          title="Java Developer"
          skills={[
            [FaJava, "Core Java"],
            [FaJava, "OOP"],
            [FaJava, "DSA"],
            [FaJava, "LeetCode"],
          ]}
        />

        {/* Database */}
        <SkillBox
          title="Database"
          skills={[
            [SiMysql, "MySQL"],
            [SiPostgresql, "PostgreSQL"],
            [SiMongodb, "MongoDB"],
          ]}
        />

        {/* Tools */}
      <SkillBox
  title="Tools"
  skills={[
    [FaGitAlt, "Git"],
    [FaGithub, "GitHub"],
    [SiPostman, "Postman"],
    [SiIntellijidea, "IntelliJ"],
  ]}
/>


      </div>
    </motion.section>
  );
}


/* ---------- Skill Box ---------- */

function SkillBox({ title, skills }) {
  return (
    <div className="
      bg-white/5 backdrop-blur
      border border-indigo-500/20
      rounded-2xl p-8
      shadow-xl shadow-indigo-900/20
      hover:bg-white/10
      hover:-translate-y-2
      transition duration-300
    ">
      <h3 className="text-xl font-semibold text-indigo-400 mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {skills.map(([Icon, name], i) => (
          <div
            key={i}
            className="
              flex items-center gap-3
              bg-black/30
              border border-white/10
              rounded-lg px-4 py-3
              hover:border-indigo-400/40
              transition
            "
          >
            <Icon className="text-indigo-400 text-lg" />
            <span className="text-gray-200">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
