// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className=" py-16 px-6 bg-slate-200 transform hover:scale-90 transition duration-300">
      <div className='transform hover:scale-105 transition duration-500'>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 hover:text-blue-700 transform hover:scale-90 transition duration-300">About Me</h2>
      <p className="text-center text-[24px] bg-gray-500 leading-relaxed text-white rounded-lg hover:text-blue-300 hover:bg-black transform hover:scale-90 transition duration-300">
        I am a passionate web developer specializing in responsive designs and interactive interfaces. My goal is to
        create seamless and visually stunning websites that deliver exceptional user experiences.
      </p>
      </div>
    </div>
  );
};

export default About;
