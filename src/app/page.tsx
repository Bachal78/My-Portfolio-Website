// pages/index.tsx
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Services from '@/app/components/Services';
import Contact from '@/app/components/Contact';

const Home: React.FC = () => {
  return (
    <>
    <div className=' bg-slate-300'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      </div>
    </>
  );
};

export default Home;
