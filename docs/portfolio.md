# Portfólio de Luana Pinheiro Cruz

## Finalidade

Este site apresenta Luana Pinheiro Cruz como estudante de Informática da Univap e reúne seus principais projetos, habilidades, formação e formas de contato. A identidade visual combina roxo, tecnologia e referências leves a jogos, mantendo uma leitura clara em telas grandes e celulares.

## Conteúdo principal

O portfólio mostra uma apresentação pessoal, hard skills, soft skills, idiomas, formação acadêmica e links de contato. A foto usada na apresentação fica em `public/luana-perfil.jpeg`.

Os cartões de projetos levam ao GitHub: TCC sobre leucemia, Faltas CTI e Detector de Libras. Os dois primeiros repositórios encontrados publicamente foram vinculados de forma direta; como o repositório Faltas CTI não está público com esse nome, seu cartão abre a busca de repositórios no perfil. Quando o endereço correto estiver disponível, o link deve ser atualizado em `src/App.jsx`.

## Publicação

O projeto usa React com Vite. O Vercel detecta essa estrutura e publica o resultado do comando de build automaticamente após o envio das alterações ao GitHub.

Para a prévia local, use `npm run dev`, e não a extensão Live Server. O `esbuild` é a ferramenta usada pelo Vite para processar o projeto; sua permissão de instalação está declarada no `package.json` para os gerenciadores npm que exigem essa aprovação.

As dependências em `node_modules/` são instaladas automaticamente e não fazem parte do repositório. Isso garante que o Vercel use os executáveis próprios do ambiente Linux durante a publicação.
