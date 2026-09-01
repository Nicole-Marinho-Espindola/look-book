# Look.Book

Uma plataforma social de moda para descobrir referências, organizar looks e acompanhar tendências em uma experiência visual inspirada em editoriais e moodboards.

> Projeto de estudo e portfólio em evolução. A interface web e a Home estão em desenvolvimento; backend, testes automatizados, CI/CD e infraestrutura Azure fazem parte da arquitetura planejada.

## Sobre o projeto

O Look.Book nasceu para reunir conteúdo de moda, curadoria visual e organização pessoal em um único produto. Além da experiência de usuário, o projeto serve como laboratório prático para estudar:

- arquitetura frontend e backend;
- padrões de projeto e código sustentável;
- testes automatizados;
- containers e entrega contínua;
- serviços de nuvem Microsoft Azure;
- fundamentos cobrados na certificação AZ-900.

## Estado atual

### Implementado

- aplicação web com Next.js, React e TypeScript;
- estilização com Tailwind CSS;
- layout compartilhado com Navbar e Sidebar;
- Home responsiva com:
  - seletor visual de moods;
  - filtros por categoria;
  - feed de cards em composição masonry;
  - prévia de tendências;
- dados simulados para desenvolvimento da interface;
- organização por funcionalidades em `src/features`;
- imagem Docker multi-stage;
- execução da aplicação com usuário não privilegiado no container;
- build standalone do Next.js.

### Em desenvolvimento ou planejado

- autenticação e perfis;
- guarda-roupa digital;
- chat e recursos sociais;
- backend em NestJS;
- banco PostgreSQL;
- armazenamento de imagens no Azure Blob Storage;
- testes unitários, de integração e ponta a ponta;
- pipelines com GitHub Actions;
- provisionamento e deploy no Azure;
- observabilidade, segurança e controle de custos.

As rotas de autenticação, chat, perfil, tendências e guarda-roupa já existem como pontos de entrada, mas ainda são telas iniciais.

## Tecnologias

### Stack atual

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- PostCSS
- ESLint
- Lucide React
- Docker

### Arquitetura-alvo

- NestJS para a API;
- PostgreSQL com Prisma;
- Vitest e Testing Library;
- Playwright;
- GitHub Actions;
- Bicep para infraestrutura como código;
- Azure Container Registry;
- Azure Container Apps;
- Azure Database for PostgreSQL;
- Azure Blob Storage;
- Azure Key Vault;
- Azure Monitor e Application Insights.

## Arquitetura

Hoje, o repositório contém a aplicação web:

```text
Navegador
    |
    v
Next.js
    |
    +-- App Router
    +-- Features
    +-- Componentes compartilhados
    +-- Mocks locais
```

A evolução planejada mantém o GitHub como fonte oficial do código e utiliza o Azure como plataforma de execução:

```text
Desenvolvimento
    |
    v
GitHub Repository
    |
    +-- Pull Request --> CI: lint, tipos, testes e build
    |
    +-- main ---------> GitHub Actions + OIDC
                              |
                              v
                    Azure Container Registry
                              |
                              v
                    Azure Container Apps
                         |            |
                         v            v
                    Next.js        NestJS API
                                         |
                  +----------------------+-------------------+
                  |                      |                   |
                  v                      v                   v
             PostgreSQL            Blob Storage          Key Vault
                                         |
                                         v
                             Monitor / Application Insights
```

O objetivo inicial é um monólito modular, evitando a complexidade operacional de microsserviços antes que ela seja necessária.

## Como executar localmente

### Pré-requisitos

- Node.js 22 ou versão compatível;
- npm;
- Docker, opcional.

### Instalação

