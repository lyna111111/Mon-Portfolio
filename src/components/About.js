import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'JavaScript', level: 95, color: '#f7df1e' },
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'Laravel', level: 88, color: '#ff2d20' },
    { name: 'TypeScript', level: 85, color: '#3178c6' },
    { name: 'Next.js', level: 82, color: '#000000' },
    { name: 'CSS/SCSS', level: 93, color: '#1572b6' },
    { name: 'HTML5', level: 95, color: '#e34f26' },
    { name: 'PostgreSQL', level: 80, color: '#336791' },
    { name: 'Java', level: 75, color: '#007396' },
    { name: 'Vite.js', level: 85, color: '#646cff' }
  ];

  const experiences = [
    { year: '2023-2024', title: 'Développeuse Full-Stack', company: 'Projets Freelance' },
    { year: '2022-2023', title: 'Développeuse Web', company: 'Agence Digitale' },
    { year: '2021-2022', title: 'Junior Developer', company: 'Startup Tech' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>

        <div className="about-grid">
          {/* Left Column - Text & Image */}
          <div className="about-content">
            <div className="about-text-wrapper">
              <div className="code-line">
                <span className="code-comment">// Qui suis-je ?</span>
              </div>
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
              </div>
              <div className="code-line indent">
                <span className="code-property">name:</span> <span className="code-string">"Lina MADANI"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">role:</span> <span className="code-string">"Full-Stack Developer"</span>,
              </div>
              <div className="code-line indent">
                <span className="code-property">passion:</span> <span className="code-string">"Créer des expériences web exceptionnelles"</span>
              </div>
              <div className="code-line">
                {'}'};
              </div>
            </div>

            <div className="about-description">
              <p>
                Passionnée par le développement web depuis plusieurs années, je transforme des idées créatives
                en applications web performantes et élégantes. Mon approche combine expertise technique et
                sensibilité design pour créer des solutions qui font la différence.
              </p>
              <p>
                Spécialisée dans le développement full-stack, j'ai eu l'opportunité de travailler sur
                des projets variés allant de sites e-commerce complexes à des applications web modernes.
                Chaque projet est une nouvelle aventure où je peux repousser les limites du possible.
              </p>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="about-sidebar">
            {/* Skills with Progress Bars */}
            <div className="skills-section">
              <h3 className="sidebar-title">
                <span className="title-icon">&lt;/&gt;</span>
                Compétences Techniques
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`skill-item ${isVisible ? 'animate' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color,
                          boxShadow: activeSkill === index ? `0 0 20px ${skill.color}` : 'none'
                        }}
                      >
                        <div className="skill-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="about-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;
