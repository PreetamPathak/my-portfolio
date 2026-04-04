import projects from "../data/projectsData.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {

  return (

    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (

          <ProjectCard key={project.id} project={project} />

        ))}

      </div>

    </section>

  );

};

export default Projects;