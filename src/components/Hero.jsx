import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, User } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [imageError, setImageError] = useState(false)

  const roles = ['Full Stack Engineer', 'React Developer', 'Python Developer', 'GenAI Engineer']

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

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
            <span className="role-text" itemProp="jobTitle">{text}</span>
            <span className="cursor" aria-hidden="true">|</span>
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
              href="https://github.com/chandradondeti" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chandra Dondeti on GitHub"
              itemProp="sameAs"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/chandradondeti" 
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
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 95 88" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="huggingface-icon"
                aria-hidden="true"
              >
                <path d="M47.21 70.471c-5.522 0-10.004-4.481-10.004-10.004 0-5.522 4.482-10.003 10.004-10.003s10.003 4.481 10.003 10.003c0 5.523-4.48 10.004-10.003 10.004m35.013-10.004c0 5.523-4.482 10.004-10.004 10.004-5.523 0-10.004-4.481-10.004-10.004 0-5.522 4.481-10.003 10.004-10.003 5.522 0 10.004 4.481 10.004 10.003" fill="currentColor"/>
                <path d="M86.15 53.977c-.524-13.788-7.666-26.316-19.445-33.28-9.45-5.584-20.554-7.073-31.022-4.24-10.466 2.833-19.48 9.551-25.064 18.999-2.787 4.717-4.631 9.952-5.492 15.429a37.43 37.43 0 0 0-.393 3.092c-.785-1.31-1.57-2.621-2.355-3.93-1.57-2.621-3.14-5.24-4.71-7.859C-8.257 31.936-3.28 18.671 7.743 10.745c5.502-3.948 12.11-6.297 18.936-6.726.785-.049 1.57-.049 2.355-.098 0-.655 0-1.309.05-1.963.048-.655.048-1.31.048-1.964-.785 0-1.57.048-2.355.098C11.67.878-1.16 11.106.214 26.288a39.43 39.43 0 0 0 2.5 10.789c.784 2.032 1.57 4.016 2.5 5.95l8.958 15.037c.655 1.047 1.832 1.702 3.091 1.702h5.442c-.262-.655-.48-1.31-.655-2.016a40.44 40.44 0 0 1-.785-3.977 40.68 40.68 0 0 1 0-7.955c.131-1.31.262-2.62.524-3.93 1.047-5.097 3.14-9.861 6.227-14.053 4.631-6.334 11.064-11.331 18.46-14.163 9.45-3.617 20.076-3.617 29.527.049 7.396 2.833 13.83 7.781 18.46 14.115 3.141 4.24 5.235 9.052 6.278 14.2.261 1.358.392 2.717.523 4.076a40.45 40.45 0 0 1-.048 8.102c-.13 1.358-.31 2.717-.572 4.026-.13.655-.31 1.309-.523 1.964h5.441c1.31 0 2.487-.655 3.091-1.702 3.142-5.146 6.227-10.34 9.32-15.486 1.178-1.915 2.273-3.88 3.28-5.95a39.43 39.43 0 0 0 2.5-10.789c.524-5.146-.048-10.34-1.832-15.038-3.88-10.438-13.043-18.46-24.108-20.932C81.214 1.436 72.48.438 63.948 2.47c-.785.196-1.57.392-2.355.638 0 .654.048 1.309.048 1.964.048.655.048 1.309.048 1.963.786-.245 1.571-.49 2.356-.687 6.825-1.702 13.929-.982 20.31 1.964 11.021 5.098 18.508 15.88 19.621 27.733.13 1.31.13 2.62.13 3.88 0 4.241-.572 8.483-1.963 12.528-.048.147-.048.343-.048.49 0 .051.048.099.048.148l.048.147z" fill="currentColor"/>
              </svg>
            </a>
            <a 
              href="mailto:chandra@example.com" 
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
