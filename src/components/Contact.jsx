import './Contact.css'

// TODO: troque pelos seus links e e-mail reais
const CHANNELS = [
  {
    label: 'GitHub',
    value: 'github.com/seu-usuario',
    href: 'https://github.com/seu-usuario',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/seu-usuario',
    href: 'https://linkedin.com/in/seu-usuario',
  },
  {
    label: 'E-mail',
    value: 'seu.email@exemplo.com',
    href: 'mailto:seu.email@exemplo.com',
  },
]

export default function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <p className="eyebrow">contato</p>
        <h2 className="section-title">Vamos conversar sobre seu projeto?</h2>
        <p className="section-intro">
          Estou disponível para projetos freelance. Me chama por qualquer um dos canais abaixo.
        </p>

        <div className="contact__grid">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="contact__card"
            >
              <span className="contact__label">{c.label}</span>
              <span className="contact__value">{c.value}</span>
              <span className="contact__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
