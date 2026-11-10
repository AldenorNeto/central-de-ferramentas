// Ícones em SVG (traço fino, pontas retas). Uso: icone('relogio') devolve o <svg> pronto.
const ICONES = {
  // ferramentas
  'mixer-de-sons': 'M6 3v18M12 3v18M18 3v18M3.5 15h5M9.5 8h5M15.5 17h5',
  'diferenca-horarios': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5.5l3.5 2',
  'contagem-regressiva': 'M7 3h10M7 21h10M8 3v4l4 5-4 5v4M16 3v4l-4 5 4 5v4',
  'container-redimensionavel': 'M4 4h16v16H4zM20 12l-8 8M20 16.5l-3.5 3.5',
  'json-minify': 'M9 4H7v6l-2.5 2L7 14v6h2M15 4h2v6l2.5 2-2.5 2v6h-2',
  'contador-de-texto': 'M4 6h16M4 11h16M4 16h9M17 14v6M14 17h6',
  'lista-de-tarefas': 'M4 5h4v4H4zM4 15h4v4H4zM11 7h9M11 17h9M5 7l1 1 2-2.5',
  // mixer: famílias
  foco: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.5v1',
  clima: 'M7 17a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 8.5a3.8 3.8 0 0 1 .5 8.5zM8 20l1-2M12 20l1-2M16 20l1-2',
  natureza: 'M12 3L5 14h4l-3 5h12l-3-5h4zM12 19v3',
  ambientes: 'M3 20L12 5l9 15zM9.5 20l2.5-5 2.5 5',
  // mixer: canais
  white: 'M3 12h2l1.5-5 2 10 2-12 2 14 2-10 1.5 3H21',
  pink: 'M3 12h2l1.5-3 2 6 2-8 2 10 2-6 1.5 1H21',
  brown: 'M3 12h3l2-3 2 6 2-4 2 3 2-2h5',
  binaural: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H4zM17 14h3v6h-3z',
  rain: 'M7 14a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 5.5a3.8 3.8 0 0 1 .5 8.5zM8 17v3M12 17v4M16 17v3',
  thunder: 'M7 13a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 4.5a3.8 3.8 0 0 1 .5 8.5M13 11l-3 5h4l-2 5',
  wind: 'M3 9h10a3 3 0 1 0-3-3M3 14h14a3 3 0 1 1-3 3M3 19h6',
  winter: 'M12 3v18M4 7.5l16 9M20 7.5l-16 9M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5',
  forest: 'M12 3L6 12h3.5L5.5 18h13l-4-6H18zM12 18v3',
  stream: 'M3 8c3-3 4 3 7 0s4 3 7 0 3 1 4 1M3 14c3-3 4 3 7 0s4 3 7 0 3 1 4 1M3 20c3-3 4 3 7 0s4 3 7 0',
  waves: 'M3 9c2.2-2.5 3.8-2.5 6 0s3.8 2.5 6 0 3.8-2.5 6 0M3 15c2.2-2.5 3.8-2.5 6 0s3.8 2.5 6 0 3.8-2.5 6 0',
  crickets: 'M20 14A8 8 0 1 1 10 4a6.5 6.5 0 0 0 10 10z',
  fire: 'M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z',
  fireplace: 'M4 4h16v16H4zM4 9h16M9 20v-5a3 3 0 0 1 6 0v5',
  cave: 'M12 3v5M12 8a2.5 2.5 0 0 1 2.5 2.5c0 1.5-1.5 3-2.5 3.5-1-.5-2.5-2-2.5-3.5A2.5 2.5 0 0 1 12 8zM6 21h12M8 17h8',
  fountain: 'M12 4v8M12 12c-3 0-4-3-6-3M12 12c3 0 4-3 6-3M4 14h16l-2 6H6z',
  // interface
  volume: 'M4 9.5v5h3.5L12 18.5v-13L7.5 9.5zM15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11',
  salvar: 'M5 3h12l3 3v15H5zM8 3v6h8V3M8 21v-7h8v7',
  carregar: 'M4 8h6l2 2h8v10H4zM4 8V4h6l2 2',
  parar: 'M6 6h12v12H6z',
  livro: 'M5 4h13v16H5zM5 17h13M8 8h7',
  menu: 'M4 7h16M4 12h16M4 17h16',
  mais: 'M12 5v14M5 12h14',
  fechar: 'M6 6l12 12M18 6L6 18',
};

function icone(nome, extra) {
  const d = ICONES[nome] || ICONES.foco;
  return '<svg class="i' + (extra ? ' ' + extra : '') + '" viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
}
