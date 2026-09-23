import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import { useTilt } from '../hooks/useTilt'
import './Projects.css'

// TODO: troque pelos seus projetos reais (nome, descrição, tags, links)
const PROJECTS = [
  {
    name: 'Projeto Um',
    description:
      'Descreva o problema que esse projeto resolve, seu papel nele e um resultado concreto (ex: performance, usuários, tempo economizado).',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/seu-usuario/projeto-um',
    demo: '',
  },
  {
    name: 'Projeto Dois',
    description:
      'Descreva o problema que esse projeto resolve, seu papel nele e um resultado concreto (ex: performance, usuários, tempo economizado).',
    tags: ['JavaScript', 'API REST'],
    github: 'https://github.com/seu-usuario/projeto-dois',
    demo: '',
  },
  {
    name: 'Projeto Três',
    description:
      'Descreva o problema que esse projeto resolve, seu papel nele e um resultado concreto (ex: performance, usuários, tempo economizado).',
    tags: ['Python', 'Automação'],
    github: 'https://github.com/seu-usuario/projeto-tres',
    demo: '',
  },
]

function ProjectCard({ project }) {
  const tilt = useTilt({ max: 8, scale: 1.015 })

  return (
    <article
      className="project-card"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="project-card__top">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="project-card__links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <FaGithub size={15} /> Código
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={15} strokeWidth={1.8} /> Demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <p className="eyebrow">projetos</p>
        <h2 className="section-title">Um pouco do que eu já construí</h2>
        <p className="section-intro">
          Três projetos que mostram como eu penso e resolvo problemas com código.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  )
}