```bash
git clone https://github.com/Nicole-Marinho-Espindola/look-book.git
cd look-book
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts disponíveis

```bash
npm run dev
npm run lint
npm run build
npm run start
```

| Script | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Executa as verificações do ESLint |
| `npm run build` | Gera o build de produção |
| `npm run start` | Executa o build de produção |

### Docker

```bash
docker build -t look-book .
docker run --rm -p 3000:3000 look-book
```

O container utiliza o output standalone do Next.js e expõe a aplicação na porta `3000`.

## Estrutura do projeto

```text
src/
├── app/                     # Rotas, layout raiz e estilos globais
├── features/                # Funcionalidades isoladas por domínio
│   ├── auth/
│   ├── chat/
│   ├── dashboard/
│   ├── profile/
│   ├── trends/
│   └── wardrobe/
├── services/                # Integrações e contratos de serviços
├── shared/                  # Componentes, estilos e recursos reutilizáveis
└── types/                   # Tipos compartilhados
```

Dentro de cada funcionalidade, componentes, páginas, mocks e tipos devem permanecer próximos do contexto em que são utilizados. Itens realmente reutilizáveis ficam em `shared`.

## Diretrizes de implementação

- Preferir componentes pequenos e responsabilidades explícitas.
- Manter estilos únicos próximos ao JSX com classes utilitárias.
- Extrair para arquivos de estilo apenas padrões recorrentes ou composições que precisam ser mantidas em conjunto.
- Usar `@apply` do Tailwind para esses estilos reutilizáveis.
- Evitar abstrações prematuras.
- Validar entradas no limite da aplicação.
- Não armazenar segredos no repositório.
- Registrar decisões arquiteturais relevantes em ADRs.

### Padrões previstos

- **Repository:** separação entre domínio e persistência;
- **Strategy:** diferentes estratégias de cálculo e ordenação de tendências;
- **Factory:** seleção de provedores de armazenamento;
- **Domain Events:** desacoplamento de ações como publicação, curtida e notificação.

Cada padrão deve ser introduzido somente quando resolver um problema real do produto.

## Estratégia de testes

A pirâmide planejada inclui:

1. testes unitários para regras de negócio, hooks e componentes;
2. testes de integração para módulos, banco de dados e rotas da API;
3. testes de contrato entre frontend e backend;
4. testes ponta a ponta para jornadas críticas;
5. verificações de acessibilidade nas principais telas.

Ferramentas previstas:

- Vitest;
- React Testing Library;
- Playwright;
- Supertest para a API NestJS.

## CI/CD e Azure

O repositório continuará no GitHub. A integração com Azure será realizada pelo GitHub Actions usando OpenID Connect, evitando credenciais permanentes no repositório.

### Pipeline de integração contínua

Em cada pull request:

1. instalar dependências com `npm ci`;
2. executar lint;
3. verificar tipos;
4. executar testes unitários e de integração;
5. gerar o build;
6. executar testes ponta a ponta;
7. analisar dependências e código.

### Pipeline de entrega contínua

Após merge na branch principal:

1. autenticar no Azure por OIDC;
2. construir as imagens de web e API;
3. publicar as imagens no Azure Container Registry;
4. provisionar ou atualizar a infraestrutura com Bicep;
5. implantar no Azure Container Apps;
6. executar smoke tests;
7. registrar a versão implantada.

Ambientes de homologação e produção devem utilizar GitHub Environments, aprovações e configurações independentes.

## Roadmap

### Fase 1 — Fundação frontend

- concluir telas e estados responsivos;
- criar tokens e componentes reutilizáveis;
- configurar testes de componentes;
- documentar decisões de arquitetura.

### Fase 2 — Backend

- estruturar o workspace para web, API e contratos;
- criar a API NestJS como monólito modular;
- adicionar PostgreSQL e migrations;
- implementar autenticação, usuários, posts, looks e tendências;
- documentar a API.

### Fase 3 — Qualidade e segurança

- ampliar cobertura de testes;
- adicionar testes de contrato e E2E;
- configurar proteção de branches;
- habilitar análise de dependências e código;
- definir gestão de segredos.

### Fase 4 — Azure e entrega contínua

- criar infraestrutura com Bicep;
- configurar Container Registry e Container Apps;
- conectar PostgreSQL, Blob Storage e Key Vault;
- implementar CI/CD com OIDC;
- configurar logs, métricas, alertas e orçamento.

### Fase 5 — Evolução do produto

- busca e recomendações;
- notificações;
- processamento assíncrono;
- cache;
- recursos de inteligência artificial avaliados por custo e benefício.

## Relação com a AZ-900

O projeto permite aplicar os principais grupos de conhecimento da certificação:

- **conceitos de nuvem:** elasticidade, disponibilidade, responsabilidade compartilhada, CapEx e OpEx;
- **arquitetura e serviços Azure:** regiões, grupos de recursos, identidade, computação, rede e armazenamento;
- **gestão e governança:** RBAC, políticas, tags, monitoramento, custos, Azure Resource Manager e infraestrutura como código.

Toda decisão de serviço deve incluir uma justificativa simples de custo, segurança, disponibilidade e manutenção.

## Variáveis de ambiente

A Home atual utiliza dados locais e não exige variáveis obrigatórias. Conforme as integrações forem adicionadas, as chaves necessárias deverão ser documentadas em um arquivo `.env.example`, sempre sem valores sensíveis.

Em produção, segredos deverão ser armazenados no Azure Key Vault e acessados por identidade gerenciada.

## Referências

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do NestJS](https://docs.nestjs.com/)
- [Azure Fundamentals — AZ-900](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/)
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
- [OpenID Connect do GitHub Actions com Azure](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-azure)
- [Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/)

## Licença

Projeto criado para estudo e portfólio. A licença de distribuição ainda não foi definida.
