// Chave da OpenAI guardada só neste navegador (localStorage). Nenhuma ferramenta a envia para
// outro lugar além de api.openai.com. A chave é cadastrada no botão "Chave da OpenAI" do menu.
//
// Uso numa ferramenta:
//   <script src="../../chave.js"></script>
//   const chave = CHAVE_OPENAI.ler();   // '' quando não há chave salva
//   fetch('https://api.openai.com/v1/...', { headers: { Authorization: 'Bearer ' + chave } })
const CHAVE_OPENAI = {
  nome: 'cf:openai:chave',
  ler() { try { return localStorage.getItem(this.nome) || ''; } catch (e) { return ''; } },
  gravar(valor) { try { localStorage.setItem(this.nome, String(valor).trim()); return true; } catch (e) { return false; } },
  apagar() { try { localStorage.removeItem(this.nome); } catch (e) {} },
  existe() { return !!this.ler(); },
  // para mostrar sem expor: sk-…a1b2
  mascarada() { const c = this.ler(); return c ? c.slice(0, 3) + '…' + c.slice(-4) : ''; },
};
