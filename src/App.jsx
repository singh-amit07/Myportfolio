import About from "./componets/About";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import Internship from "./componets/Internship";
import Navbar from "./componets/Navbar";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#0b0f2a] via-[#0e1335] to-[#140a2e] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
       <Internship/>
      <Contact />
      <Footer/>
     
    </div>
  );
}
