import { motion } from "framer-motion";

export default function Internship() {

  const CERT_LINK = "/certificates/internship.pdf"; // ← change only this if file name changes

  return (
    <section className="px-8 md:px-16 py-28 text-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          max-w-4xl mx-auto
          bg-gradient-to-b from-indigo-600/10 to-transparent
          border border-indigo-500/20
          rounded-3xl
          p-12
          backdrop-blur
        "
      >

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Internship <span className="text-indigo-400">Certificate</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          Successfully completed Java Developer and Full Stack Development
          internship with hands-on project experience and DSA problem solving.
        </p>

        {/* Button */}
        <a href={CERT_LINK} target="_blank">
          <button className="
            bg-indigo-500 hover:bg-indigo-400
            text-white font-semibold
            px-8 py-4 rounded-xl
            shadow-lg shadow-indigo-600/40
            hover:-translate-y-1 hover:scale-105
            transition
          ">
            View Internship Certificate
          </button>
        </a>

      </motion.div>
    </section>
  );
}
