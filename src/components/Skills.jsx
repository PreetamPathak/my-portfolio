import skills from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center 
              bg-white/5 backdrop-blur-md 
              p-6 rounded-2xl 
              hover:scale-110 transition"
            >

              <Icon size={40} />

              <p className="mt-2">
                {skill.name}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Skills;