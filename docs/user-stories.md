# Histórias de Usuário — Agenda Saúde Tacaratu MVP

**Versão:** 1.0  
**Data:** 05/11/2026  
**Status:** Planejamento acadêmico

## 1. Objetivo

Descrever as funcionalidades do MVP a partir da perspectiva do visitante, utilizando histórias de usuário com critérios de aceite verificáveis em BDD/Gherkin.

## US01 — Visualizar campanhas de saúde

**História:** Como visitante, quero visualizar as campanhas de saúde disponíveis para que eu possa conhecer as ações divulgadas na plataforma.

**Prioridade:** Alta  
**Requisitos:** RF01, RF02, RF07, RF10  
**Caso de uso:** UC01

### Critério de aceite 1 — Listagem disponível

**Dado** que a aplicação possui campanhas demonstrativas disponíveis,  
**Quando** o visitante acessa a página inicial,  
**Então** o sistema deve apresentar a lista de campanhas com título, categoria, data e local.

### Critério de aceite 2 — Lista vazia

**Dado** que nenhuma campanha está disponível,  
**Quando** o visitante acessa a página inicial,  
**Então** o sistema deve informar que não existem campanhas disponíveis.

## US02 — Consultar detalhes de uma campanha

**História:** Como visitante, quero consultar os detalhes de uma campanha para que eu possa conhecer sua descrição, data, horário e local.

**Prioridade:** Alta  
**Requisitos:** RF03, RF08, RF09  
**Caso de uso:** UC02

### Critério de aceite 1 — Campanha existente

**Dado** que uma campanha está disponível,  
**Quando** o visitante seleciona essa campanha,  
**Então** o sistema deve apresentar título, categoria, descrição, data, horário e local.

### Critério de aceite 2 — Campanha inexistente

**Dado** que o identificador solicitado não corresponde a uma campanha existente,  
**Quando** o sistema consulta a API,  
**Então** a API deve retornar HTTP 404 com uma mensagem explicativa.

## US03 — Filtrar campanhas por categoria

**História:** Como visitante, quero filtrar as campanhas por categoria para que eu possa encontrar ações relacionadas ao meu interesse.

**Prioridade:** Alta  
**Requisitos:** RF04, RF05, RF06  
**Caso de uso:** UC03

### Critério de aceite 1 — Filtro aplicado

**Dado** que existem campanhas de diferentes categorias,  
**Quando** o visitante seleciona uma categoria,  
**Então** o sistema deve apresentar somente campanhas correspondentes à categoria escolhida.

### Critério de aceite 2 — Restaurar listagem

**Dado** que existe um filtro ativo,  
**Quando** o visitante seleciona a opção Todas as categorias,  
**Então** o sistema deve apresentar novamente todas as campanhas disponíveis.

### Critério de aceite 3 — Sem resultados

**Dado** que nenhuma campanha corresponde à categoria selecionada,  
**Quando** o filtro é aplicado,  
**Então** o sistema deve apresentar uma mensagem informando a ausência de resultados.

## US04 — Utilizar a plataforma em diferentes dispositivos

**História:** Como visitante, quero acessar a plataforma pelo celular ou computador para que eu possa consultar campanhas em diferentes dispositivos.

**Prioridade:** Alta  
**Requisitos:** RNF01, RNF02  
**Casos de uso relacionados:** UC01, UC02 e UC03

### Critério de aceite 1 — Interface responsiva

**Dado** que a plataforma está aberta em um dispositivo com largura de 375 px,  
**Quando** o visitante acessa a listagem,  
**Então** os elementos devem se adaptar à tela sem rolagem horizontal indevida.

### Critério de aceite 2 — Desktop

**Dado** que a plataforma está aberta em uma tela com largura de 1280 px,  
**Quando** o visitante acessa as campanhas,  
**Então** o conteúdo deve permanecer organizado e legível.

## US05 — Compreender falhas no carregamento

**História:** Como visitante, quero receber mensagens claras quando ocorrer um erro para que eu compreenda que as informações não puderam ser carregadas.

**Prioridade:** Média  
**Requisitos:** RNF08  
**Casos de uso relacionados:** UC01 e UC02

### Critério de aceite 1 — Falha de comunicação

**Dado** que a API está indisponível,  
**Quando** o visitante tenta carregar as campanhas,  
**Então** o sistema deve apresentar uma mensagem de erro compreensível.

## 2. Matriz de Rastreabilidade

| História | Requisitos | Casos de uso |
|---|---|---|
| US01 | RF01, RF02, RF07, RF10 | UC01 |
| US02 | RF03, RF08, RF09 | UC02 |
| US03 | RF04, RF05, RF06 | UC03 |
| US04 | RNF01, RNF02 | UC01, UC02, UC03 |
| US05 | RNF08 | UC01, UC02 |

## 3. Definição de Pronto (Definition of Done)

Uma história será considerada concluída quando:

- Os critérios de aceite tiverem sido verificados.
- O código correspondente estiver versionado em branch temática.
- O commit seguir Conventional Commits.
- O Pull Request estiver vinculado à Issue correspondente.
- O Pull Request estiver integrado à branch develop.
- A documentação estiver consistente com a funcionalidade implementada.

## 4. Observações

As histórias representam funcionalidades planejadas para o MVP acadêmico. Não envolvem dados reais de pacientes, autenticação nem agendamento real de consultas.

## 5. Referências Internas

- [Project Charter](project-charter.md)
- [Requisitos](requisitos.md)
- [Casos de Uso](casos-de-uso.md)
