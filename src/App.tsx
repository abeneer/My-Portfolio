import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DockGlass from "./components/DockGlass";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <main id="main" className="pt-28">
        <Hero />
        <DockGlass />
        <Skills />  
        <Education />
        <Projects />
        <Contact />
       

        <footer className="px-4 py-10 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Your Name — Built with React, Vite & Tailwind.
        </footer>
      </main>
    </>
  );
} 

