# Central de ferramentas

Ferramentas pequenas que rodam direto no navegador, sem instalar nada e sem servidor. Cada uma é uma página HTML autossuficiente em `tools/<nome>/index.html`, e a página inicial (`index.html`) é um menu lateral que abre cada uma ao lado. O visual comum fica em `tema.css`.

Publicado em: https://aldenorneto.github.io/central-de-ferramentas/

## Ferramentas

| Ferramenta | O que faz |
|---|---|
| `mixer-de-sons` | Mistura ruídos de foco e sons ambientes, com salvar/carregar configuração |
| `diferenca-horarios` | Duração entre horários (HH:MM), vários intervalos e total em minutos |
| `contagem-regressiva` | Contagem regressiva em horas, minutos e segundos |
| `container-redimensionavel` | Texto num container que se redimensiona, com fonte ajustável |
| `json-minify` | Cola o JSON formatado e devolve em uma linha só, com botão de copiar |
| `contador-de-texto` | Caracteres, palavras, linhas, parágrafos e tempo de leitura |

## Adicionar uma ferramenta

1. Crie `tools/<id>/index.html`, carregando `../../tema.css`.
2. Acrescente uma linha ao array `FERRAMENTAS` em `ferramentas.js` (o menu lateral lê dele).
3. Crie o ícone em `icones.js` (chave igual ao `id`).
4. Faça commit e push; o GitHub Pages publica sozinho.

## Ferramentas que usam chave de API

Nada de chave no código nem no repositório (ele é público). Ferramentas que precisarem de uma chave devem pedi-la ao usuário e guardá-la só no `localStorage` do navegador, nunca enviando para outro lugar além do serviço da própria chave.

Atenção: todas as ferramentas compartilham a mesma origem (`aldenorneto.github.io`), então o `localStorage` é compartilhado entre elas. Uma chave salva por uma ferramenta pode ser lida por qualquer outra página desta central. Por isso: use um prefixo por ferramenta (`cf:<id>:chave`), não carregue scripts de terceiros nessas páginas e revise toda ferramenta nova antes de publicar.

## Áudios do mixer

O mixer funciona sozinho com sons sintetizados pelo navegador. A pasta `tools/mixer-de-sons/sons/` fica fora do git (`.gitignore`) de propósito: o pacote Cozy Nature Ambience, usado localmente, não permite redistribuição dos arquivos. Se a pasta existir, a página oferece a opção "Arquivos"; se não, só o modo sintetizado aparece.
