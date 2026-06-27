
export default function Contact() {
  return (
    <div className="bg-slate-900/80 border border-cyan-500/20 rounded-3xl p-10 shadow-2xl">
    <section
  id="contact"
  className="px-6 py-24 text-center bg-slate-900/50 rounded-3xl backdrop-blur-md"
>
      
      <h2 className="text-4xl font-bold text-cyan-200 mb-6 drop-shadow-lg">
  Contact Me
</h2>
      <p className="text-gray-100 text-lg mb-8">
        Want to collaborate, hire me, or just say hello?
        Feel free to reach out.
      </p>

<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">

  <a
    href="https://wa.me/2349135383367"
    target="_blank"
    className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition-all"
  >
    <h3 className="text-xl font-bold text-cyan-300">📱 WhatsApp</h3>
    <p className="text-gray-300 mt-2">Chat with me directly</p>
  </a>

  <a
    href="mailto:kayustola@yahoo.com"
    className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition-all"
  >
    <h3 className="text-xl font-bold text-cyan-300">📧 Email</h3>
    <p className="text-gray-300 mt-2">Send a professional inquiry</p>
  </a>

  <a
    href="https://github.com/Kayustola"
    target="_blank"
    className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition-all"
  >
    <h3 className="text-xl font-bold text-cyan-300">💻 GitHub</h3>
    <p className="text-gray-300 mt-2">View my projects</p>
  </a>

  <a
  href="https://www.facebook.com/voiceinsilence01/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-800 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 transition-all"
>
  <h3 className="text-xl font-bold text-cyan-300">📘 Facebook</h3>
  <p className="text-gray-300 mt-2">Connect with me</p>
</a>
</div>


      <form className="max-w-xl mx-auto flex flex-col gap-4">
        
        <input
          type="text"
          placeholder="Your Name"
         className="w-full p-4 rounded-xl bg-slate-800 border border-cyan-500/20 text-white placeholder-gray-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-slate-800 border border-cyan-500/20 text-white placeholder-gray-400"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-4 rounded-xl bg-slate-800 border border-cyan-500/20 text-white placeholder-gray-400"
        />

        <button
          type="submit"
          className="px-8 py-4 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
        >
          Send Message
        </button>

      </form>

    </section>
    </div>
  );
}
