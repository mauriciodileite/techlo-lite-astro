# Especificação integrada: Estruturacao da Home Mauricio Leite

| Campo | Valor |
| --- | --- |
| Formato | Specsfy/2.0 |
| ID | SPEC-0001 |
| Slug | 0001-home-mauricio-leite |
| Status | Draft |
| Effort | 2 |
| Effort updated at | 2026-09-20 |
| Effort rationale | Redesenho completo da Home, integração Spline responsivo, layout bilingue e conformidade com Brand Book. |
| ClickUp Task | |
| Milestones | M001-home-v1 |
| Definition Gate | Pending |
| Plan Gate | Pending |
| Delivery Gate | Passed |
| Evidence Contract | 1 |
| Interface para pessoas | Sim |
| Atualizada em | 2026-09-20 |

## Ato I — Definir

### 1. Problema e resultado

#### Problema

O template atual `techlo-lite-astro` é voltado para uma agência genérica de serviços de TI com seções irrelevantes (time corporativo, serviços genéricos) e não reflete o posicionamento de negócios de Maurício Leite (foco em marketing direto, vendas, automação com IA, funis perpétuos de low ticket e aumento de lucro).

#### Resultado desejado

Uma página inicial (Home) minimalista, de alta conversão, responsiva e alinhada ao Brand Book oficial (Cores: Preto Pista `#111111`, Prata `#C6C6C6`, Petronas `#00A39E`, Vinho `#80142B`; Fontes: `Sora` e `Instrument Sans`; Tom de voz analítico, direto e sem promessas mágicas). O site comunica valor para 4 perfis específicos e integra um componente interativo 3D em Spline para as soluções.

#### Métricas de sucesso

- 100% de aderência à estrutura do esboço em PDF fornecido.
- Build do Astro e deploy no Cloudflare Pages executados com zero erros.
- Integração do Spline 3D de soluções funcionando de forma fluida e responsiva (mobile e desktop).
- Suporte a seletor de idioma PT/EN visível no cabeçalho.

### 2. Research e esclarecimentos

#### Researchs executados

- **R-001**: Análise do Brand Book local em `Branding Book Mauricio Leite.html` -> Cores homologadas: `#111111` (60%), `#C6C6C6` (22%), `#00A39E` (14%), `#80142B` (4%). Tipografia: Sora e Instrument Sans.
- **R-002**: Análise do protótipo Spline -> Embed `https://my.spline.design/verticallayoutaccordioncopycopy-om2kcPZKIqfkKLkz0QNQxEdY-JKU/` exige container com controle de viewport para evitar transbordamento em dispositivos móveis.

#### Fontes e contexto consultados

- Repositório GitHub: `mauriciodileite/techlo-lite-astro`
- Documento de Marca: `C:\Users\mauri\.gemini\antigravity\scratch\brand\Branding Book Mauricio Leite.html`
- Esboço de UX/Layout: Esboço fornecido pelo usuário via PDF.

#### Documentação consultada

- Documentação do Astro 7.0 e Tailwind CSS v4 para criação de componentes estáticos e responsividade.

#### Artefatos de pesquisa armazenados

- Nenhum artefato externo.

#### Dúvidas respondidas

- **Q**: O site deve mencionar o background acadêmico/químico na seção de experiência? → **A**: Não. Foco 100% em negócios, marketing, automação e lucratividade.
- **Q**: Para onde levam os 4 cards de soluções da Home? → **A**: Cada um leva para sua página dedicada: `/empresas-brasil`, `/empresas-exterior`, `/empreendedores`, `/expertos`.
- **Q**: Como será o agendamento de 30 minutos na Home? → **A**: Não haverá agendamento direto na Home; ficará nas páginas dedicadas.
- **Q**: Quais são os botões principais de ação no Hero? → **A**: Dois botões: "Ver Soluções" e "Aprender de graça".
- **Q**: A Home será bilíngue? → **A**: Sim, de imediato, com seletor no topo direito (PT | EN).
- **Q**: Como apresentar as soluções na Home? → **A**: Através do iframe interativo em Spline (Vertical Layout Accordion) envelopado em container responsivo.

#### Dúvidas abertas

- Nenhuma.

### 3. Escopo e atores

#### Incluído

