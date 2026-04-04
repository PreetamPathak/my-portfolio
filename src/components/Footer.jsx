import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-black text-white py-10 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


        {/* BRAND */}
        <div>

          <h2 className="text-2xl font-bold text-sky-400">
            Preetam Webworks
          </h2>

          <p className="text-gray-400 mt-3">
            Building modern and responsive websites using
            React.js, JavaScript and creative UI design.
          </p>

        </div>



        {/* QUICK LINKS */}
        <div>

          <h3 className="font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>
              <a href="#home" className="hover:text-sky-400">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-sky-400">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-sky-400">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-sky-400">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-sky-400">
                Contact
              </a>
            </li>

          </ul>

        </div>



        {/* SOCIAL */}
        <div>

          <h3 className="font-semibold mb-3">
            Connect
          </h3>

          <div className="flex gap-5 text-xl">

            <a href="https://github.com/" target="_blank">
              <FaGithub className="hover:text-sky-400 transition"/>
            </a>

            <a href="https://linkedin.com/" target="_blank">
              <FaLinkedin className="hover:text-sky-400 transition"/>
            </a>

            <a href="https://instagram.com/" target="_blank">
              <FaInstagram className="hover:text-sky-400 transition"/>
            </a>

            <a href="mailto:pretampathak9511@gmail.com">
              <FaEnvelope className="hover:text-sky-400 transition"/>
            </a>

            <a href="https://wa.me/919511447402" target="_blank">
              <FaWhatsapp className="hover:text-green-400 transition"/>
            </a>

          </div>

        </div>

      </div>



      {/* bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-5">

        © {new Date().getFullYear()} Preetam Webworks.
        All rights reserved.

      </div>

    </footer>

  );

}

export default Footer;