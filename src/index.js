import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactComponent as LaptopMan } from './assets/laptop-man.svg';
import InteractiveBackground from './InteractiveBackground';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FaTwitter, FaLinkedin, FaGithub,
  FaEthereum, FaReact, FaNodeJs, FaPython, FaJava,
} from 'react-icons/fa';
import {
  HiOutlineExternalLink, HiOutlineMail,
  HiAcademicCap, HiCode, HiGlobe,
} from 'react-icons/hi';
import { SiSolidity, SiWeb3Dotjs } from 'react-icons/si';

/* ─────────────────────────────────────────────
   Custom Cursor
───────────────────────────────────────────── */
const Cursor = () => {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px'; }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px'; }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
};

/* ─────────────────────────────────────────────
   Reveal wrapper (scroll-triggered)
───────────────────────────────────────────── */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Typed text
───────────────────────────────────────────── */
const ROLES = [
  'Full-Stack Developer',
  'Blockchain Engineer',
  'Web3 Builder',
  'dApp Architect',
];

const TypedText = () => {
  const [index, setIndex]   = useState(0);
  const [text, setText]     = useState('');
  const [deleting, setDel]  = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    const speed   = deleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDel(true), 1600);
      } else if (deleting && text === '') {
        setDel(false);
        setIndex((i) => (i + 1) % ROLES.length);
      } else {
        setText(deleting ? text.slice(0, -1) : current.slice(0, text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span style={{ color: 'var(--accent)' }}>
      {text}<span className="typed-cursor" />
    </span>
  );
};

/* ─────────────────────────────────────────────
   Navbar
───────────────────────────────────────────── */
const NAV_ITEMS = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenu]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="text-xl font-semibold">
        <span className="glow-text">Hola Amigos'</span>
      </div>

      {/* Desktop links */}
      <div className="hidden sm:flex space-x-6">
        {NAV_ITEMS.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden flex flex-col gap-1.5"
        onClick={() => setMenu(!menuOpen)}
        style={{ cursor: 'none', background: 'none', border: 'none' }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--accent)',
              transition: 'transform 0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px,4px)'
                       : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px,-4px)'
                       : menuOpen && i === 1 ? 'scaleX(0)' : 'none',
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border)',
              padding: '1rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ─────────────────────────────────────────────
   Header / Hero
───────────────────────────────────────────── */
const Header = () => (
  <header id="home" className="relative">
    <div className="grid-bg" />

    <Reveal>
      <div className="status-badge">
        <span className="status-dot" />
        Open to opportunities
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="glow-text">SivaprakasamC.</span>
      </h1>
    </Reveal>

    <Reveal delay={0.2}>
      <p className="subtitle mb-6">
        <TypedText />
      </p>
    </Reveal>

    <Reveal delay={0.3}>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <a href="#projects" className="btn-primary">
          <HiCode /> View My Work
        </a>
        <a href="/SivaprakasamC_SE.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
          <HiOutlineExternalLink /> Resume
        </a>
        <a href="#contact" className="btn-outline">
          <HiOutlineMail /> Contact
        </a>
      </div>
    </Reveal>

    {/* Social icons */}
    <Reveal delay={0.4}>
      <div className="flex justify-center gap-3 mb-8">
        {[
          { href: 'https://twitter.com/SivaprakashTwt',     icon: <FaTwitter size={18} /> },
          { href: 'https://linkedin.com/in/sivaprakasamc/', icon: <FaLinkedin size={18} /> },
          { href: 'https://github.com/sivaprakashjr15',     icon: <FaGithub size={18} /> },
        ].map(({ href, icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
            {icon}
          </a>
        ))}
      </div>
    </Reveal>

    {/* SVG illustration */}
    <Reveal delay={0.5}>
      <div className="svg-float w-full max-w-xs sm:max-w-sm mx-auto">
        <LaptopMan className="w-full h-auto" />
      </div>
    </Reveal>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{
        marginTop: '3rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        fontFamily: "'Space Mono', monospace", fontSize: '0.65rem',
        letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)',
      }}
    >
      <span>Scroll</span>
      <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>↓</span>
    </motion.div>
  </header>
);

/* ─────────────────────────────────────────────
   About
───────────────────────────────────────────── */
const ABOUT_ITEMS = [
  { icon: '🔗', text: 'Exploring Blockchain Development & Full-Stack Web Development.' },
  { icon: '⚙️', text: 'Experienced building decentralised apps with Solidity and React.' },
  { icon: '🌱', text: 'Continuously learning and growing across Web3 technologies.' },
  { icon: '🚀', text: 'Seeking entry-level roles to contribute and grow in team environments.' },
];

