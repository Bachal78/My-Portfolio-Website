// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className=" shadow-md fixed top-0 left-0 w-full z-50  bg-[#043873] transform hover:scale-90 transition duration-300 rounded-md">
      <div className="container mx-auto text-white flex justify-between items-center py-4 px-6 transform hover:scale-105 transition duration-1000 hover:bg-[#a0f7e4ad] hover:text-black hover:rounded-full  ">
        <h1 className="text-2xl font-bold ">Portfolio</h1>
        <ul className="flex space-x-6 transform hover:scale-90 transition duration-1000 text-[20px]">
          <li><a href="#about" className="">About Me</a></li>
          <li><a href="#projects" className=" ">Projects</a></li>
          <li><a href="#services" className="">Services</a></li>
          <li><a href="#contact" className="">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
