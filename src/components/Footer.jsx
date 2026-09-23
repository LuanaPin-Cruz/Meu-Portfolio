import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Luana Pinheiro Cruz. Construído com React & Three.js.</span>
        <a href="#top">voltar ao topo ↑</a>
      </div>
    </footer>
  )
}