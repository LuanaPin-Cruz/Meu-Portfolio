import { useTypewriter } from '../hooks/useTypewriter'
import Scene3D from './Scene3D'
import './Hero.css'

const TERMINAL_LINES = [
  { prompt: '~$', text: 'whoami', speed: 55 },
  { prompt: '', text: 'Luana Pinheiro Cruz — Dev Full-Stack & Freelancer, 18 anos', speed: 16, isOutput: true },
  { prompt: '~$', text: 'cat foco.txt', speed: 55 },
  {
    prompt: '',
    text: 'Construo sites, sistemas e integrações sob medida — do primeiro protótipo à entrega em produção.',
    speed: 14,
    isOutput: true,
  },
  { prompt: '~$', text: 'status --disponibilidade', speed: 55 },
  { prompt: '', text: 'disponível para novos projetos freelance ✓', speed: 20, isOutput: true, isStatus: true },
]

export default function Hero() {
  const { renderedLines, isDone } = useTypewriter(TERMINAL_LINES)

  return (
    <section id="top" className="hero">
      <Scene3D />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">disponível para freelance</p>
          <h1 className="hero__title">
            Eu transformo <span className="hero__highlight">ideias em software</span> que funciona de verdade.
          </h1>
          <p className="hero__subtitle">
            Sou desenvolvedor(a) de TI focado em construir produtos web rápidos, bem estruturados e
            fáceis de manter — do zero ou evoluindo o que você já tem.
          </p>
          <div className="hero__actions">
            <a href="#projetos" className="btn btn--primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn btn--ghost">
              Falar comigo
            </a>
          </div>
        </div>

        <div className="terminal" role="img" aria-label="Terminal simulando apresentação pessoal">
          <div className="terminal__bar">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
            <span className="terminal__path">bash — ~/portfolio</span>
          </div>
          <div className="terminal__body">
            {renderedLines.map((line, i) => (
              <p
                key={i}
                className={`terminal__line ${line.isOutput ? 'terminal__line--output' : ''} ${
                  line.isStatus ? 'terminal__line--status' : ''
                }`}
              >
                {line.prompt && <span className="terminal__prompt">{line.prompt}</span>}
                {line.typed}
                {!isDone && i === renderedLines.length - 1 && <span className="terminal__cursor" />}
              </p>
            ))}
            {isDone && (
              <p className="terminal__line">
                <span className="terminal__prompt">~$</span>
                <span className="terminal__cursor terminal__cursor--idle" />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}