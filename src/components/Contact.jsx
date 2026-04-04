import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("Sending...");

    try {

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx4t8fXW6gJaNqJoO-X2loypUeiCY0bTKACAHi7AUU_rpz6TnSSE4RxVk7yVRWWi2kh/exec",
        {
          method: "POST",
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {

        setStatus("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          message: ""
        });

      } else {

        setStatus("Error sending message ❌");

      }

    } catch (error) {

      setStatus("Server error ❌");

    }

  };


  return (

    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white py-20 px-6 md:px-16"
    >

      <h2 className="text-4xl font-bold text-center mb-4">
        Contact Me
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        Want to work together? Feel free to contact me 🚀
      </p>


      <div className="grid md:grid-cols-2 gap-10">


        {/* LEFT */}
        <div className="space-y-6">


          <a
            href="mailto:pretampathak9511@gmail.com"
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >

            <FaEnvelope className="text-2xl text-sky-400"/>

            <div>

              <h3 className="font-semibold">
                Email
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                pretampathak9511@gmail.com
              </p>

            </div>

          </a>


          <a
            href="tel:+919511447402"
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >

            <FaPhone className="text-2xl text-sky-400"/>

            <div>

              <h3 className="font-semibold">
                Phone
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                +91 9511447402
              </p>

            </div>

          </a>



          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">

            <h3 className="font-semibold mb-4">
              Social Media
            </h3>

            <div className="flex gap-6 text-2xl">


              <a href="https://github.com/" target="_blank">
                <FaGithub className="hover:text-sky-400 hover:scale-110 transition"/>
              </a>


              <a href="https://linkedin.com/" target="_blank">
                <FaLinkedin className="hover:text-sky-400 hover:scale-110 transition"/>
              </a>


              <a href="https://instagram.com/" target="_blank">
                <FaInstagram className="hover:text-sky-400 hover:scale-110 transition"/>
              </a>


              <a href="https://wa.me/919511447402" target="_blank">
                <FaWhatsapp className="hover:text-green-400 hover:scale-110 transition"/>
              </a>

            </div>

          </div>

        </div>



        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-transparent outline-none"
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-transparent outline-none"
          />


          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:border-gray-600 bg-transparent outline-none"
          />


          <button
            type="submit"
            className="w-full bg-sky-400 text-white py-3 rounded-lg hover:bg-sky-500 transition transform hover:scale-105"
          >
            Send Message
          </button>


          <p className="text-center text-sm">
            {status}
          </p>

        </form>


      </div>

    </section>

  );

}

export default Contact;