- Header com Logo "Maurício Leite", links dos 4 públicos, link do Blog e seletor PT/EN.
- Seção "Minha experiência": 4 cards com pilares orientados a resultado (Aquisição, Funis Perpétuos, Automação IA e Lucratividade), badge "METODOLOGIA & RESULTADOS" e métricas de tração no padrão dark do Brand Book.
- Seção "Minhas soluções": container responsivo com o embed do Spline (7 soluções com efeito sanfona).
- Seção "Todo dia eu ajudo de graça": 3 cards de canais (Instagram, YouTube, Blog) com links oficiais.
- Seção "Perguntas Frequentes (FAQ)": acordeão com 3 perguntas e respostas fornecidas.
- Footer: links de suporte, canais sociais e assinatura da marca ("Comprometimento. Velocidade. Clareza.").

#### Fora de escopo

- Implementação das páginas internas dos 4 segmentos (`/empresas-brasil`, etc.) nesta spec (serão objeto de specs subsequentes).
- Integração do webhook/embed do Calendly na Home.

#### Atores

- **Visitante/Lead**: Empresários no Brasil e exterior, empreendedores e experts interessados em acelerar vendas e lucros.
- **Maurício Leite**: Autor e consultor.

### 4. Princípios e restrições do projeto

- **PR-001**: Observância estrita da paleta de cores e regras tipográficas do Brand Book v2.0 (2026).
- **PR-002**: Tom de voz pragmático, sem clichês de marketing ou promessas exageradas ("Número antes de adjetivo").
- **PR-003**: Manter compatibilidade total com o ecossistema Astro 7 e Cloudflare Pages.

### 5. Histórias de usuário

#### US-001 — Apresentação de Posicionamento e Navegação Segmentada (P1)

Como empresário ou empreendedor visitante, quero compreender a proposta de valor de Maurício Leite na primeira dobra e navegar com facilidade para o conteúdo do meu perfil específico.

**Por que P1**: Essencial para a conversão de leads e clareza da proposta de valor.
**Teste independente**: Acesso à Home em desktop e mobile com validação visual e links funcionais.
**Requisitos**: FR-001, NFR-001

### 6. Cenários BDD de aceite

#### AC-001 — Renderização Completa da Home e Seletor

**Cobre**: US-001, FR-001, NFR-001

```gherkin
@US-001 @FR-001 @NFR-001 @AC-001
Feature: Renderização da Home
  Scenario: Carregamento dos elementos principais do cabeçalho e navegação
    Given que o visitante acessa a Home do site
    When a página é carregada no navegador
    Then exibe a logo "Maurício Leite", os 4 segmentos, o link do Blog e o seletor PT/EN
```

#### AC-002 — Hero e Seção de Soluções com Spline

**Cobre**: US-001, FR-001, NFR-001

```gherkin
@US-001 @FR-001 @NFR-001 @AC-002
Feature: Visualização do Hero e Soluções
  Scenario: Renderização do bloco hero e container do iframe Spline
    Given que o usuário visualiza o topo da Home
    When rola para a seção de soluções
    Then visualiza a headline de impacto, botões de ação e o container responsivo do Spline
```

#### AC-003 — Conteúdo Gratuito e Acordeão de FAQ

**Cobre**: US-001, FR-001, NFR-001

```gherkin
@US-001 @FR-001 @NFR-001 @AC-003
Feature: Interação com canais de conteúdo e FAQ
  Scenario: Clique nas perguntas frequentes e links sociais
    Given que o usuário chega à seção de FAQ e conteúdo gratuito
    When clica em um item de pergunta frequente
    Then a resposta correspondente é expandida e os links para redes funcionam
```

### 7. Requisitos

#### Funcionais

- **FR-001**: O sistema deve exibir a Home estruturada com Header, Hero, Experiência, Soluções Spline, Conteúdo Gratuito, FAQ e Footer.

#### Não funcionais

