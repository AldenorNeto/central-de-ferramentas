// Lista única de ferramentas, usada pelo menu lateral (index.html).
// Para adicionar uma: crie tools/<id>/index.html, a linha aqui e o ícone em icones.js.
// Apps que moram em outro endereço levam `url` (abrem no mesmo quadro).
const FERRAMENTAS = [
  { id: 'mixer-de-sons', nome: 'Mixer de sons' },
  { id: 'diferenca-horarios', nome: 'Diferença entre horários' },
  { id: 'contagem-regressiva', nome: 'Contagem regressiva' },
  { id: 'container-redimensionavel', nome: 'Container redimensionável' },
  { id: 'json-minify', nome: 'JSON Minify' },
  { id: 'contador-de-texto', nome: 'Contador de texto' },
  { id: 'receber-colagem', nome: 'Receber colagem' },
  { id: 'lista-de-tarefas', nome: 'Tarefas', url: 'https://aldenorneto.github.io/lista-de-tarefas/' },
];
