import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InteractiveBackground from './InteractiveBackground';

// Navbar Component
const Navbar = () => (
  <nav className="flex justify-between p-5 bg-gray-800 text-white">
    <div className="text-2xl font-bold">Hola Amigos</div>
    <div className="flex space-x-4">
      {['About', 'Skills', 'Projects'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-blue-400"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

// Header Component
const Header = () => (
  <header className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 sm:px-8">
    <h1 className="text-3xl sm:text-5xl font-bold mb-4">Hi, I'm SivaprakasamC.</h1>
    <p className="text-lg sm:text-xl mb-6">
      Web Developer | React.js | Node.js | Bridging Front-End and Back-End
    </p>
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      View My Work
    </a>
  </header>
);

// About Component
const About = () => (
  <section id="about" className="p-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p>
      I'm a passionate developer who's eager to leverage strong technical skills and a passion for innovation to contribute to impactful projects. 
      Proficient in HTML5, CSS3, Python, Java, Data Analytics, PowerBI, JavaScript, React.js, Node.js, and Solidity. Committed to delivering high-quality solutions through effective problem-solving, strong communication, and collaborative teamwork. 
      Seeking a challenging role in a dynamic environment to further develop my skills and make a meaningful impact.
    </p>
  </section>
);

// Skills Component
const Skills = ({ skills }) => (
  <section id="skills" className="p-10 bg-gray-200">
    <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div key={skill} className="p-4 bg-white shadow-md rounded-md text-center">
          {skill}
        </div>
      ))}
    </div>
  </section>
);

// Projects Component
const Projects = ({ projects }) => (
  <section id="projects" className="p-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map(({ title, description, link }) => (
        <div key={title} className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
          <a
            href={link}
            className="text-blue-500 hover:underline mt-2 block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="p-4 bg-gray-900 text-gray-400 text-center">
    © 2024 Sjr15. All rights reserved.
  </footer>
);

// App Component
const App = () => {
  const skills = ['React.js', 'Node.js', 'JavaScript', 'Python'];
  const projects = [
    {
      title: 'Project 1',
      description:
        'A description of your project showcasing skills in React.js and Node.js.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Another amazing project description.',
      link: '#',
    },
  ];

  return (
    <div>
      <InteractiveBackground />
      <Navbar />
      <Header />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
