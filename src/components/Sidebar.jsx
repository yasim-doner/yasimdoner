import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ activeSection }) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };

  // Close mobile nav when clicking outside on main content
  useEffect(() => {
    const handleBodyClick = (e) => {
      if (isMobileNavActive && !e.target.closest('#header') && !e.target.closest('.mobile-nav-toggle')) {
        setIsMobileNavActive(false);
      }
    };
    document.addEventListener('click', handleBodyClick);
    return () => document.removeEventListener('click', handleBodyClick);
  }, [isMobileNavActive]);

  const navItems = [
    { id: 'hero', label: 'Home', icon: 'fa-solid fa-house' },
    { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
    { id: 'resume', label: 'Resume', icon: 'fa-solid fa-file-invoice' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fa-solid fa-images' },
    { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
  ];

  return (
    <>
      {/* Mobile Nav Toggle Button */}
      <button 
        className={`mobile-nav-toggle d-xl-none ${isMobileNavActive ? 'bi-x' : 'bi-list'}`} 
        onClick={toggleMobileNav}
        aria-label="Toggle Navigation Menu"
      >
        <i className={isMobileNavActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>

      {/* Header/Sidebar */}
      <header id="header" className={isMobileNavActive ? 'header-show' : ''}>
        <div className="d-flex flex-column">
          {/* Profile Details */}
          <div className="profile">
            <div className="profile-img-container">
              <img src="/resume-pp.jpeg" alt="Yahya Asım Döner" className="img-fluid rounded-circle" />
            </div>
            <h1 className="text-light"><a href="#hero">Yahya Asım Döner</a></h1>
            
            {/* Social Icons */}
            <div className="social-links mt-3 text-center">
              <a href="https://github.com/yasim-doner" target="_blank" rel="noreferrer" className="github">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/yahya-asım-döner-26983723b" target="_blank" rel="noreferrer" className="linkedin">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://yasimdoner.com" target="_blank" rel="noreferrer" className="globe">
                <i className="fa-solid fa-globe"></i>
              </a>
              <a href="mailto:yasimdoner@gmail.com" className="envelope">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="tel:+905510228199" className="phone">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={`nav-link scrollto ${activeSection === item.id ? 'active' : ''}`}
                    onClick={closeMobileNav}
                  >
                    <i className={item.icon}></i> <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
