import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactComponent as LaptopMan } from './assets/laptop-man.svg'; // Importing the SVG as a React component
import InteractiveBackground from './InteractiveBackground';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

// Navbar Component
const Navbar = () => (
  <nav className="flex justify-between p-5 bg-gray-800 text-white">
    <div className="text-2xl font-bold"><span className="glow-text">Hola Amigos'</span></div>
    <div className="flex space-x-4">
      {['About', 'Education', 'Skills', 'Projects'].map((item) => (
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
    <h1 className="text-3xl sm:text-5xl font-bold mb-4">
      Hi, I'm <span className="glow-text">SivaprakasamC.</span>
    </h1>
    <p className="text-lg sm:text-xl mb-6">
      Web Developer | Bridging Front-End and Back-End
    </p>
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      View My Work
    </a>

    {/* Social Media Icons */}
    <div className="flex space-x-6 mt-6">
      <a
        href="https://twitter.com/SivaprakashTwt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-400 rounded-lg hover:text-blue-500"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://linkedin.com/in/sivaprakasam-civashankar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-400 rounded-lg hover:text-blue-500"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/sivaprakashjr15"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-400 rounded-lg hover:text-blue-500"
      >
        <FaGithub size={30} />
      </a>
    </div>

    {/* Add SVG below the social media icons */}
    <div className="mt-8 w-full max-w-xs sm:max-w-sm">
      <LaptopMan className="w-full h-auto animate-pulse" />
    </div>
  </header>
);

// About Component
const About = () => (
  <section id="about" className="p-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p> - 🎓 Currently exploring Blockchain Development and Full Stack Web Development.</p>
    <p>- 🛠️ Experienced in building decentralized applications using Solidity and React.</p>
    <p>- 🌱 Constantly learning and enhancing my knowledge in Web3 technologies.</p>
    <p>- 🔭 Actively seeking opportunities in entry-level roles where I can contribute and grow in team-oriented environments.</p>
  </section>
);

// Education Component
const Education = () => (
  <section id="education" className="p-10 bg-gray-100 text-gray-800">
    <h2 className="text-3xl font-bold mb-4">Education</h2>
    <p> 🎓 B.E. in Computer Science and Engineering.</p>
    <p> 📖 Sri Krishna College of Technology</p>
    <p> 📍 Coimbatore, Tamil Nadu, India</p>
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
    <p>© 2024 Sjr15. All rights reserved.</p>
  </footer>
);

// App Component
const App = () => {
  const skills = ['React.js', 'Node.js', 'JavaScript', 'Python', 'Java'];
  const projects = [
    {
      title: 'Permissionless Decentralised Crowd- Funding',
      description:
        'BetterFund : Crowdfunding Platform Powered by Ethereum Blockchain.',
      link: 'https://github.com/Sivaprakashjr15/Easy-Raise.git',
    },
    {
      title: 'Decentralised social media application (dApp)',
      description: 'dApp: Decentralized Social Media Platform on Polygon.',
      link: 'https://github.com/Sivaprakashjr15/MySKCT.git',
    },
  ];

  return (
    <div>
      <InteractiveBackground />
      <Navbar />
      <Header />
      <About />
      <Education />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
