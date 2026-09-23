import { useState } from 'react'

const projects = [
  { number: '01', title: 'TCC · Leucemia', type: 'Saúde + tecnologia', description: 'Projeto de conclusão que explora a tecnologia como apoio à identificação e ao estudo da leucemia.', tech: ['JavaScript', 'CSS', 'Machine Learning'], link: 'https://github.com/LuanaPin-Cruz/TCC---Diagn-stico-de-Leucemia', accent: 'pink' },
  { number: '02', title: 'Faltas CTI', type: 'Sistema educacional', description: 'Uma solução pensada para acompanhar faltas e organizar informações acadêmicas de forma prática.', tech: ['TypeScript', 'CSS', 'Dados'], link: 'https://github.com/LuanaPin-Cruz?tab=repositories&q=Faltas', accent: 'blue' },
  { number: '03', title: 'Detector de Libras', type: 'Acessibilidade + IA', description: 'Reconhecimento de Libras acompanhado de um jogo da forca: aprendizado, inclusão e diversão no mesmo projeto.', tech: ['Python', 'Visão computacional', 'Acessibilidade'], link: 'https://github.com/LuanaPin-Cruz/LIBRAS', accent: 'yellow' },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'REST API', 'Node.js', 'Python', 'Java', 'Kotlin', 'C#', '.NET', 'MySQL', 'MongoDB', 'Unity 2D', 'Machine Learning']
const menu = [['sobre', 'Sobre'], ['habilidades', 'Skills'], ['projetos', 'Projetos'], ['contato', 'Contato']]

