export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-xl">
      
      <h1 className="text-2xl font-bold tracking-wide">
        KayusTola
      </h1>

      <nav className="flex gap-8 text-sm font-medium">
        <a href="#home" className="hover:text-blue-600 transition duration-200">Home</a>
        <a href="#about" className="hover:text-blue-600 transition duration-200">About</a>
        <a href="#projects" className="hover:text-blue-600 transition duration-200">Projects</a>
        <a href="#contact" className="hover:text-blue-600 transition duration-200">Contact</a>
      </nav>

    </header>
  );
}