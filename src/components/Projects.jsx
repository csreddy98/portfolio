import { useState, useEffect, useRef } from 'react'
import './Projects.css'
import projectsData from '../data/projects.json'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)
  const [imageErrors, setImageErrors] = useState({})

  // Dynamically generate filters from project categories
  const uniqueCategories = [...new Set(projectsData.map(p => p.category.toLowerCase()))]
  const filters = ['all', ...uniqueCategories.sort()]

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase() === activeFilter)

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [filteredProjects])

  return (
    <section id="projects" className="projects" ref={sectionRef} aria-labelledby="projects-title">
      <div className="container">
        <header className="section-header animate-on-scroll">
          <span className="section-tag">My Work</span>
          <h2 className="section-title" id="projects-title">Featured Projects</h2>
        </header>

        <nav className="project-filters animate-on-scroll" aria-label="Project category filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </nav>

        <div className="projects-grid" role="list">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className={`project-card animate-on-scroll ${
                filteredProjects.length === 3 && index === 0 ? 'featured-card' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <figure className="project-image">
                {imageErrors[project.id] ? (
                  <div className="project-placeholder">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="2"/>
                      <polyline points="21 15 16 10 5 21" strokeWidth="2"/>
                    </svg>
                    <p className="placeholder-text">{project.title}</p>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description.slice(0, 60)}...`}
                    title={`${project.title} by Chandra Dondeti`}
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                    itemProp="image"
                  />
                )}
              </figure>
              <div className="project-content">
                <h3 className="project-title" itemProp="name">{project.title}</h3>
                <p className="project-description" itemProp="description">{project.description}</p>
                <ul className="project-tech" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li key={tech} className="tech-tag">{tech}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a 
                    href={project.githubUrl} 
                    className="action-btn btn-code" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title} on GitHub`}
                    itemProp="codeRepository"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="action-btn btn-demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    itemProp="url"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round"/>
                      <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
