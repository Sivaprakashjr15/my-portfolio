import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Include the CSS file with the styles
import InteractiveBackground from './InteractiveBackground'; // Import the new component

// Components
const Navbar = () => (
  <nav className="flex justify-between p-5 bg-gray-800 text-white">
    <div className="text-2xl font-bold">SivaprakasamC.</div>
    <div className="flex space-x-4">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>
  </nav>
);

const Header = () => (
  <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 sm:px-8">
    <h1 className="text-3xl sm:text-5xl font-bold mb-4">Hi, I'm SivaprakasamC.</h1>
    <p className="text-lg sm:text-xl mb-6">Web Developer | React.js | Node.js | Bridging Front-End and Back-End</p>
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      View My Work
    </a>
  </header>
);

const About = () => (
  <section id="about" className="p-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p>
      I'm a passionate web developer specializing in building scalable and responsive
      applications using React.js, Node.js, and Solidity. Currently pursuing my B.Tech
      at SKCT (class of '24), I thrive on creating efficient and user-friendly
      solutions to complex problems.
    </p>
  </section>
);

const Skills = () => (
  <section id="skills" className="p-10 bg-gray-200">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {['React.js', 'Node.js', 'JavaScript', 'Python'].map(skill => (
        <div key={skill} className="p-4 bg-white shadow-md rounded-md text-center">
          {skill}
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="p-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[{
        title: 'Project 1',
        description: 'A description of your project showcasing skills in React.js and Node.js.',
        link: '#',
      },
      {
        title: 'Project 2',
        description: 'Another amazing project description.',
        link: '#',
      }].map(({ title, description, link }) => (
        <div key={title} className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
          <a href={link} className="text-blue-500 hover:underline mt-2 block">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="p-10 bg-gray-800 text-white">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <form className="grid grid-cols-1 gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded-md border border-gray-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 rounded-md border border-gray-400"
      />
      <textarea
        placeholder="Your Message"
        className="p-3 rounded-md border border-gray-400"
        rows="5"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="p-4 bg-gray-900 text-gray-400 text-center">
    © 2024 Sjr15. All rights reserved.
  </footer>
);

const App = () => (
  <div>
    <InteractiveBackground /> {/* Add the interactive background */}
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
