import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const words = ['Computer Engineer', 'Full-Stack Developer', 'Robotics Enthusiast', 'Quantum Explorer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing mode
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
      }, typingSpeed);

      if (currentText === activeWord) {
        // Pause at full word
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(75);
        }, 1500);
      }
    } else {
      // Deleting mode
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
      }, typingSpeed);

      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container">
        <h1>Yahya Asım Döner</h1>
        <p>
          I'm a <span className="typed">{currentText}</span>
          <span className="typed-cursor" aria-hidden="true">|</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