export default function App() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Voltar ao início"><span className="brand__mark">L</span><span>luana.dev</span></a>
        <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        <nav className={open ? 'navigation navigation--open' : 'navigation'} aria-label="Navegação principal">
          {menu.map(([id, label]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}
          <a className="nav-github" href="https://github.com/LuanaPin-Cruz" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero section-wrap">
          <div className="hero__copy">
            <p className="status"><span /> online · explorando o próximo nível</p>
            <p className="hero__mini">Olá, eu sou</p>
            <h1>Luana <em>Pinheiro</em> Cruz<span className="spark">✦</span></h1>
            <div className="hero__actions"><a className="button button--primary" href="#projetos">Ver meus projetos <span>→</span></a><a className="button button--outline" href="#contato">Vamos conversar</a></div>
            <div className="quick-stats" aria-label="Resumo profissional"><article><span className="quick-stats__icon">✦</span><div><strong>18 anos</strong><span>Curiosidade sem limite</span></div></article><article><span className="quick-stats__icon">⌘</span><div><strong>3º ano</strong><span>Técnico em Informática</span></div></article><article><span className="quick-stats__icon">◌</span><div><strong>Univap</strong><span>São José dos Campos</span></div></article></div>
          </div>
          <div className="hero__visual">
            <div className="pixel pixel--one">✦</div><div className="pixel pixel--two">♡</div>
            <div className="profile-card"><div className="profile-card__top"><span>PLAYER PROFILE</span><span>LVL 18</span></div><img src="/luana-perfil.jpeg" alt="Luana Pinheiro Cruz" /><div className="profile-card__bottom"><span className="avatar-dot" /><span>dev em evolução</span><span className="heart">♥</span></div></div>
            <div className="floating-tag floating-tag--code">&lt;/&gt; code mode</div><div className="floating-tag floating-tag--game">🎮 game lover</div>
          </div>
        </section>

        <section id="sobre" className="section-wrap about">
          <div className="section-heading"><p className="kicker">01 · SOBRE MIM</p><h2>Entre códigos, ideias e <em>boas missões.</em></h2></div>
          <div className="about__content"><p>Sou Luana, tenho 18 anos e moro em São José dos Campos, São Paulo. Curso o Ensino Médio junto ao Técnico em Informática na Univap, onde transformo a curiosidade em projetos de verdade.</p><p>Gosto de criar soluções que sejam úteis, acessíveis e gostosas de usar — seja um sistema, um jogo ou uma ideia que ainda está no rascunho. Para mim, cada projeto é uma nova fase para explorar.</p><div className="about__badges"><span>✦ criativa</span><span>✦ dedicada</span><span>✦ trabalho em equipe</span><span>✦ sempre aprendendo</span></div></div>
        </section>

        <section id="habilidades" className="section-wrap skills-section">
          <div className="section-heading"><p className="kicker">02 · INVENTÁRIO</p><h2>Minhas ferramentas de <em>aventura.</em></h2><p className="section-copy">Uma coleção em constante expansão, construída entre a sala de aula e muitos desafios práticos.</p></div>
          <div className="skills-layout">
            <div className="skill-panel skill-panel--tech"><div className="panel-heading"><span className="panel-icon">⌘</span><div><h3>Hard skills</h3><p>tecnologias e desenvolvimento</p></div></div><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
            <div className="skill-panel skill-panel--traits"><div className="panel-heading"><span className="panel-icon">✿</span><div><h3>Soft skills</h3><p>meu jeito de construir</p></div></div><ul className="trait-list"><li><span>01</span>Responsável e dedicada</li><li><span>02</span>Colaborativa em equipe</li><li><span>03</span>Busca melhoria constante</li><li><span>04</span>Comunicação e criatividade</li></ul></div>
            <div className="skill-panel skill-panel--languages"><div className="panel-heading"><span className="panel-icon">◌</span><div><h3>Idiomas</h3><p>comunicação sem fronteiras</p></div></div><div className="language-row"><span>Português</span><b>Nativo</b></div><div className="language-row"><span>Inglês</span><b>Intermediário</b></div><div className="language-row"><span>Espanhol</span><b>Básico</b></div><div className="language-row"><span>Italiano</span><b>Básico</b></div></div>
          </div>
        </section>

        <section id="projetos" className="section-wrap projects-section">
          <div className="section-heading section-heading--row"><div><p className="kicker">03 · QUEST LOG</p><h2>Projetos que saíram do <em>papel.</em></h2></div><a href="https://github.com/LuanaPin-Cruz" target="_blank" rel="noreferrer" className="text-link">Ver GitHub completo ↗</a></div>
          <div className="projects-grid">{projects.map((project) => <a key={project.title} href={project.link} target="_blank" rel="noreferrer" className={`project-card project-card--${project.accent}`}><div className="project-card__header"><span>{project.number}</span><span>abrir projeto ↗</span></div><div><p className="project-card__type">{project.type}</p><h3>{project.title}</h3><p className="project-card__description">{project.description}</p></div><div className="project-card__stack"><span>Tecnologias usadas</span><ul>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul></div></a>)}</div>
        </section>

        <section className="section-wrap education"><div className="education__label"><span>04</span><p>JORNADA ACADÊMICA</p></div><div className="education__items"><article><span className="education__date">2024 — 2026</span><h3>Ensino Médio + Técnico em Informática</h3><p>Colégios Univap · Unidade Centro</p></article><article><span className="education__date">2026</span><h3>Estágio em sistemas web</h3><p>Colégio Univap · desenvolvimento e manutenção de sistemas para a escola</p></article><article><span className="education__date">EXTRAS</span><h3>Python, inglês para TI, hackathons e feiras tech</h3><p>Aprendizado contínuo dentro e fora da sala de aula.</p></article></div></section>

        <section id="contato" className="contact section-wrap"><div className="contact__panel"><p className="kicker">05 · CONTATO</p><h2>Vamos criar algo <em>incrível?</em><span className="spark">✦</span></h2><p>Tem uma ideia, uma oportunidade ou só quer trocar uma ideia sobre tecnologia? Meu próximo projeto pode começar aqui.</p><div className="contact__actions"><a className="button button--primary" href="mailto:luana.pinheiro.cruz@gmail.com">Enviar e-mail <span>→</span></a><a className="button button--outline" href="https://www.linkedin.com/in/luana-pinheiro-20756333a" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="contact__details"><a href="tel:+5512997353885"><span>TELEFONE</span><strong>(12) 99735-3885</strong></a><a href="mailto:luana.pinheiro.cruz@gmail.com"><span>E-MAIL</span><strong>luana.pinheiro.cruz@gmail.com</strong></a><a href="https://github.com/LuanaPin-Cruz" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>@LuanaPin-Cruz ↗</strong></a></div></section>
      </main>
      <footer><span>© 2026 Luana Pinheiro Cruz</span><span>feito com café, curiosidade e um toque de roxo ♡</span></footer>
    </div>
  )
}
