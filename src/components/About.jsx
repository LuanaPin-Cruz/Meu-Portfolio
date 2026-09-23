import { UserRound, Workflow, Target } from 'lucide-react'
import './About.css'

const PILLARS = [
  {
    icon: UserRound,
    label: '01 · quem sou',
    text: 'Tenho 18 anos e já construo aplicações web, sistemas e automações de ponta a ponta. Comecei cedo e transformei curiosidade por tecnologia em prática real de desenvolvimento full-stack.',
  },
  {
    icon: Workflow,
    label: '02 · como trabalho',
    text: 'Atuo como freelancer entendendo o problema do cliente antes de escrever a primeira linha de código: escopo claro, prazos combinados e comunicação direta em cada etapa do projeto.',
  },
  {
    icon: Target,
    label: '03 · o que busco',
    text: 'Estou aberta a projetos freelance de desenvolvimento web, criação de sistemas internos, landing pages e integrações via API — de MVPs a produtos já em produção.',
  },
]

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <p className="eyebrow">sobre</p>
        <h2 className="section-title">Não é só código — é resolver o problema certo.</h2>
        <p className="section-intro">
          Um resumo rápido de quem eu sou, como trabalho e que tipo de projeto eu adoro pegar.
        </p>

        <div className="about__grid">
          {PILLARS.map((p) => (
            <div className="about__card" key={p.label}>
              <p.icon className="about__icon" size={22} strokeWidth={1.6} />
              <span className="about__label">{p.label}</span>
              <p className="about__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}