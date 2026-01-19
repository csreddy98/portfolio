import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, User } from 'lucide-react'
import './Hero.css'

const PREFIXES = ['Full Stack', 'GenAI', 'React', 'Python', 'Backend']

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % PREFIXES.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero" itemScope itemType="https://schema.org/Person">
      <div className="hero-background">
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-content">
        {/* {!imageError && (
          <div className="hero-profile">
            <figure className="profile-image-wrapper">
              <img 
                src="images/chandra_dondeti.png" 
                alt="Chandra Dondeti - Full Stack Engineer and React Developer"
                title="Chandra Dondeti"
                className="profile-image"
                itemProp="image"
                loading="eager"
                width="180"
                height="180"
                onError={() => setImageError(true)}
              />
            </figure>
          </div>
        )} */}

        <div className="hero-main">
          <div className="hero-tag">
            <span className="status-dot"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-name" itemProp="name">Chandra Dondeti</h1>
          
          <div className="hero-role" aria-label="Professional roles">
            <span className="role-scroller">
              {PREFIXES.map((prefix, index) => (
                <span 
                  key={prefix} 
                  className={`role-word ${index === currentIndex ? 'active' : ''}`}
                  itemProp={index === 0 ? "jobTitle" : undefined}
                >
                  {prefix}
                </span>
              ))}
            </span>
            <span className="role-static">Engineer</span>
          </div>
          
          <p className="hero-description" itemProp="description">
            Building modern web applications and intelligent systems. 
            Focused on creating clean, scalable solutions that deliver real value.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1ha-tK19mImiSeZ_ae3UomMYwPTyFdn03/view?usp=sharing" 
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <nav className="hero-social" aria-label="Social media links">
            <a 
              href="https://github.com/csreddy98" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chandra Dondeti on GitHub"
              itemProp="sameAs"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/csreddy98" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chandra Dondeti on LinkedIn"
              itemProp="sameAs"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://huggingface.co/csr" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chandra Dondeti on Hugging Face"
              itemProp="sameAs"
            >
              <img src="images/hf-logo.svg" alt="" className="huggingface-icon" aria-hidden="true" style={{width: "25px"}} />
            </a>
            <a 
              href="mailto:howdy@csreddy.com" 
              aria-label="Email Chandra Dondeti"
              itemProp="email"
            >
              <Mail size={20} />
            </a>
          </nav>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">4+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
