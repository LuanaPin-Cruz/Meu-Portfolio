import './Skills.css'

// TODO: ajuste para as tecnologias que você realmente domina
const CATEGORIES = [
  {
    title: 'Front-end',
    items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL'],
  },
  {
    title: 'Ferramentas',
    items: ['Git & GitHub', 'Docker', 'Linux', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="stack">
      <div className="container">
        <p className="eyebrow">stack</p>
        <h2 className="section-title">Ferramentas que eu uso no dia a dia</h2>
        <p className="section-intro">
          A caixa de ferramentas que sustenta os projetos que eu entrego.
        </p>

        <div className="skills__grid">
          {CATEGORIES.map((cat) => (
            <div className="skills__category" key={cat.title}>
              <h3 className="skills__category-title">{cat.title}</h3>
              <ul className="skills__list">
                {cat.items.map((item) => (
                  <li key={item} className="skills__badge">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
