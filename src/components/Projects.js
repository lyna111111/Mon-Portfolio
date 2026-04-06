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
      tech: ["React", "TypeScript", "CSS3"],
      links: { github: "#", external: "https://lepetitbellon.fr/" },
      featured: true,
      images: []
    },
    {
      title: "Central de réservation",
      description: "Plateforme centralisée de réservation pour restaurants avec gestion de disponibilité.",
      tech: ["React", "Node.js", "CSS3"],
      links: { github: "#", external: "#" },
      featured: true,
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
      tech: ["React", "CSS3", "HTML5"],
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
      tech: ["React", "CSS3", "HTML5"],
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
              className={`project-card ${project.featured ? 'featured' : ''} ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
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
                <div className="external-links">
                  {project.links.github !== "#" && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {project.links.external !== "#" && (
                    <a href={project.links.external} target="_blank" rel="noopener noreferrer" aria-label="Voir le site">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
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
                        <img 
                          src={imgUrl} 
                          alt={`${project.title} screenshot ${i}`} 
                          className="project-image clickable" 
                          onClick={() => openModal(project, i)} 
                        />
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

              {/* Hover Overlay */}
              <div className={`card-overlay ${hoveredProject === index ? 'active' : ''}`}>
                <div className="overlay-content">
                  <span className="view-project">Voir le projet</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
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
