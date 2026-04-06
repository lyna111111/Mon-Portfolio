import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  // States for Image Modal
  const [modalProject, setModalProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openModal = (project, index) => {
    setModalProject(project);
    setModalImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalProject(null);
    setModalImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextModalImage = (e) => {
    if (e) e.stopPropagation();
    if (modalProject && modalProject.images) {
      setModalImageIndex((prev) => (prev + 1) % modalProject.images.length);
    }
  };

  const prevModalImage = (e) => {
    if (e) e.stopPropagation();
    if (modalProject && modalProject.images) {
      setModalImageIndex((prev) => (prev === 0 ? modalProject.images.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextModalImage();
      if (e.key === 'ArrowLeft') prevModalImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalProject, modalImageIndex]);

  const projects = [
    {
      title: "Le Petit Bellon",
      description: "Site web élégant pour un hôtel avec système de réservation, galerie photos et présentation des services.",
      tech: ["Next.js", "React"],
      links: { github: "#", external: "https://lepetitbellon.fr/" },
      featured: true,
      images: []
    },
    {
      title: "Central de réservation",
      description: "Plateforme centralisée de réservation pour restaurants avec gestion de disponibilité.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "#" },
      featured: false,
      images: [
        "/Central de réservation/Central de réservation1.png",
        "/Central de réservation/Central de réservation2.png",
        "/Central de réservation/Central de réservation3.png",
        "/Central de réservation/Central de réservation4.png",
        "/Central de réservation/Central de réservation5.png"
      ]
    },
    {
      title: "Darna Electro",
      description: "Site e-commerce pour matériel électroménager avec catalogue complet et panier d'achat.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "#" },
      featured: false,
      images: [
        "/Darna electro/Darna Acceuil.png",
        "/Darna electro/Darna catalog.png",
        "/Darna electro/ElectroZadTik.png"
      ]
    },
    {
      title: "Hadjal Ceramica",
      description: "Site vitrine pour une entreprise de céramique avec catalogue de produits.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "#" },
      featured: false,
      images: [
        "/Hadjal cermica/Hadjal_Ceramica1.png",
        "/Hadjal cermica/Hadjal_Ceramica3.png"
      ]
    },
    {
      title: "Le Professionnel Algérie",
      description: "Boutique en ligne spécialisée avec système de filtrage et paiement sécurisé.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "https://leprofessionnelalgerie.com/" },
      featured: false,
      images: [
        "/Leprofessionnelelgerie/LeProfessionnel.png",
        "/Leprofessionnelelgerie/LeProfessionnel2.png"
      ]
    },
    {
      title: "Restaurant Le Mignon",
      description: "Site officiel du restaurant avec menu numérique et présentation de l'établissement.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "#" },
      featured: false,
      images: [
        "/Restaurant le mignon/LeMignon.png"
      ]
    },
    {
      title: "Shoesland Béjaïa",
      description: "E-commerce spécialisé dans les chaussures avec gestion des stocks.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "#" },
      featured: false,
      images: [
        "/ShoesLand/ShoesLand bleu 1.png",
        "/ShoesLand/ShoesLand bleu 2.png"
      ]
    },
    {
      title: "Universel Céramique",
      description: "Site e-commerce pour fabricant de céramique avec devis en ligne.",
      tech: ["Laravel", "CSS3", "HTML5"],
      links: { github: "#", external: "https://universelceramique.com/" },
      featured: false,
      images: [
        "/univerel ceramique/Universel_céramrique acceuil.png",
        "/univerel ceramique/Universel_céramrique catalogue.png",
        "/univerel ceramique/Universel_céramrique catalogue export only.png"
      ]
    },
    {
      title: "Nchriha Innovia",
      description: "Plateforme web innovante.",
      tech: ["Next.js", "React"],
      links: { github: "#", external: "https://nchriha-innovia.com/home" },
      featured: true,
      images: []
    }
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
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Projets Réalisés</h2>

        <p className="projects-intro">
          Une sélection de mes projets les plus récents, alliant design moderne et fonctionnalités avancées.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''} ${isVisible ? 'animate' : ''} ${project.links.external !== '#' ? 'clickable-card' : ''}`}
              style={{ animationDelay: `${index * 0.1}s`, cursor: project.links.external !== '#' ? 'pointer' : 'default' }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={(e) => {
                if (e.target.closest('.project-image-container') || e.target.closest('.cta-button') || e.target.closest('a')) return;
                if (project.links.external !== "#") {
                  window.open(project.links.external, '_blank');
                }
              }}
            >
              {/* Card Glow Effect */}
              <div className="card-glow"></div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="featured-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Featured
                </div>
              )}

              {/* Card Header */}
              <div className="card-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              </div>

              {/* Slider / Image Content */}
              {project.images && project.images.length > 0 && (
                <div className="project-image-container">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: true }}
                    className="project-swiper"
                  >
                    {project.images.map((imgUrl, i) => (
                      <SwiperSlide key={i}>
                        <div className="image-click-wrapper" onClick={() => openModal(project, i)} style={{ position: 'relative', cursor: 'pointer' }}>
                          <img 
                            src={imgUrl} 
                            alt={`${project.title} screenshot ${i}`} 
                            className="project-image clickable" 
                          />
                          <div className="image-zoom-hint" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', opacity: 0, transition: 'opacity 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                              <line x1="11" y1="8" x2="11" y2="14"></line>
                              <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Card Content */}
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-actions" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                {project.links.external !== "#" && (
                  <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '10px 15px', fontSize: '0.95rem', borderRadius: '8px', zIndex: 10 }}>
                    Visiter le site
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ marginLeft: '8px' }}>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
                {project.links.github !== "#" && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', padding: '10px', background: 'transparent', border: '1px solid var(--accent-light)', color: 'var(--text-light)', borderRadius: '8px', zIndex: 10 }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="projects-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>

      {/* Image Modal */}
      {modalProject && modalProject.images && modalProject.images.length > 0 && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Fermer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {modalProject.images.length > 1 && (
              <button className="modal-nav-btn prev" onClick={prevModalImage} aria-label="Précédent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            )}
            
            <img src={modalProject.images[modalImageIndex]} alt="Aperçu du projet en grand" className="modal-current-image" />
            
            {modalProject.images.length > 1 && (
              <button className="modal-nav-btn next" onClick={nextModalImage} aria-label="Suivant">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            )}
            <div className="modal-image-counter">
              {modalImageIndex + 1} / {modalProject.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
