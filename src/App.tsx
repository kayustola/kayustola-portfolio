import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#050816] relative overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[160px] opacity-10 top-[-100px] left-[-100px] glow-float" />

        <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] opacity-10 bottom-[-150px] right-[-100px] glow-float" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-32">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>

      {/* FOOTER (MUST BE INSIDE ROOT DIV) */}
      <footer className="text-center py-12 mt-24 border-t border-white/10 bg-slate-900/40 backdrop-blur-md relative z-10">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Kayus Tola
        </p>

        <p className="text-xs mt-2 text-gray-500">
          Full Stack Developer • React • Django • TypeScript
        </p>

        <p className="text-xs mt-4 text-gray-600">
          Built and designed by me
        </p>
      </footer>

    </div>
  );
}