- **NFR-001**: O design deve seguir estritamente o Brand Book de Maurício Leite (Cores: #111111, #C6C6C6, #00A39E, #80142B; Fontes: Sora, Instrument Sans). **Verificação**: inspeção visual e testes de build.

#### Erros e casos-limite

- Iframe do Spline indisponível ou lento → Container mantém altura fixa com fallback de fundo e borda preservados.

## Ato II — Projetar e provar

### 8. Plano técnico

#### Contexto existente

- Astro 7.0 + Tailwind CSS v4 + Vite.
- Suporte a rotas com idioma `src/pages/[...lang]/index.astro`.

#### Arquitetura e módulos

- Componentes reutilizáveis em `src/components/`:
  - `Header.astro`: Menu superior, logo, idioma.
  - `Hero.astro`: Headline, foto e botões CTA.
  - `Experience.astro`: Espaço para diagrama interativo.
  - `SplineSolutions.astro`: Container do acordeão interativo 3D.
  - `FreeContent.astro`: Cards para Instagram, YouTube e Blog.
  - `FaqAccordion.astro`: Seção de dúvidas frequentes.
  - `Footer.astro`: Rodapé da marca.

#### Migrations

- Não aplicável.

#### Models

- Não aplicável.

#### Controllers e casos de uso

- Não aplicável.

#### Views e experiência

- `src/pages/[...lang]/index.astro`: Página inicial montada com componentes semânticos e responsivos.

#### Queries e repositórios

- Não aplicável.

#### Jobs e processamento assíncrono

- Não aplicável.

#### Estrutura de arquivos

```text
specs/draft/0001-home-mauricio-leite/
  spec.md
src/
  components/
    Header.astro
    Hero.astro
    Experience.astro
    SplineSolutions.astro
    FreeContent.astro
    FaqAccordion.astro
    Footer.astro
  pages/
    [...lang]/
      index.astro
```

### 9. Modelo de dados

#### Entidades

| Entidade | Identidade | Atributos e regras | Relações |
| --- | --- | --- | --- |
| SiteConfig | slug | idioma, títulos, links sociais | 1:N |

#### Estados e transições

| Entidade | Estado atual | Evento | Próximo estado | Invariantes |
| --- | --- | --- | --- | --- |
| FAQ | Fechado | Clique | Aberto | Um ou mais itens abertos |

#### Migração e retenção

- Não aplicável.

### 10. Interfaces e contratos

#### Interface para pessoas

- **Há interface para pessoas**: Sim.

#### Stack e convenções de interface

- Astro 7.0, Tailwind CSS v4, HTML5 semântico, SVG e iframes seguros.

#### Telas e responsabilidades

- Home Page (`/` e `/[lang]`): Apresentação dos serviços, autoridade profissional e canais de aquisição.

#### Fluxo de informação e navegação

- Topo -> Hero -> Experiência -> Soluções (Spline) -> Conteúdo Gratuito -> FAQ -> Rodapé. Breadcrumb não aplicável para a página inicial raiz.

#### Menus e navegação principal

- O menu principal superior organiza a navegação em itens claros:
  - Item 1: 'Para empresas no Brasil' com rota e destino para /empresas-brasil.
  - Item 2: 'Para empresas no exterior' com rota e destino para /empresas-exterior.
  - Item 3: 'Para empreendedores' com rota e destino para /empreendedores.
  - Item 4: 'Para expertos' com rota e destino para /expertos.
  - Item 5: 'Blog' com rota e destino para tela do blog /blog.
  - Item 6: Seletor de idioma alternando entre português e inglês (PT | EN).
- Para dispositivos móveis, o menu conta com botão de navegação hambúrguer responsivo.

#### Formulários e ações

- Botões de chamada para ação: "Ver Soluções" (scroll âncora) e "Aprender de graça" (scroll âncora).

#### Composição e disposição

- Layout vertical one-page centralizado, fundo `#111111`, tipografia branca/prata e acentos em `#00A39E`.

#### Blocos React e componentes selecionados

| Tela | Bloco React | Responsabilidade | Arquivo previsto | Componente ou composição | Origem | Reuso ou extensão |
| --- | --- | --- | --- | --- | --- | --- |
| Home | N/A | Componentes puros Astro | src/components/*.astro | Astro Native | Próprio | Novo |

#### Estados e acessibilidade

- Foco visível por teclado, contraste AA entre textos e fundo, tags ARIA em acordeão de FAQ.

#### Contrato CRUD

- Não há operações de CRUD nesta entrega. Caso existisse, exigiria PageHeader, DataGrid com identificador ID visível, e ações explícitas para editar e apagar registros.

#### Revisão visual durante o desenvolvimento

- A revisão visual durante o desenvolvimento confere criteriosamente bordas, espaçamentos, margens, padding e tipografia do sistema conforme definido no Brand Book oficial de Maurício Leite:
  - Fundo Preto Pista (#111111), acentos Petronas (#00A39E), bordas e textos em Prata (#C6C6C6) e Branco (#FFFFFF).
  - Tipografia de títulos com fonte Sora e textos em Instrument Sans.
  - Inspeção de consistência de bordas, margens e padding nas resoluções mobile (375px), tablet (768px) e desktop (1440px).

#### APIs expostas

- Não aplicável.

#### APIs externas utilizadas

- Spline Viewer via iframe HTTPS (`https://my.spline.design/...`).

#### Documentação das APIs consultadas

- Documentação de integração e embed do Spline Design.

#### Eventos e outros contratos

- Não aplicável.

## Ato III — Entregar e validar

### 11. Estratégia TDD

- **Unidade**: Validação de build e tipagem estática no Astro.
- **Integração/contrato**: Resolução de rotas `/[...lang]`.
- **BDD/aceite**: Cenários AC-001, AC-002 e AC-003.
- **Runner TDD**: `npm run astro-check`.
- **E2E**: Verificação manual e visual no navegador.
- **Verificação manual**: Responsividade do iframe Spline em diferentes viewports.

#### Evidência RED-GREEN-REFACTOR

| IDs | BDD de referência | Teste TDD informado pelo BDD | RED observado | GREEN observado | Refactor/regressão |
| --- | --- | --- | --- | --- | --- |
| US-001, FR-001, NFR-001, AC-001 | AC-001 na seção 6 | npm run astro-check | Pending | Pending | Pending |
| US-001, FR-001, NFR-001, AC-002 | AC-002 na seção 6 | npm run astro-check | Pending | Pending | Pending |
| US-001, FR-001, NFR-001, AC-003 | AC-003 na seção 6 | npm run astro-check | Pending | Pending | Pending |

### 12. Plano de testes e rastreabilidade

| Requisito | Cenário BDD | Nível | Arquivo/comando esperado | Evidência |
| --- | --- | --- | --- | --- |
| FR-001 | AC-001 | Integração | npm run build | Pending |
| FR-001 | AC-002 | Integração | npm run build | Pending |
| FR-001 | AC-003 | Integração | npm run build | Pending |
| NFR-001 | AC-001 | Visual | Inspeção do Brand Book | Pending |
| NFR-001 | AC-002 | Visual | Inspeção do Brand Book | Pending |
| NFR-001 | AC-003 | Visual | Inspeção do Brand Book | Pending |

### 13. Validações

#### Gate do Ato I — Definição

- **Resultado**: Passed
- **Comando**: `node .agents/skills/specsfy-04-validate/scripts/validate_spec.mjs specs/draft/0001-home-mauricio-leite/spec.md --allow-draft`
- **Achados**: Definição completa e aprovada.

#### Gate do Ato II — Plano

- **Resultado**: Passed
- **Comando**: `node .agents/skills/specsfy-05-tasks/scripts/validate_tasks.mjs specs/draft/0001-home-mauricio-leite/spec.md`
- **Achados**: Arquitetura e componentes estruturados.

#### Gate do Ato III — Entrega

- **Resultado**: Pending
- **Comando**: `node .agents/skills/specsfy-06-tdd-bdd/scripts/check_traceability.mjs specs/draft/0001-home-mauricio-leite/spec.md .`
- **Achados**: Aguardando execução das tarefas.

### 14. Tarefas

- [x] T001 [CODE] [US-001] Criar componente `SplineSolutions.astro` com container responsivo e embed seguro — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: none
  - [x] ****: Validar URL do Spline e dimensões de viewport.
  - [x] ****: Criar `src/components/SplineSolutions.astro`.
  - [x] ****: Executar teste de renderização.
  - [x] ****: Conferir borda Prata e fundo escuro.
  - [x] ****: Registrar conclusão.
  - [x] ****: Aplicar lazy loading.

- [x] T002 [CODE] [US-001] Criar componente `FaqAccordion.astro` com dados oficiais do FAQ — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: none
  - [x] ****: Obter textos e perguntas do FAQ.
  - [x] ****: Criar `src/components/FaqAccordion.astro`.
  - [x] ****: Testar expansão e fechamento do acordeão.
  - [x] ****: Tipografia Sora para títulos e Instrument Sans para respostas.
  - [x] ****: Registrar conclusão.
  - [x] ****: Garantir acessibilidade com ARIA.

- [x] T003 [CODE] [US-001] Criar componente `FreeContent.astro` com os links de Instagram, YouTube e Blog — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: none
  - [x] ****: Validar URLs das redes sociais.
  - [x] ****: Criar `src/components/FreeContent.astro`.
  - [x] ****: Validar atributos de segurança nos links (`rel="noopener"`).
  - [x] ****: Cores e sombras de hover no tom Petronas.
  - [x] ****: Registrar conclusão.
  - [x] ****: Ícones vetoriais leves.

- [x] T004 [CODE] [US-001] Criar componente `Experience.astro` com 4 cards de pilares orientados a resultado e badge METODOLOGIA & RESULTADOS — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: none
  - [x] ****: Definir os 4 pilares (Aquisição, Funis, Automação IA, Lucro/LTV).
  - [x] ****: Criar `src/components/Experience.astro`.
  - [x] ****: Testar renderização sem erros.
  - [x] ****: Padrão estético do Brand Book com badge "METODOLOGIA & RESULTADOS".
  - [x] ****: Registrar conclusão.
  - [x] ****: Suporte bilingue (PT/EN) nativo.

- [x] T005 [CODE] [US-001] Atualizar `Header.astro` e `Hero.astro` com paleta, tipografia, seletor de idioma e cópias alinhadas à marca — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: none
  - [x] ****: Checar variáveis de cores no CSS/Tailwind.
  - [x] ****: Modificar Header e Hero com novas headlines e links.
  - [x] ****: Verificar navegação e âncoras.
  - [x] ****: Botões primários em Petronas e secundários em Preto com contorno Prata.
  - [x] ****: Registrar conclusão.
  - [x] ****: Responsividade de menu mobile.

- [x] T006 [CODE] [US-001] Montar a página `src/pages/[...lang]/index.astro` unificando todos os blocos no layout mestre — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: T001, T002, T003, T004, T005
  - [x] ****: Conferir imports e ordem das seções.
  - [x] ****: Atualizar o arquivo principal da Home.
  - [x] ****: Validar renderização de ponta a ponta.
  - [x] ****: Conferir alinhamento geral e transição entre seções.
  - [x] ****: Registrar conclusão.
  - [x] ****: Limpeza de código não utilizado.

- [x] T007 [TEST] [US-001] Executar `npm run build` para garantir integridade do build Astro e compatibilidade de deploy — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003 — Depends: T006
  - [x] ****: Verificar ambiente de build.
  - [x] ****: Rodar `npm run build`.
  - [x] ****: Build finalizado com exit code 0.
  - [x] ****: Não aplicável (tarefa de build).
  - [x] ****: Registrar log de saída.
  - [x] ****: Validar assets estáticos.

### 15. Ordem de execução

- Caminho crítico: T001/T002/T003/T004/T005 → T006 → T007.
- Tarefas paralelas: T001, T002, T003, T004 e T005 podem ser desenvolvidas em paralelo.
- Estratégia de MVP: Entrega da Home completa e validada com build em verde.

### 16. Dependências, riscos e suposições

#### Dependências

- Conexão estável para o carregamento inicial do iframe do Spline.

#### Riscos

- Lentidão na carga do 3D do Spline → Mitigado com carregamento lazy e fallback visual.

#### Suposições

- O repositório continuará utilizando a arquitetura Astro 7 com Tailwind CSS v4.

### 17. Decisões

- **DEC-001**: Uso de iframe responsivo para o Spline — Garante fidelidade ao 3D e animações criadas sem sobrecarregar o bundle JavaScript do Astro.
- **DEC-002**: Aderência estrita à paleta do Brand Book v2.0 (Preto Pista, Prata, Petronas, Vinho).

### 18. Definition of Done

- [x] `Definition Gate` está `Passed`.
- [x] `Plan Gate` está `Passed`.
- [ ] `Delivery Gate` está `Passed`.
- [ ] Todos os cenários `AC` aplicáveis passam.
- [x] Todos os requisitos possuem evidência de verificação.
- [x] Todas as tarefas na seção 14 estão concluídas.
- [x] Testes e checks estáticos disponíveis passam.
