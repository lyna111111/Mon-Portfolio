import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  "Développeuse Web Full-Stack",
  "Créatrice d'Expériences Digitales",
  "Architecte Front-End"
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="hero">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="code-snippets">
        <span className="code-snippet" style={{ top: '15%', left: '10%' }}>&lt;/&gt;</span>
        <span className="code-snippet" style={{ top: '25%', right: '15%' }}>{ }</span>
        <span className="code-snippet" style={{ bottom: '20%', left: '20%' }}>=&gt;</span>
        <span className="code-snippet" style={{ top: '60%', right: '10%' }}>const</span>
        <span className="code-snippet" style={{ bottom: '30%', right: '25%' }}>npm</span>
      </div>

      <div className="hero-content">
        <div className="greeting-wrapper">
          <span className="hero-greeting">Bonjour, je suis</span>
        </div>

        <h1 className="hero-name">
          <span className="name-highlight">Lina</span> MADANI
        </h1>

        <div className="hero-subtitle-wrapper">
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
        </div>

        <p className="hero-desc">
          Je transforme des idées en expériences web exceptionnelles.
          Spécialisée dans la création d'applications modernes, performantes et accessibles
          qui captivent les utilisateurs.
        </p>

        <div className="hero-cta-wrapper">
          <a href="#projects" className="hero-btn primary-btn">
            <span>Voir mes projets</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="hero-btn secondary-btn">
            <span>Me contacter</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
