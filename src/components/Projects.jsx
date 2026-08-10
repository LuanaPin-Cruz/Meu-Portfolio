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
            <article className="project-card" key={project.name}>
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
                  Código →
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
