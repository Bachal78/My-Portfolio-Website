// components/Services.tsx
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: "Web Development", description: "Building responsive and functional websites." },
    { title: "UI/UX Design", description: "Creating user-friendly interfaces." },
    //{ title: "SEO Optimization", description: "Improving website performance." },
  ];

  return (
    <div id="services" className="container mx-auto py-16 px-6 transform hover:scale-105 transition duration-500">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transform hover:scale-105 transition duration-300">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-pink-50 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-1000">
            <h3 className="text-xl font-bold mb-2 text-gray-700">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
