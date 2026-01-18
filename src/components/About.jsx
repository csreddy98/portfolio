import { useEffect, useRef } from 'react'
import './About.css'
import { 
  MonitorPlay, 
  Server, 
  Boxes, 
  Code2,
  Database,
  Container,
  GitBranch,
  Cloud
} from 'lucide-react'

const About = () => {
  const sectionRef = useRef(null)

  const techStack = [
    { name: 'Python', icon: Code2, color: '#3776ab' },
    { name: 'React', icon: MonitorPlay, color: '#61dafb' },
    { name: 'TypeScript', icon: Code2, color: '#3178c6' },
    { name: 'AWS', icon: Cloud, color: '#ff9900' },
    { name: 'Docker', icon: Container, color: '#2496ed' },
    { name: 'PostgreSQL', icon: Database, color: '#336791' },
    { name: 'Node.js', icon: Server, color: '#68a063' },
    { name: 'Git', icon: GitBranch, color: '#f05032' }
  ]

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
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef} aria-labelledby="about-title">
      <div className="container">
        <header className="section-header animate-on-scroll">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title" id="about-title">About Me</h2>
        </header>

        <div className="about-content">
          <article className="about-text animate-on-scroll">
            <p className="about-intro">
              I am a Full-Stack Software Engineer dedicated to building robust, scalable applications. 
              My focus lies at the intersection of clean backend architecture and intuitive frontend 
              experiences, with a growing emphasis on integrating AI-driven solutions into modern web workflows.
            </p>
            
            <div className="about-highlights" role="list">
              <div className="highlight-item" role="listitem">
                <div className="highlight-icon" aria-hidden="true">🎨</div>
                <div className="highlight-content">
                  <h3>Frontend Engineering</h3>
                  <p>Crafting responsive, high-performance user interfaces using React and modern CSS frameworks like Tailwind.</p>
                </div>
              </div>
              
              <div className="highlight-item" role="listitem">
                <div className="highlight-icon" aria-hidden="true">⚙️</div>
                <div className="highlight-content">
                  <h3>Backend & API Design</h3>
                  <p>Designing scalable server-side logic and RESTful APIs using Node.js and Python to ensure seamless data flow.</p>
                </div>
              </div>
              
              <div className="highlight-item" role="listitem">
                <div className="highlight-icon" aria-hidden="true">📊</div>
                <div className="highlight-content">
                  <h3>Scalable Systems</h3>
                  <p>Optimizing database performance and leveraging cloud tools to build applications that scale with user demand.</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="tech-stack animate-on-scroll" aria-labelledby="tech-stack-title">
            <h3 className="tech-stack-title" id="tech-stack-title">Tech Stack</h3>
            <ul className="tech-grid" role="list">
              {techStack.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <li 
                    key={tech.name} 
                    className="tech-badge"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Icon size={24} style={{ color: tech.color }} aria-hidden="true" />
                    <span className="tech-name">{tech.name}</span>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
        
        <div className="about-cta animate-on-scroll">
          <a href="#projects" className="cta-button" aria-label="View Chandra Dondeti's projects">
            View My Projects
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M7.5 15L12.5 10L7.5 5" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
