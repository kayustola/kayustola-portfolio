import { motion } from "framer-motion";
export default function Hero() {
  return (
 
    <motion.section
  className="text-center py-28"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>

  <p className="text-sm tracking-widest text-gray-500 uppercase">
    Full Stack Developer
  </p>

  <h1 className="text-7xl font-extrabold tracking-tight mt-6 leading-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">
    Building Modern <span className="text-blue-600">Web Experiences</span>
  </h1>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
    I design and build scalable web applications using React, TypeScript,
    and Django. Focused on performance, clean UI, and real-world impact.
  </p>

  <div className="mt-10 flex justify-center gap-4">

  <a
    href="#projects"
    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
  >
    Contact Me
  </a>

</div>
</motion.section>
  );
}