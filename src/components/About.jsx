import React from "react"

import aboutImg from "../assets/images/hero1.png"

import resume from "../assets/doc/my_resume.pdf"



const About = () => {

  return (

    <section
      id="about"
      className="min-h-screen bg-black text-white relative overflow-hidden px-6 md:px-20 py-24"
    >


      {/* background glow */}

      <div className="absolute w-[450px] h-[450px] bg-purple-500 opacity-20 blur-3xl rounded-full top-20 right-10"></div>

      <div className="absolute w-[350px] h-[350px] bg-sky-500 opacity-20 blur-3xl rounded-full bottom-10 left-10"></div>



      {/* heading */}

      <div className="text-center mb-20 relative z-10">

        <p className="text-sky-400 tracking-widest text-sm mb-3">
          GET TO KNOW ME
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">

          About

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">
            {" "}Me
          </span>

        </h2>

      </div>



      {/* content */}

      <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">


        {/* IMAGE */}

        <div className="relative flex justify-center items-center">


          <div className="absolute w-80 h-80 bg-sky-500/20 blur-3xl rounded-full"></div>


          <div className="w-72 h-96 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl hover:scale-105 transition duration-500">

            <img
              src={aboutImg}
              alt="about"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

          </div>

        </div>



        {/* TEXT */}

        <div className="max-w-2xl">


          <h3 className="text-2xl md:text-3xl font-semibold mb-6">

            I'm
            <span className="text-sky-400"> Preetam Pathak</span>,
            a passionate
            <span className="text-purple-400"> Frontend Developer</span>

          </h3>



          <p className="text-gray-400 mb-4 leading-relaxed">

            I love creating
            <span className="text-white"> modern</span>,
            <span className="text-white"> responsive</span> and
            <span className="text-white"> user-friendly</span> websites.

            I focus on writing clean code and designing smooth UI
            that provides a great experience for users.

          </p>



          <p className="text-gray-400 mb-8 leading-relaxed">

            Currently pursuing
            <span className="text-white"> B.Sc. in Mathematics</span> and learning
            <span className="text-white"> Full Stack Development</span>.

            My goal is to become a professional developer and build impactful digital products.

          </p>



          {/* cards */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">


            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:bg-white/10 transition">

              <p className="text-sky-400 font-bold text-2xl">
                15+
              </p>

              <p className="text-gray-400 text-sm">
                Projects
              </p>

            </div>



            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:bg-white/10 transition">

              <p className="text-purple-400 font-bold text-2xl">
                React
              </p>

              <p className="text-gray-400 text-sm">
                Main Skill
              </p>

            </div>



            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:bg-white/10 transition">

              <p className="text-sky-400 font-bold text-2xl">
                UI
              </p>

              <p className="text-gray-400 text-sm">
                Design Focus
              </p>

            </div>



            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-lg hover:bg-white/10 transition">

              <p className="text-purple-400 font-bold text-2xl">
                2024
              </p>

              <p className="text-gray-400 text-sm">
                Started
              </p>

            </div>


          </div>



          {/* DOWNLOAD CV BUTTON */}

          <a
            href={resume}
            download="Preetam_Pathak_CV.pdf"
            className="inline-block mt-8 bg-gradient-to-r from-sky-500 to-purple-500 px-8 py-3 rounded-full hover:scale-105 transition shadow-lg shadow-purple-500/20"
          >

            Download CV

          </a>



        </div>


      </div>


    </section>

  )
}

export default About