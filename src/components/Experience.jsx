import experience from "../data/experienceData.js";

const Experience = () => {
  return (

    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >

      {/* heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      {/* timeline container */}
      <div className="relative max-w-4xl mx-auto">

        {/* vertical line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-blue-500 transform -translate-x-1/2"></div>

        <div className="space-y-12">

          {experience.map((item, index) => (

            <div
              key={item.id}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* circle */}
              <div className="absolute left-1/2 w-5 h-5 bg-green-400 border-4 border-black rounded-full transform -translate-x-1/2"></div>

              {/* card */}
              <div className="w-full md:w-[45%] bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition duration-300">

                <h3 className="text-xl font-semibold text-green-400">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.company} • {item.year}
                </p>

                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default Experience;