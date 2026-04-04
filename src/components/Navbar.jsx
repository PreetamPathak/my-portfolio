import { useState } from "react"
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <nav className="bg-slate-900 dark:bg-black text-white px-6 md:px-16 py-4 sticky top-0 z-50 shadow-lg">

      <div className="flex justify-between items-center">

        <h1 className="text-xl md:text-2xl font-bold">
          Preetam <span className="text-sky-400">Webworks</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">

          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="hidden md:flex items-center gap-4">

          <ThemeToggle/>

          <button
            onClick={scrollToContact}
            className="bg-sky-400 text-white px-5 py-2 rounded-full hover:bg-sky-500 transition"
          >
            Hire Me
          </button>

        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

      {menuOpen && (

        <ul className="flex flex-col gap-4 mt-4 md:hidden bg-slate-800 dark:bg-gray-900 p-4 rounded-lg">

          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>

          <ThemeToggle/>

          <button
            onClick={scrollToContact}
            className="bg-sky-400 py-2 rounded-full"
          >
            Hire Me
          </button>

        </ul>

      )}

    </nav>
  )
}

export default Navbar;