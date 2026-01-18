import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-bracket">{'<'}</span>
          <span className="logo-text">Dev</span>
          <span className="logo-bracket">{'/>'}</span>
        </div>
        
        <ul className="nav-links">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>
      </div>
    </nav>
  )
}

export default Navigation
