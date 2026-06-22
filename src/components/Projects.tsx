export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 bg-gray-50 text-center">
      
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Project 1 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-400 transition-all duration-500">
          <h3 className="text-2xl font-bold text-cyan-300">
            Voice in Silence
          </h3>
          <p className="text-gray-600 mt-3">
            A full-stack blogging platform built with Django backend and modern UI design.
          </p>
          <a href="https://kayustola.github.io/voice-in-silence-frontend/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 hover:border-blue-400 transition-all duration-500">
         <h3 className="text-xl font-semibold text-gray-900">
            Calculator App
          </h3>
          <p className="text-gray-600 mt-3">
            A simple JavaScript calculator built to practice DOM manipulation.
          </p>
      <a
  href={`${import.meta.env.BASE_URL}cal.html`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 mt-4 inline-block"
>
  View Project
</a>
        </div>

      </div>
    </section>
  );
}
