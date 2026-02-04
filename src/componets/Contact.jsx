import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 py-24">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-4"
      >
        Contact <span className="text-indigo-400">Me</span>
      </motion.h2>

      <p className="text-gray-300 mb-14 max-w-2xl">
        I’m a Web Developer and Java DSA learner open to opportunities and
        collaborations. Let’s build something great together.
      </p>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >

          <ContactItem
            icon={<FaEnvelope />}
            label="Email"
            value="amitksingh9151@gmail.com"
            link="amitksingh9151@gmail.com"
          />

          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            value="https://github.com/singh-amit07"
            link="https://github.com/singh-amit07"
          />

          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            value="https://www.linkedin.com/in/amit-singh-8b767a296"
            link="https://www.linkedin.com/in/amit-singh-8b767a296/"
          />

        </motion.div>


        {/* RIGHT — Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const name = data.get("name");
            const email = data.get("email");
            const msg = data.get("message");

            window.location.href =
              `mailto:yourmail@gmail.com?subject=Contact from ${name}&body=${msg} (${email})`;
          }}
          className="
            bg-white/5 backdrop-blur
            border border-indigo-500/20
            rounded-2xl p-8
            shadow-xl shadow-indigo-900/20
            space-y-5
          "
        >

          <Input name="name" placeholder="Your Name" />
          <Input name="email" placeholder="Your Email" type="email" />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-gray-200 focus:border-indigo-400 outline-none h-32"
          />

          <button className="
            w-full
            bg-indigo-500 hover:bg-indigo-400
            py-3 rounded-xl font-semibold
            shadow-lg shadow-indigo-600/40
            hover:-translate-y-1 hover:scale-[1.02]
            transition
          ">
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}


/* ---------- Small Components ---------- */

function ContactItem({ icon, label, value, link }) {
  return (
    <a href={link} target="_blank" className="block group">
      <div className="flex items-start gap-4">
        <div className="text-indigo-400 text-xl mt-1">{icon}</div>
        <div>
          <p className="font-semibold">{label}</p>
          <p className="text-gray-300 group-hover:text-indigo-300 transition">
            {value}
          </p>
        </div>
      </div>
    </a>
  );
}

function Input({ name, placeholder, type = "text" }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="
        w-full
        bg-black/30
        border border-white/10
        rounded-lg px-4 py-3
        text-gray-200
        focus:border-indigo-400
        outline-none
      "
    />
  );
}
