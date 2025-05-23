import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdWeb, MdCode, MdRocketLaunch } from 'react-icons/md';

const Home = () => {
  return (
    <div className="max-h-full w-full flex flex-col justify-start items-center p-6 " style={{ color: '#1a1a1a' }}>
      {/* Greeting and Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hey, I'm <span className="text-yellow-400">Harsh Lakhanpal</span>
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-medium mb-6 flex items-center space-x-2">
        <MdWeb className="text-yellow-400" /> 
        <span>Frontend Developer & WordPress Explorer</span>
      </h2>

      {/* Bio */}
      <p className="text-lg md:text-xl max-w-3xl mb-6 leading-relaxed">
        I'm a passionate frontend web developer who loves crafting beautiful and functional digital experiences.
        Whether it's through custom-coded React interfaces or flexible WordPress themes, I enjoy bringing creative
        ideas to life. My journey spans static landing pages to interactive, 3D-rich web environments —
        and I'm just getting started.
      </p>

      {/* Motto */}
      <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-lg font-medium text-gray-700 mb-8">
        "Design with intent. Code with clarity. Build with purpose."
      </blockquote>

      {/* Skills Section */}
      <div className="mb-8 w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">🔧 Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">HTML</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">CSS</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">JavaScript</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">React.js</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">Tailwind CSS</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">Bootstrap</span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-center">WordPress</span>
        </div>
      </div>

      {/* Goals Section */}
      <div className="mb-10 w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">🚀 What I Enjoy</h3>
        <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
          <li>Building responsive, modern frontend experiences with clean code</li>
          <li>Custom theme development and dynamic sites with WordPress</li>
          <li>Exploring everything from static websites to immersive 3D web design</li>
          <li>Staying updated with the latest tools and frontend trends</li>
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href="#projects"
        className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition duration-300 text-lg"
      >
        Explore My Projects <FaArrowRight className="ml-2" />
      </a>
    </div>
  );
};

export default Home;
