// Lista única de ferramentas, usada pelo hub (/) e pela navegação (/tools/).
// Para adicionar uma: crie tools/<id>/index.html e acrescente uma linha aqui.
const FERRAMENTAS = [
  { id: 'mixer-de-sons', icone: '🎚️', nome: 'Mixer de sons', tags: ['áudio', 'foco'],
    desc: 'Misture ruídos de foco (branco, rosa, marrom, batida binaural) com chuva, fogueira, floresta e mais. Salva a sua configuração.' },
  { id: 'diferenca-horarios', icone: '🕘', nome: 'Diferença entre horários', tags: ['tempo'],
    desc: 'Calcula a duração entre dois horários (HH:MM), vários intervalos e o total em minutos.' },
  { id: 'contagem-regressiva', icone: '⏳', nome: 'Contagem regressiva', tags: ['tempo'],
    desc: 'Informe horas, minutos e segundos e acompanhe o tempo que falta, com pausa e alerta sonoro no fim.' },
  { id: 'container-redimensionavel', icone: '↔️', nome: 'Container redimensionável', tags: ['texto', 'design'],
    desc: 'Um texto num container que você arrasta para redimensionar, com edição do texto e tamanho da fonte.' },
  { id: 'json-minify', icone: '📦', nome: 'JSON Minify', tags: ['dev', 'texto'],
    desc: 'Cole o JSON formatado e receba tudo em uma linha só, com a economia de caracteres e botão de copiar.' },
  { id: 'contador-de-texto', icone: '🔤', nome: 'Contador de texto', tags: ['texto'],
    desc: 'Conta caracteres, palavras, linhas, parágrafos e estima o tempo de leitura.' },
];
