// components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { title: "Portfolio Website", description: "A personal portfolio built with Next.js." },
    { title: "E-commerce App", description: "An e-commerce app with React and Tailwind CSS." },
    { title: "Blog Website", description: "A minimal blog layout with responsive design." },
  ];

  return (
    <div id="projects" className="bg-gray-50 py-16 transform hover:scale-90 transition duration-500 hover:bg-green-200">
      <div className="container mx-auto px-6 transform hover:scale-125 transition duration-500">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 hover:text-blue-700 transform hover:scale-125 transition duration-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 hover:bg-yellow-100">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md transform hover:scale-90 transition duration-1000">
              <h3 className="text-xl font-bold mb-2 hover:text-wheat transform hover:scale-125 transition duration-300">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
