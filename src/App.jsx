import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple and highly efficient scroll listener for ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeSection={activeSection} />
      
      <main id="main">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />

        <footer className="footer">
          <div className="container">
            <div className="copyright">
              © {new Date().getFullYear()} <strong><span>Yahya Asım Döner</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed in iPortfolio style
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
