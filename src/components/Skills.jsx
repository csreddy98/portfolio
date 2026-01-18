import { useEffect, useRef } from 'react'
import './Skills.css'
import { Server, Layout, Brain, Cloud } from 'lucide-react'

const Skills = () => {
  const sectionRef = useRef(null)

  const iconMap = {
    Server,
    Layout,
    Brain,
    Cloud
  }

  const skillCategories = [
    {
      category: "Backend Engineering",
      icon: "Server",
      skills: ["Python (FastAPI, Django)", "REST & GraphQL", "Microservices", "AsyncIO"]
    },
    {
      category: "Frontend & UI",
      icon: "Layout",
      skills: ["React.js", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      category: "AI & Data Science",
      icon: "Brain",
      skills: ["RAG", "LLM Fine-tuning", "OpenAI/Gemini", "PostgreSQL"]
    },
    {
      category: "Cloud & Infrastructure",
      icon: "Cloud",
      skills: ["AWS (ECS/ECR)", "Docker", "Kubernetes", "CI/CD Pipelines"]
    }
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
    <section id="skills" className="skills" ref={sectionRef} aria-labelledby="skills-title">
      <div className="container">
        <header className="section-header animate-on-scroll">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title" id="skills-title">Skills & Expertise</h2>
        </header>

        <div className="skills-grid" role="list">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon]
            return (
              <article 
                key={category.category} 
                className="skill-category animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
              >
                <header className="category-header">
                  <div className="category-icon-wrapper" aria-hidden="true">
                    {IconComponent && <IconComponent size={32} className="category-icon" />}
                  </div>
                  <h3 className="category-title">{category.category}</h3>
                </header>
                
                <ul className="skills-list" aria-label={`${category.category} skills`}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-tag-item">
                      <span className="skill-bullet" aria-hidden="true">•</span>
                      <span className="skill-name">{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills