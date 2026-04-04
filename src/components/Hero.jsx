import React from "react"
import Navbar from "./Navbar"
import heroImg from "../assets/images/hero1.png"

const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Navbar */}
      <Navbar />


      {/* background glow effects */}

      <div className="absolute w-[500px] h-[500px] bg-sky-500 opacity-20 blur-3xl rounded-full top-20 left-10"></div>

      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="absolute w-[300px] h-[300px] bg-orange-500 opacity-20 blur-3xl rounded-full top-40 right-40"></div>



      {/* main layout */}

      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-20 pb-32">


        {/* LEFT SIDE */}

        <div className="max-w-xl z-10">

          <p className="text-sky-400 tracking-widest text-sm mb-3">
            FRONTEND DEVELOPER
          </p>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

            Hi, I'm
            <span className="text-sky-400"> Preetam</span>

            <br />

            I build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
              {" "}beautiful interfaces
            </span>

          </h1>


          <p className="text-gray-400 mb-8">

            I create fast, modern and responsive websites using
            React.js and clean UI design. Passionate about building
            smooth user experiences.

          </p>



          {/* buttons */}

          <div className="flex gap-4 flex-wrap">

            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-sky-500 to-purple-500 px-7 py-3 rounded-full hover:scale-105 transition shadow-lg shadow-sky-500/20"
            >
              View Projects
            </button>


            <button
              onClick={() => scrollToSection("contact")}
              className="border border-sky-400 px-7 py-3 rounded-full hover:bg-sky-400 hover:text-black transition"
            >
              Contact Me
            </button>

          </div>

        </div>




        {/* RIGHT SIDE IMAGE DESIGN */}

        <div className="relative mt-16 md:mt-0 flex justify-center items-center">


          {/* back glow */}
          <div className="absolute w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>



          {/* glass image card */}

          <div className="relative z-10 w-90 h-110 rounded-3xl overflow-hidden 
          border border-white/10 backdrop-blur-xl bg-white/5 
          shadow-2xl hover:scale-105 transition duration-500">

            <img
              src={heroImg}
              alt="hero"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

          </div>



          {/* extra glow effects */}

          <div className="absolute w-40 h-40 bg-sky-500 blur-3xl opacity-30 rounded-full -top-10 -right-10"></div>

          <div className="absolute w-32 h-32 bg-purple-500 blur-3xl opacity-30 rounded-full -bottom-8 -left-8"></div>


        </div>

      </div>




      {/* scroll down indicator */}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce">

        ↓ scroll

      </div>


    </div>

  )
}

export default Hero