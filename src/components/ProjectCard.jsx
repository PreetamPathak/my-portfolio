const ProjectCard = ({ project }) => {

  return (

    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      {/* image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      {/* content */}
      <div className="p-4">

        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-3">
          {project.description}
        </p>

        <span className="text-xs bg-gray-700 px-2 py-1 rounded">
          {project.tech}
        </span>

        {/* buttons */}
        <div className="flex gap-3 mt-4">

          <a
            href={project.live}
            target="_blank"
            className="bg-green-500 px-3 py-1 rounded text-sm hover:bg-green-600"
          >
            Live
          </a>

          <a
            href={project.github}
            target="_blank"
            className="bg-blue-500 px-3 py-1 rounded text-sm hover:bg-blue-600"
          >
            Code
          </a>

        </div>

      </div>

    </div>

  );

};

export default ProjectCard;