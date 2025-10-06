```markdown
# ApoiaDev


ApoiaDev é uma plataforma open-source de apoio financeiro, construída para que criadores de conteúdo (desenvolvedores, designers, escritores, etc.) possam monetizar seu trabalho através de doações da comunidade.

O projeto simula um ambiente de Micro-SaaS, implementando funcionalidades essenciais como gestão de usuários, processamento de pagamentos e divisão de receitas.

## 🎯 Status do Projeto

> 🚧 Em Desenvolvimento

## 💡 Motivação

A economia dos criadores de conteúdo depende de plataformas que facilitem a monetização de forma segura e transparente. Este projeto nasceu da curiosidade de entender e construir a espinha dorsal de um sistema como esse.

O principal desafio foi criar uma solução robusta que resolvesse três problemas centrais:

1.  Como processar pagamentos online de forma segura?
2.  Como dividir automaticamente os valores recebidos entre múltiplas partes (a plataforma e o criador)?
3.  Como oferecer uma experiência de login fluida e segura sem gerenciar senhas diretamente?

Para solucionar essas questões, explorei a integração com gateways de pagamento, implementei uma lógica de split e utilizei o protocolo OAuth 2.0 para autenticação. O resultado é o ApoiaDev, um estudo prático de uma aplicação SaaS funcional. 

## ✨ Funcionalidades

- **Sistema de Autenticação:** Cadastro e login seguros com GitHub OAuth
- **Gestão de Perfis:** Criadores podem personalizar suas páginas públicas.
- **Fluxo de Doação:** Experiência de usuário simples e intuitiva para apoiadores.
- **Integração com Gateway de Pagamento:** Suporte para Stripe para transações seguras.
- **Split de Pagamento Automatizado:** A receita de cada doação é dividida programaticamente entre o criador e a plataforma, de acordo com as regras de negócio.
- **Dashboard do Criador:** Um painel para visualização de métricas, histórico de apoio e gerenciamento de conta.

## 🛠️ Tecnologias

| Ferramenta | Descrição                               |
|------------|-----------------------------------------|
| **Next.js**| Framework frontend para React.          |
| **Node.js**| Ambiente de execução do backend.        |
| **Prisma** | ORM para interação com o banco de dados.|
| **PostgreSQL**| Banco de dados relacional.            |
| **Stripe** | API para processamento de pagamentos.   |
| **Tailwind CSS** | Framework de estilização CSS.         |

## 🚀 Como Iniciar

**Pré-requisitos:** Você vai precisar do [Node.js](https://nodejs.org/), [Git](https://git-scm.com/) e um gerenciador de pacotes ([npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)) instalados.

```bash
# 1. Clone este repositório
$ git clone https://github.com/ivandronovais/apoia-dev.git

# 2. Acesse a pasta do projeto
$ cd ApoiaDev

# 3. Instale as dependências
$ npm install

# 4. Configure as variáveis de ambiente
# Crie um arquivo .env a partir do .env.example
$ cp .env.example .env

# 5. Rode as migrations do banco de dados (se aplicável)
$ npx prisma migrate dev

# 6. Inicie o servidor de desenvolvimento
$ npm run dev
