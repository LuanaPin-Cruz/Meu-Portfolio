import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import './Contact.css'

// TODO: troque pelo seu e-mail real
const CHANNELS = [
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/LuanaPin-Cruz',
    href: 'https://github.com/LuanaPin-Cruz',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/luana-pinheiro',
    href: 'https://www.linkedin.com/in/luana-pinheiro-20756333a',
  },
  {
    icon: Mail,
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
              <c.icon className="contact__icon" size={22} strokeWidth={1.6} />
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