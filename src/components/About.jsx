import './About.css'

const PILLARS = [
  {
    label: '01 · quem sou',
    // TODO: troque por 2-3 frases reais sobre sua trajetória
    text: 'Desenvolvedor(a) de TI com experiência prática construindo aplicações web, integrações e automações. Gosto de transformar problemas reais em soluções simples de usar e fáceis de manter.',
  },
  {
    label: '02 · como trabalho',
    // TODO: descreva seu processo/forma de trabalhar com clientes
    text: 'Atuo como freelancer entendendo o problema do cliente antes de escrever a primeira linha de código: escopo claro, prazos combinados e comunicação direta em cada etapa do projeto.',
  },
  {
    label: '03 · o que busco',
    // TODO: diga que tipo de projeto/cliente você quer atrair
    text: 'Estou aberto(a) a projetos freelance de desenvolvimento web, criação de sistemas internos, landing pages e integrações via API — de MVPs a produtos já em produção.',
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
              <span className="about__label">{p.label}</span>
              <p className="about__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
