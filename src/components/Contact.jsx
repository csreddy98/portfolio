import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const sectionRef = useRef(null)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header animate-on-scroll">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title" id="contact-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </header>

        <div className="contact-content">
          <address className="contact-info animate-on-scroll">
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Location</h3>
              <p>Dallas, TX</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:csreddy1998@gmail.com">csreddy1998@gmail.com</a></p>
            </div>

            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Phone</h3>
              <p>  
                <a href="tel:+14697021893">+1 (469) 702-1893</a></p>
            </div>
          </address>

          <form className="contact-form animate-on-scroll" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' && 'Sending...'}
              {status === 'success' && 'Message Sent!'}
              {!status && 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <p>&copy; 2026 Chandra Dondeti. All rights reserved.</p>
          <nav className="footer-links" aria-label="Social media links">
            <a href="https://github.com/chandradondeti" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/chandradondeti" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/chandradondeti" target="_blank" rel="noopener noreferrer">Twitter</a>
          </nav>
        </div>
      </footer>
    </section>
  )
}

export default Contact
