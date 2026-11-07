# Matriz de Rastreabilidade — Agenda Saúde Tacaratu MVP

**Data:** 07/11/2026
**Versão:** 1.1
**Projeto:** Agenda Saúde Tacaratu — MVP

## 1. Objetivo

Relacionar os requisitos do MVP aos casos de uso, histórias de usuário, Issues do GitHub e evidências de implementação e validação.

## 2. Requisitos funcionais

| Requisito | Caso de uso | História | Issue | Evidência |
|---|---|---|---|---|
| RF01 — Listar campanhas | UC01 | US01 | #14, #15 | API GET /api/campanhas; testes automatizados |
| RF02 — Exibir informações | UC01 | US01 | #15 | Interface de campanhas; testes de campos obrigatórios da API |
| RF03 — Consultar detalhes | UC02 | US02 | #16 | API GET /api/campanhas/:id; testes automatizados |
| RF04 — Filtrar categorias | UC03 | US03 | #17 | Filtro no front-end; validação visual/manual |
| RF05 — Restaurar listagem | UC03 | US03 | #17 | Opção Todas as categorias; validação visual/manual |
| RF06 — Exibir estado vazio | UC03 | US03 | #18 | Tratamento no front-end; validação manual pendente |
| RF07 — API de listagem | UC01 | US01 | #14 | GET /api/campanhas; testes automatizados |
| RF08 — API de detalhes | UC02 | US02 | #14, #16 | GET /api/campanhas/:id; testes automatizados |
| RF09 — Campanha inexistente | UC02 | US02 | #14, #18 | Testes HTTP 404 e mensagem de erro |
| RF10 — Três campanhas fictícias | UC01 | US01 | #14, #20 | Teste de quantidade de campanhas |

## 3. Requisitos não funcionais

| Requisito | Caso de uso | História | Issue | Evidência |
|---|---|---|---|---|
| RNF01 — Interface responsiva | UC01, UC02, UC03 | US04 | #19 | CSS responsivo; verificação em 375 px e 1280 px pendente |
| RNF02 — Linguagem clara | UC01, UC02, UC03 | US04 | #19 | Textos da interface; inspeção visual |
| RNF03 — Execução com Node.js | — | — | #13 | npm start; execução local e deploy no Render |
| RNF04 — Respostas JSON | UC01, UC02 | US01, US02 | #14, #20 | Testes de respostas JSON da API |
| RNF05 — Organização no Git | — | — | #1, #22 | Estrutura src/docs, branches, commits e PRs |
| RNF06 — Consulta sem dados sensíveis | UC01, UC02, UC03 | — | #15, #22 | Consulta pública sem cadastro; dados fictícios |
| RNF07 — Ignorar dependências e segredos | — | — | #1 | Arquivo .gitignore; verificação documental |
| RNF08 — Mensagens de falha | UC01, UC02 | US05 | #18 | Tratamento no front-end; teste HTTP 404 da API |
| RNF09 — Organização de código | — | — | #13, #22 | Arquivos com responsabilidades separadas |
| RNF10 — Instruções documentadas | — | — | #11 | README com instalação, execução e testes |

## 4. Evidências técnicas

- **API:** `src/server.js`
- **Dados fictícios:** `src/campanhas.js`
- **Interface:** `src/public/`
- **Testes automatizados:** `tests/api.test.js`
- **Integração contínua:** `.github/workflows/ci.yml`
- **Docker:** `Dockerfile` e `.dockerignore`
- **Documentação:** `docs/requisitos.md`, `docs/casos-de-uso.md`, `docs/user-stories.md`
- **Issues:** https://github.com/kauebrpe/agenda-saude-tacaratu-mvp/issues
- **Aplicação publicada:** https://agenda-saude-tacaratu-mvp.onrender.com/
- **API de saúde:** https://agenda-saude-tacaratu-mvp.onrender.com/api/health

## 5. Situação da validação

- 20 testes automatizados aprovados localmente.
- 20 testes aprovados no GitHub Actions.
- Construção da imagem Docker aprovada no CI.
- Publicação no Render verificada por acesso à interface e à API.
- Testes automatizados de interação da interface ainda não implementados.
- Validações visuais e de responsividade devem ser registradas separadamente.

## 6. Critério de manutenção

Quando uma funcionalidade for alterada, atualizar os requisitos, casos de uso, histórias, Issues e testes relacionados, mantendo esta matriz consistente.

**Observação:** os números de Issues acima correspondem às 16 Issues reais do projeto. A vinculação foi realizada de acordo com os títulos das tarefas e os documentos existentes; não representa uma auditoria individual de cada Pull Request.
