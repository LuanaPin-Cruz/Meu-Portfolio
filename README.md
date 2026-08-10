# Portfólio — React + Vite

Portfólio pessoal com tema escuro e roxo, feito com React (Vite), pronto pra você editar, subir no GitHub e publicar.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## O que editar primeiro

Todo o conteúdo de exemplo está marcado com `// TODO`. Os principais lugares:

- `src/components/Hero.jsx` — nome, cargo e frase de efeito no terminal
- `src/components/About.jsx` — as 3 descrições sobre você
- `src/components/Skills.jsx` — sua stack real
- `src/components/Projects.jsx` — seus 3 projetos (nome, descrição, tags, link do GitHub/demo)
- `src/components/Contact.jsx` — seu GitHub, LinkedIn e e-mail
- `index.html` — título da aba e meta description

## Build para produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para hospedar.

## Publicar de graça

**GitHub Pages (com o pacote `gh-pages`):**
```bash
npm install gh-pages --save-dev
```
Adicione ao `package.json`:
```json
"homepage": "https://seu-usuario.github.io/nome-do-repo",
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
Depois: `npm run deploy`.

**Vercel ou Netlify (mais simples):** conecte o repositório do GitHub direto no site deles — ambos detectam Vite automaticamente. Build command: `npm run build`, output: `dist`.

## Estrutura

```
src/
  components/    → um componente + um CSS por seção
  hooks/         → useTypewriter (efeito de digitação do terminal)
  App.jsx        → junta todas as seções
  index.css      → design tokens (cores, fontes, espaçamento)
```
