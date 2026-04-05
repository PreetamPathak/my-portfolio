import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // disappears after 2 sec
  };

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
      >
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>

      {showToast && (
        <div className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade">
          ⚠️ Sorry! This project is not hosted.
        </div>
      )}
    </div>
  );
};

export default ProjectCard;