const About = () => (
  <section id="about">
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <Reveal>
        <p className="section-label">// who i am</p>
        <h2>About Me</h2>
      </Reveal>
      <div className="about-grid">
        {ABOUT_ITEMS.map(({ icon, text }, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="about-item">
              <span className="about-icon">{icon}</span>
              <p>{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Education
───────────────────────────────────────────── */
const Education = () => (
  <section id="education">
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <Reveal>
        <p className="section-label">// where i studied</p>
        <h2>Education</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="edu-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <HiAcademicCap size={28} style={{ color: 'var(--accent)' }} />
            <span className="degree">B.E. in Computer Science & Engineering</span>
          </div>
          <p><HiGlobe style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--accent-2)' }} />Sri Krishna College of Technology</p>
          <p style={{ marginTop: '0.4rem' }}>📍 Coimbatore, Tamil Nadu, India</p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Skills
───────────────────────────────────────────── */
const SKILLS = [
  { name: 'React.js',   icon: <FaReact size={20} />,      color: '#61DBFB' },
  { name: 'Node.js',    icon: <FaNodeJs size={20} />,     color: '#68A063' },
  { name: 'JavaScript', icon: <HiCode size={20} />,       color: '#F7DF1E' },
  { name: 'Python',     icon: <FaPython size={20} />,     color: '#3776AB' },
  { name: 'Java',       icon: <FaJava size={20} />,       color: '#E76F00' },
  { name: 'Solidity',   icon: <SiSolidity size={20} />,   color: '#9B9B9B' },
  { name: 'Ethereum',   icon: <FaEthereum size={20} />,   color: '#7B61FF' },
  { name: 'Web3.js',    icon: <SiWeb3Dotjs size={20} />,  color: '#00e5ff' },
];

const Skills = () => (
  <section id="skills">
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <Reveal>
        <p className="section-label">// what i use</p>
        <h2>Skills</h2>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {SKILLS.map(({ name, icon, color }, i) => (
          <Reveal key={name} delay={i * 0.07}>
            <motion.div
              className="skill-chip"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span style={{ color, display: 'block', marginBottom: '0.4rem' }}>{icon}</span>
              {name}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Projects
───────────────────────────────────────────── */
const PROJECTS = [
  {
    title: 'Permissionless Decentralised Crowdfunding',
    description: 'BetterFund — a crowdfunding platform powered by the Ethereum blockchain enabling trustless, permissionless fundraising.',
    link: 'https://github.com/Sivaprakashjr15/Easy-Raise.git',
    tags: ['Solidity', 'Ethereum', 'React'],
  },
  {
    title: 'Decentralised Social Media dApp',
    description: 'A decentralized social media platform built on Polygon that gives users ownership of their content.',
    link: 'https://github.com/Sivaprakashjr15/MySKCT.git',
    tags: ['Polygon', 'Web3', 'IPFS'],
  },
];

const Projects = () => (
  <section id="projects">
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <Reveal>
        <p className="section-label">// what i've built</p>
        <h2>Projects</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map(({ title, description, link, tags }, i) => (
          <Reveal key={title} delay={i * 0.15}>
            <motion.div
              className="project-card"
              whileHover={{ scale: 1.01 }}
            >
              <div>
                {tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub size={14} /> View on GitHub <HiOutlineExternalLink size={14} />
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Contact
───────────────────────────────────────────── */
const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <Reveal>
          <p className="section-label">// get in touch</p>
          <h2>Contact</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit}>
            <input type="text"     placeholder="Your Name"    required />
            <input type="email"    placeholder="Your Email"   required />
            <textarea              placeholder="Your Message" required />
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    padding: '1rem', textAlign: 'center',
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 2,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.8rem',
                    color: '#22c55e',
                  }}
                >
                  ✓ Message sent!
                </motion.div>
              ) : (
                <motion.button key="btn" type="submit" whileTap={{ scale: 0.97 }}>
                  Send Message →
                </motion.button>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Footer
───────────────────────────────────────────── */
const Footer = () => (
  <footer>
    <p style={{ marginBottom: '0.5rem' }}>
      Built with <span style={{ color: 'var(--accent)' }}>React</span> &{' '}
      <span style={{ color: 'var(--accent-2)' }}>Framer Motion</span>
    </p>
    <p>© 2024 SivaprakasamC. All rights reserved.</p>
  </footer>
);

/* ─────────────────────────────────────────────
   App
───────────────────────────────────────────── */
const App = () => (
  <div style={{ position: 'relative' }}>
    <Cursor />
    <InteractiveBackground />
    <Navbar />
    <Header />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);