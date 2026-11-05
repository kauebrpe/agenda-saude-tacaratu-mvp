# 🏥 Agenda Saúde Tacaratu — MVP

![Versão](https://img.shields.io/badge/vers%C3%A3o-0.1.0--planejada-blue)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Testes](https://img.shields.io/badge/testes-n%C3%A3o%20executados-lightgrey)
![Licença](https://img.shields.io/badge/licen%C3%A7a-a%20definir-lightgrey)

## 📌 Sobre o projeto

O **Agenda Saúde Tacaratu — MVP** é um protótipo acadêmico de aplicação web voltado à divulgação de campanhas e ações públicas de saúde em Tacaratu, Pernambuco.

A proposta é reunir informações como título, descrição, categoria, data, horário e local em uma interface simples e acessível.

O projeto integra as atividades do curso **Desenvolvimento Web Full Stack para MVPs**, associado ao **Projeto Agenda Saúde Digital Tacaratu**.

> **Aviso:** este é um protótipo acadêmico independente. Não representa uma plataforma oficial da prefeitura ou do SUS. Os dados utilizados serão fictícios e demonstrativos.

## 🎯 Objetivos

- Facilitar a consulta demonstrativa de campanhas de saúde.
- Organizar os requisitos e a documentação técnica.
- Aplicar desenvolvimento web Full Stack.
- Praticar Git Flow, GitHub Issues e Pull Requests.
- Demonstrar rastreabilidade entre planejamento e implementação.

## ✅ Funcionalidades e status

| Funcionalidade | Situação |
|---|---|
| Planejamento e especificações | ✅ Documentados |
| Listagem de campanhas | 📋 Planejada |
| Consulta de detalhes | 📋 Planejada |
| Filtro por categoria | 📋 Planejado |
| API REST | 📋 Planejada |
| Interface responsiva | 📋 Planejada |
| Testes automatizados | 📋 Planejados |

Esta tabela será atualizada conforme as funcionalidades forem implementadas e verificadas.

## 🧰 Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- Git e GitHub
- Visual Studio Code

Node.js e Express fazem parte da stack planejada. A configuração da aplicação será realizada nas próximas etapas.

## 📁 Estrutura do projeto

```text
agenda-saude-tacaratu-mvp/
├── docs/
│   ├── project-charter.md
│   ├── requisitos.md
│   ├── casos-de-uso.md
│   └── user-stories.md
├── src/
├── .gitignore
└── README.md
```

## 📖 Documentação técnica

- [Project Charter](docs/project-charter.md)
- [Requisitos Funcionais e Não Funcionais](docs/requisitos.md)
- [Casos de Uso](docs/casos-de-uso.md)
- [Histórias de Usuário](docs/user-stories.md)

## ⚙️ Instalação e execução local

### Pré-requisitos

- Git instalado.
- Node.js e npm instalados.
- Editor de código, preferencialmente VS Code.

### 1. Clonar o repositório

```bash
git clone https://github.com/kauebrpe/agenda-saude-tacaratu-mvp.git
```

### 2. Entrar na pasta

```bash
cd agenda-saude-tacaratu-mvp
```

### 3. Acessar a branch de desenvolvimento

```bash
git switch develop
```

### 4. Instalar e executar

A instalação das dependências e a execução do servidor ainda serão configuradas.

Após a implementação, esta seção será atualizada com os comandos reais de instalação e inicialização, que deverão ser testados localmente.

## 🌿 Estratégia Git Flow

| Branch | Finalidade |
|---|---|
| `main` | Versões estáveis de produção |
| `develop` | Integração do desenvolvimento |
| `feature/issue-XX-descricao` | Desenvolvimento de funcionalidades |
| `docs/issue-XX-descricao` | Criação e atualização da documentação |
| `fix/issue-XX-descricao` | Correção de defeitos |
| `release/x.y.z` | Preparação de versões estáveis |

**Fluxo adotado:**

```text
Issue → Branch temática → Commits → Push
                                 ↓
                         Pull Request
                                 ↓
                              develop
                                 ↓
                         Versão estável
                                 ↓
                               main
```

Os commits seguem o padrão **Conventional Commits**, e as versões estáveis serão identificadas com tags anotadas seguindo **Semantic Versioning**.

## 📋 Gestão de tarefas

As atividades são organizadas no [GitHub Issues](https://github.com/kauebrpe/agenda-saude-tacaratu-mvp/issues).

Cada tarefa deve possuir descrição, critérios de aceite e label, com referência ao respectivo Pull Request.

## 🔐 Privacidade e segurança

O MVP não exige cadastro de usuários, não coleta dados pessoais de saúde e não realiza agendamentos reais.

## 📄 Licença

Licença ainda não definida. Nenhuma permissão geral de reutilização é concedida por este README.

## 👨‍💻 Desenvolvimento

Projeto acadêmico individual desenvolvido por [kauebrpe](https://github.com/kauebrpe).

**Contexto:** Compet Superior — Projeto Agenda Saúde Digital Tacaratu.

**Última atualização documental:** 05/11/2026.
