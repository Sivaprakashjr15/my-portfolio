import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactComponent as LaptopMan } from './assets/laptop-man.svg'; // Importing the SVG as a React component
import InteractiveBackground from './InteractiveBackground';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

// Navbar Component
const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-3 bg-gray-800 text-white z-50 shadow-lg">
    <div className="text-xl font-semibold">
      <span className="glow-text">Hola Amigos'</span>
    </div>
    <div className="flex space-x-3 text-sm">
      {['Home', 'About', 'Education', 'Skills', 'Projects'].map((item) => (
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
  <header 
  id="home"
  className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white px-4 sm:px-8">
    <h1 className="text-3xl sm:text-5xl font-bold mb-4">
      Hi, I'm <span className="glow-text">SivaprakasamC.</span>
    </h1>
    <p className="text-lg sm:text-xl mb-6">
      Web Developer | Bridging Front-End and Back-End
    </p>
    <div className="flex space-x-4">
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        View My Work
      </a>
      <a
        href="https://github.com/Sivaprakashjr15/resume.git" 
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        View Resume
      </a>
    </div>

    {/* Social Media Icons */}
    <div className="flex space-x-3 mt-6">
      <a
        href="https://twitter.com/SivaprakashTwt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-400 rounded-lg hover:text-blue-500"
      >
        <FaTwitter size={30} />
      </a>
      <a
        href="https://linkedin.com/in/sivaprakasamc/"
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

// Footer Component
const Footer = () => (
  <footer className="p-4 bg-gray-900 text-gray-400 text-center">
    <p>© 2024 SivaprakasamC. All rights reserved.</p>
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
      <Footer />
    </div>
  );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
