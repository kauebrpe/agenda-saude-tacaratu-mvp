# Especificação de Requisitos — Agenda Saúde Tacaratu MVP

**Versão:** 1.0  
**Data:** 05/11/2026  
**Status:** Planejamento acadêmico

## 1. Objetivo

Definir os Requisitos Funcionais (RF) e Não Funcionais (RNF) de um MVP web para divulgação e consulta de campanhas e ações públicas de saúde em Tacaratu-PE.

Os requisitos apresentados neste documento descrevem funcionalidades planejadas, não necessariamente já implementadas.

## 2. Escopo

O MVP permitirá consultar campanhas demonstrativas de saúde, visualizar detalhes e filtrar informações por categoria.

Não estão incluídos cadastro de pacientes, prontuários, agendamentos reais, autenticação e integração com sistemas oficiais.

## 3. Atores

- **Visitante:** pessoa que acessa a aplicação para consultar informações.
- **Sistema:** aplicação que apresenta e organiza as campanhas demonstrativas.

Não haverá cadastro ou autenticação de visitantes nesta versão.

## 4. Requisitos Funcionais (RF)

| ID | Requisito | Prioridade | Critério de verificação |
|---|---|---|---|
| RF01 | O sistema deve listar campanhas de saúde disponíveis. | Alta | A página apresenta os registros retornados pela API. |
| RF02 | O sistema deve apresentar título, categoria, data e local de cada campanha. | Alta | Cada campanha exibe essas informações. |
| RF03 | O sistema deve permitir consultar os detalhes de uma campanha. | Alta | O visitante consegue visualizar descrição, data, horário e local. |
| RF04 | O sistema deve permitir filtrar campanhas por categoria. | Alta | O filtro apresenta apenas campanhas da categoria escolhida. |
| RF05 | O sistema deve permitir restaurar a listagem de todas as categorias. | Média | A opção de todas as categorias remove o filtro. |
| RF06 | O sistema deve exibir mensagem quando nenhuma campanha corresponder ao filtro. | Alta | Uma busca sem correspondências apresenta estado vazio. |
| RF07 | A API deve disponibilizar uma rota para consultar todas as campanhas. | Alta | Uma requisição GET retorna os registros demonstrativos. |
| RF08 | A API deve permitir consultar uma campanha pelo identificador. | Alta | Uma requisição GET com ID válido retorna a campanha correspondente. |
| RF09 | A API deve responder adequadamente quando uma campanha não existir. | Média | ID inexistente retorna HTTP 404 e mensagem explicativa. |
| RF10 | O MVP deve disponibilizar pelo menos três campanhas fictícias para demonstração. | Alta | Os registros estão disponíveis na execução local. |

## 5. Requisitos Não Funcionais (RNF)

| ID | Requisito | Categoria | Critério de verificação |
|---|---|---|---|
| RNF01 | A interface deve adaptar-se a celulares e computadores. | Usabilidade | Não ocorre rolagem horizontal indevida em larguras de 375 px e 1280 px. |
| RNF02 | As informações devem ser apresentadas com linguagem clara. | Usabilidade | Títulos, datas e locais são identificáveis na interface. |
| RNF03 | O projeto deve executar localmente utilizando Node.js e npm. | Portabilidade | A aplicação inicia seguindo as instruções do README. |
| RNF04 | A API deve utilizar respostas JSON nas rotas de dados. | Interoperabilidade | As respostas apresentam JSON válido. |
| RNF05 | O código deve ser organizado e versionado no Git. | Manutenibilidade | O repositório possui src, docs e histórico de commits. |
| RNF06 | O sistema não deve exigir dados pessoais de saúde para consulta. | Privacidade | A navegação pública funciona sem formulário de dados sensíveis. |
| RNF07 | Dependências e arquivos de ambiente devem ser ignorados pelo Git. | Segurança e organização | O .gitignore inclui node_modules e .env. |
| RNF08 | A aplicação deve apresentar mensagens compreensíveis em casos de falha. | Confiabilidade | Erros de consulta exibem aviso ao usuário. |
| RNF09 | O código deve seguir padrões consistentes de nomenclatura e organização. | Manutenibilidade | Os arquivos possuem responsabilidades identificáveis. |
| RNF10 | O MVP deve possuir instruções documentadas de instalação e execução. | Documentação | O README apresenta os comandos necessários. |

## 6. Regras de Negócio

**RN01:** As campanhas utilizadas na demonstração serão fictícias.

**RN02:** Uma campanha possui identificador, título, categoria, descrição, data, horário e local.

**RN03:** O visitante poderá consultar informações sem autenticação.

**RN04:** O filtro por categoria deve operar apenas sobre as campanhas disponíveis.

**RN05:** A aplicação não realizará agendamentos reais de consultas.

## 7. Rastreabilidade Inicial

| Requisito | Funcionalidade prevista | Referência de engenharia |
|---|---|---|
| RF01, RF02, RF10 | Listagem de campanhas | Issue de listagem / API |
| RF03, RF08, RF09 | Detalhes de campanhas | Issue de detalhes / API |
| RF04, RF05 | Filtro por categoria | Issue de filtros |
| RF06, RNF08 | Estados vazios e erros | Issue de tratamento de erros |
| RF07, RNF04 | API REST | Issue de API |
| RNF01, RNF02 | Interface responsiva | Issue de interface |
| RNF03, RNF10 | Execução local e README | Issues de setup / README |
| RNF05, RNF07, RNF09 | Organização de engenharia | Issues de setup / revisão |
| RNF06 | Proteção de dados pessoais | Restrição do escopo do MVP |

Os números definitivos das Issues e as referências a casos de uso e histórias de usuário serão acrescentados conforme a evolução do backlog.

## 8. Critérios Gerais de Aceite

- Os requisitos funcionais podem ser verificados por demonstração ou testes.
- Os requisitos não funcionais possuem critérios de avaliação.
- O documento permanece compatível com o Project Charter.
- As implementações futuras devem referenciar seus RFs correspondentes.
- O MVP não utiliza dados reais de pacientes.

## 9. Referências Internas

- [Project Charter](project-charter.md)
- Casos de uso: documento a elaborar.
- Histórias de usuário: documento a elaborar.
