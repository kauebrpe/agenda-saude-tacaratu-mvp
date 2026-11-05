# Especificação de Casos de Uso — Agenda Saúde Tacaratu MVP

**Versão:** 1.0  
**Data:** 05/11/2026  
**Status:** Planejamento acadêmico

## 1. Objetivo

Descrever as interações entre o visitante e a aplicação Agenda Saúde Tacaratu — MVP, identificando os fluxos principais, alternativos e de exceção.

## 2. Atores

- **Visitante:** morador ou qualquer pessoa que deseja consultar informações públicas sobre campanhas de saúde.
- **API do sistema:** componente interno responsável por disponibilizar os dados demonstrativos. Não é um ator externo.

## 3. Premissas

- A consulta é pública e não exige autenticação.
- Os dados utilizados são fictícios e demonstrativos.
- Não existe agendamento real de consultas.
- O sistema será executado inicialmente em ambiente local.

## UC01 — Consultar lista de campanhas

**Ator principal:** Visitante  
**Objetivo:** Visualizar campanhas e ações de saúde disponíveis.  
**Requisitos relacionados:** RF01, RF02, RF07, RF10.

### Pré-condições
- A aplicação está acessível.
- A API está disponível.

### Fluxo principal
1. O visitante acessa a página inicial.
2. O sistema solicita à API a lista de campanhas.
3. A API retorna os registros disponíveis.
4. O sistema apresenta as campanhas com título, categoria, data e local.
5. O visitante visualiza as informações.

### Fluxos alternativos
**A1 — Nenhuma campanha cadastrada**
1. A API retorna uma lista vazia.
2. O sistema apresenta a mensagem: Nenhuma campanha disponível.

### Fluxos de exceção
**E1 — Falha de comunicação**
1. A solicitação à API falha.
2. O sistema apresenta uma mensagem de erro compreensível.

### Pós-condições
A lista de campanhas ou uma mensagem apropriada é exibida ao visitante.

## UC02 — Consultar detalhes de uma campanha

**Ator principal:** Visitante  
**Objetivo:** Conhecer informações detalhadas de uma campanha.  
**Requisitos relacionados:** RF03, RF08, RF09.

### Pré-condições
- O visitante acessou a aplicação.
- Existe uma campanha disponível para seleção.

### Fluxo principal
1. O visitante seleciona uma campanha.
2. O sistema identifica o registro selecionado.
3. O sistema solicita os detalhes à API utilizando o identificador.
4. A API retorna os dados da campanha.
5. O sistema apresenta título, descrição, categoria, data, horário e local.

### Fluxos alternativos
**A1 — Retorno à listagem**
1. O visitante retorna à visualização de campanhas.
2. O sistema apresenta novamente a listagem.

### Fluxos de exceção
**E1 — Campanha inexistente**
1. A API retorna HTTP 404.
2. O sistema informa que a campanha não foi encontrada.

**E2 — Falha de comunicação**
1. Ocorre erro na solicitação.
2. O sistema apresenta aviso ao visitante.

### Pós-condições
O visitante visualiza os detalhes da campanha ou uma mensagem explicativa.

## UC03 — Filtrar campanhas por categoria

**Ator principal:** Visitante  
**Objetivo:** Encontrar campanhas de uma categoria específica.  
**Requisitos relacionados:** RF04, RF05, RF06.

### Pré-condições
- A página de campanhas está acessível.
- O filtro de categorias está disponível.

### Fluxo principal
1. O visitante acessa a listagem de campanhas.
2. O visitante seleciona uma categoria.
3. O sistema verifica as categorias dos registros disponíveis.
4. O sistema apresenta somente as campanhas correspondentes.
5. O visitante consulta os resultados filtrados.

### Fluxos alternativos
**A1 — Exibir todas as categorias**
1. O visitante seleciona Todas as categorias.
2. O sistema remove o filtro.
3. Todas as campanhas disponíveis são exibidas.

**A2 — Nenhum resultado**
1. Não existem campanhas correspondentes à categoria.
2. O sistema apresenta uma mensagem de ausência de resultados.

### Fluxos de exceção
**E1 — Falha no carregamento dos dados**
1. A aplicação não consegue obter a lista de campanhas.
2. O sistema informa que não foi possível carregar os dados.

### Pós-condições
A listagem corresponde ao filtro selecionado ou apresenta uma mensagem adequada.

## 4. Matriz de Rastreabilidade

| Caso de uso | Requisitos funcionais | Ator |
|---|---|---|
| UC01 — Consultar campanhas | RF01, RF02, RF07, RF10 | Visitante |
| UC02 — Consultar detalhes | RF03, RF08, RF09 | Visitante |
| UC03 — Filtrar campanhas | RF04, RF05, RF06 | Visitante |

## 5. Requisitos Não Funcionais Associados

- RNF01: interface responsiva.
- RNF02: linguagem clara.
- RNF04: respostas JSON da API.
- RNF06: consulta sem coleta de dados pessoais de saúde.
- RNF08: apresentação de mensagens de erro compreensíveis.

## 6. Critérios Gerais de Validação

- UC01: listar campanhas ou apresentar mensagem de ausência de dados.
- UC02: mostrar detalhes de um registro existente e tratar identificadores inválidos.
- UC03: filtrar corretamente e permitir restaurar a lista completa.
- As interações devem funcionar sem cadastro ou autenticação.
- Os dados utilizados devem ser exclusivamente demonstrativos.

## 7. Referências Internas

- [Project Charter](project-charter.md)
- [Requisitos Funcionais e Não Funcionais](requisitos.md)
- [Histórias de Usuário](user-stories.md) — documento previsto.
