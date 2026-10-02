# Especificação integrada: Ecossistema Completo Maurício Leite (Home, Segmentos, Blog e Rastreamento)

| Campo | Valor |
| --- | --- |
| Formato | Specsfy/2.0 |
| ID | SPEC-0001 |
| Slug | 0001-home-mauricio-leite |
| Status | Draft |
| Effort | 5 |
| Effort updated at | 2026-09-24 |
| Effort rationale | Expansão de escopo para cobrir o ecossistema completo: Home consolidada, 4 Landing Pages de Públicos (/empresas-brasil, /empresas-exterior, /empreendedores, /expertos), incorporação do Blog, embed do Calendly, componentes de vídeo e infraestrutura técnica de SEO/GTAG/Cloudflare. |
| ClickUp Task | |
| Milestones | M001-site-completo-v1 |
| Definition Gate | Pending |
| Plan Gate | Pending |
| Delivery Gate | Pending |
| Evidence Contract | 1 |
| Interface para pessoas | Sim |
| Atualizada em | 2026-09-24 |

## Ato I — Definir

### 1. Problema e resultado

#### Problema

O site precisa posicionar com máxima clareza e autoridade as soluções de negócios de Maurício Leite, convertendo 4 perfis específicos de visitantes sem dispersão:
1. Empresas no Brasil buscando terceirização/gestão de marketing e CAC previsível (agência aiSIM);
2. Empresas no exterior buscando tração e faturamento em moeda forte;
3. Empreendedores buscando formação e processos internos em automações de IA;
4. Experts buscando arquitetura de funis perpétuos de low ticket.

Além disso, a plataforma exige um blog indexável para SEO orgânico, integração com Calendly para agendamentos sem fricção e infraestrutura completa de rastreamento (GTAG, Meta Pixel, Search Console, DNS Cloudflare).

#### Resultado desejado

Ecossistema digital completo em Astro 7 + Tailwind CSS v4, minimalista, ultrarrápido, responsivo e 100% alinhado ao Brand Book oficial (Cores: Preto Pista `#111111`, Prata `#C6C6C6`, Petronas `#00A39E`, Vinho `#80142B`; Fontes: `Sora` e `Instrument Sans`):
- **Home (`/`)**: 4 cards de soluções orientados por perfil com botões contextuais ("Falar com a agência" / "Conhecer") e 4 cards de resultados;
- **Para empresas no Brasil (`/empresas-brasil`)**: Hero com One Belief + vídeo de 1 min + Para quem é + Como trabalhamos (cards) + O que fazemos + FAQ aiSIM + CTA com scroll âncora para embed do Calendly;
- **Para empresas no exterior (`/empresas-exterior`)**: Hero com One Belief + vídeo de 1 min + O que fazemos + Quanto custa + Qual resultado esperado + FAQ + CTA com scroll âncora para embed do Calendly;
- **Para empreendedores (`/empreendedores`)**: Hero com One Belief + 2 cards de modalidades ("Você pode aprender comigo de duas formas") + Tabela comparativa lado a lado ("Qual é melhor para você?") + FAQ + Rodapé oficial;
- **Para experts (`/expertos`)**: Hero com One Belief + vídeo de 1 min + estrutura informativa com tabela comparativa de formatos de parceria + FAQ + embed do Calendly;
- **Blog (`/blog`)**: Incorporação do projeto de blog Astro externo unificado ao design system;
- **Rastreamento & Infraestrutura**: Google Tag (GA4/GTAG), Meta Pixel no `<head>`, verificação no Google Search Console, validação de SERP/Backlinks no DataForSEO e migração de DNS da Hostinger para a Cloudflare com SSL Full.

#### Métricas de sucesso

- 100% de aderência às estruturas e briefings aprovados.
- Build do Astro e deploy no Cloudflare Pages executados com zero erros.
- Tempo de carregamento sub-segundo (< 1s) em 4G móvel.
- Integração fluida do embed do Calendly sem quebras em mobile e desktop.
- Suporte a seletor de idioma PT/EN visível no cabeçalho.
- Zero erros de rastreamento no GTAG e Meta Pixel.

### 2. Research e esclarecimentos

#### Researchs executados

- **R-001**: Análise do Brand Book local em `Branding Book Mauricio Leite.html` -> Cores homologadas: `#111111` (60%), `#C6C6C6` (22%), `#00A39E` (14%), `#80142B` (4%). Tipografia: Sora e Instrument Sans.
- **R-002**: Substituição de Spline 3D por componentes nativos Astro/Tailwind -> Redução de payload de ~5MB para < 5KB, viabilizando 100% de velocidade no mobile.
- **R-003**: Benchmark de tabela comparativa e cards de oferta direta (estilo referência aprovada) adaptados ao tema dark do Brand Book.
- **R-004**: Estrutura de One Belief (Mecanismo Único, Nova Oportunidade, Desejo, Gimmick Name) aplicada às páginas de conversão direta.

#### Fontes e contexto consultados

- Repositório GitHub: `mauriciodileite/techlo-lite-astro`
- Documento de Marca: `C:\Users\mauri\.gemini\antigravity\scratch\brand\Branding Book Mauricio Leite.html`
- Referências visuais fornecidas pelo usuário para cards e tabela comparativa.

#### Documentação consultada

- Documentação do Astro 7.0 e Tailwind CSS v4.
- Documentação da API de embed do Calendly.
- Diretrizes de DNS e SSL Full da Cloudflare.

#### Artefatos de pesquisa armazenados

- Nenhum artefato externo.

#### Dúvidas respondidas

- **Q**: Como será o agendamento nas páginas de empresas e experts? → **A**: Scroll âncora suave até a seção final com o embed do Calendly.
- **Q**: A página de empreendedores terá vídeo? → **A**: Não, terá o One Belief puro seguido dos 2 cards de curso/mentoria e da tabela comparativa.
- **Q**: Quais são os CTAs dos cards da Home? → **A**: Cards 1 e 2: "Falar com a agência"; Cards 3 e 4: "Conhecer".
- **Q**: Como o Blog será incorporado? → **A**: Importação e adaptação de projeto Astro externo dedicado ao repositório unificado.
- **Q**: Como será o rastreamento? → **A**: Google Tag (GTAG) e Meta Pixel no `<head>`, com sitemap indexado no Search Console.

#### Dúvidas abertas

- Nenhuma para o Ato I.

### 3. Escopo e atores

#### Incluído

- **Header Oficial**: Logo oficial monograma ML, navegação para os 4 públicos, link do Blog e seletor PT/EN.
- **Home (`/`)**:
  - Hero com headline, foto oficial e 2 CTAs ("Ver Soluções" e "Aprender de graça").
  - Seção "Minha experiência": 4 cards com pilares orientados a resultado (Aquisição, Funis, Automação IA, Lucratividade/LTV) sob o badge "METODOLOGIA & RESULTADOS".
  - Seção "Minhas soluções": 4 cards de perfis alinhados ao menu superior com botões de ação ("Falar com a agência" / "Conhecer").
  - Seção "Todo dia eu ajudo de graça": 3 cards de canais (Instagram, YouTube, Blog).
  - Seção "Perguntas Frequentes (FAQ)": acordeão acessível com 3 perguntas.
  - Footer oficial: suporte, canais sociais e assinatura da marca ("Comprometimento. Velocidade. Clareza.").
- **Página Empresas no Brasil (`/empresas-brasil`)**:
  - Hero One Belief ("Contratar empresa que conhece o algoritmo das redes sociais, é a chave para trazer compradores sem objeção") + player de vídeo 1 min + botão "Solicitar orçamento" (scroll âncora).
  - Seção "Para quem é" ("A agência aiSIM é para quem quer vender com lucro todos os dias. De negócio local a grandes operações online.").
  - Seção "Como trabalhamos" (4 cards: Metodologia VCEC, Sem burocracia para falar com a gente, Facilitamos a venda, Tudo em um lugar só).
  - Seção "O que fazemos" (Cards: Captação de leads e vendas, Desenvolvimento exclusivo).
  - Seção FAQ da agência aiSIM (5 perguntas oficiais sobre perfil, plataformas geridas, orçamento, expectativas de resultado e serviços adicionais multicanal de IA).
  - Seção CTA Final "Pronto para aumentar seu lucro líquido com uma agência parceira?" com embed oficial do Calendly (`mauricioleitecontato`).
- **Página Empresas no Exterior (`/empresas-exterior`)**:
  - Hero One Belief + espaço para vídeo de 1 min + botão scroll âncora.
  - Seção "O que fazemos" (foco internacional).
  - Seção "Quanto custa" (moeda forte).
  - Seção "Qual resultado esperado".
  - Seção FAQ internacional.
  - Seção CTA Final com embed do Calendly.
- **Página Empreendedores (`/empreendedores`)**:
  - Hero One Belief focado em empresários/donos de negócio (sem vídeo).
  - Seção "Você pode aprender comigo de duas formas" (2 cards de modalidades).
  - Seção "Qual é melhor para você?" (Tabela comparativa lado a lado).
  - Seção FAQ (5 perguntas oficiais sobre experiência, custo, mentoria vs curso, tempo de acesso e aplicabilidade).
  - Footer oficial da marca.
- **Página Experts (`/expertos`)**:
  - Hero One Belief focado em infoprodutores/especialistas + vídeo de 1 min.
  - Seções estruturais de oferta com tabela comparativa de formatos de parceria.
  - Seção FAQ para experts.
  - Seção CTA Final com embed do Calendly.
- **Página Blog (`/blog`)**:
  - Integração do projeto Astro externo dedicado ao Blog, adaptado ao design system e tipografia do Brand Book.
- **Infraestrutura Técnica & SEO**:
  - Script Google Tag (GTAG) e Meta Pixel no `<head>` global (`Head.astro`).
  - Geração dinâmica de sitemap e tags Open Graph (`og:image`, `og:title`) em todas as rotas.
  - Configuração do Google Search Console.
  - Checklist de migração de DNS Hostinger -> Cloudflare (SSL Full).

#### Fora de escopo

- Implementação de gateway de pagamento próprio (checkout de cursos utilizará plataformas externas tipo Hotmart/Kiwify).
- Produção física dos vídeos (gravação dos vídeos de 1 min é responsabilidade do autor).

#### Atores

- **Empresário Brasil/Exterior**: Busca delegar tráfego e marketing para a agência aiSIM.
- **Empreendedor**: Busca treinamento e automação interna com IA.
- **Expert / Produtor**: Busca coprodução ou mentoria em funis perpétuos de low ticket.
- **Maurício Leite**: Autor, consultor e estrategista.

### 4. Princípios e restrições do projeto

- **PR-001**: Observância estrita da paleta de cores e regras tipográficas do Brand Book v2.0 (Preto Pista `#111111`, Prata `#C6C6C6`, Petronas `#00A39E`, Vinho `#80142B`; Sora e Instrument Sans).
- **PR-002**: Tom de voz pragmático, sem promessas mágicas ou clichês ("Número antes de adjetivo").
- **PR-003**: Performance absoluta: páginas leves, zero JavaScript desnecessário, carregamento instantâneo.
- **PR-004**: Manter compatibilidade total com o ecossistema Astro 7 e Cloudflare Pages.

### 5. Histórias de usuário

#### US-001 — Navegação e Posicionamento Central na Home (P1)

Como visitante, quero compreender a proposta de valor de Maurício Leite na primeira dobra e navegar diretamente para o meu perfil específico.

**Por que P1**: Essencial para a conversão de leads e clareza da proposta de valor.
**Teste independente**: Acesso à Home em desktop e mobile com validação visual e links funcionais.
**Requisitos**: FR-001, NFR-001

#### US-002 — Contratação da Agência aiSIM no Brasil e Exterior (P1)

Como empresário (Brasil ou Exterior), quero assistir ao pitch em vídeo de 1 min, entender o escopo da agência e agendar uma reunião de 30 minutos via Calendly.

**Por que P1**: Canal central de aquisição de clientes de alto valor (B2B).
**Teste independente**: Acesso às rotas /empresas-brasil e /empresas-exterior com acionamento do CTA até o Calendly.
**Requisitos**: FR-002, FR-003, NFR-001

#### US-003 — Escolha de Treinamento para Empreendedores (P1)

Como empreendedor, quero comparar as opções de curso e mentoria lado a lado através de cards e tabela comparativa para escolher a melhor opção.

**Por que P1**: Monetização de infoprodutos e formação prática em automações com IA.
**Teste independente**: Acesso a /empreendedores com renderização dos cards e tabela comparativa.
**Requisitos**: FR-004, NFR-001

#### US-004 — Parceria de Funis para Experts (P1)

Como especialista/expert, quero compreender a proposta de funis perpétuos de low ticket e agendar uma conversa de alinhamento com a equipe.

**Por que P1**: Geração de negócios de coprodução e consultoria para criadores.
**Teste independente**: Acesso a /expertos com exibição de vídeo, tabela e agendamento Calendly.
**Requisitos**: FR-005, NFR-001

#### US-005 — Leitura e Indexação no Blog (P2)

Como visitante ou leitor orgânico do Google, quero acessar artigos técnicos com carregamento instantâneo e layout dark confortável.

**Por que P2**: Aquisição perene e orgânica via SEO.
**Teste independente**: Carregamento da rota /blog e renderização de artigo individual.
**Requisitos**: FR-006, NFR-001, NFR-002

#### US-006 — Rastreamento e Métricas de Conversão (P1)

Como estrategista de marketing, quero que todas as páginas disparem eventos do Google Tag e Meta Pixel para otimização de campanhas de tráfego direto.

**Por que P1**: Essencial para medir ROI e otimizar campanhas de mídia paga.
**Teste independente**: Inspeção de tags no cabeçalho das páginas renderizadas.
**Requisitos**: FR-007, NFR-002

#### US-007 — Sistema Próprio de Comentários no Blog (Disqus-like) (P1)

Como leitor do blog, quero comentar nos artigos, responder a comentários existentes em árvore, curtir e interagir (anonimamente com nome/email ou via login social), de forma rápida e segura, aumentando o engajamento e gerando conteúdo indexável para o Google.

**Por que P1**: Cria comunidade, retém leitores, substitui o Disqus sem custo/anúncios e enriquece o SEO orgânico via UGC (User Generated Content).
**Teste independente**: Envio e exibição de comentário e resposta na página de post do blog.
**Requisitos**: FR-008, FR-009, NFR-001, NFR-002

### 6. Cenários BDD de aceite

#### AC-001 — Renderização da Home e Navegação para Perfis

**Cobre**: US-001, FR-001, NFR-001

```gherkin
@US-001 @FR-001 @NFR-001 @AC-001
Feature: Renderização da Home
  Scenario: Carregamento dos elementos principais e cards de perfis
    Given que o visitante acessa a Home do site
    When a página é carregada no navegador
    Then exibe a logo "Maurício Leite", os 4 cards de soluções e links funcionais para os 4 perfis
```

#### AC-002 — Validação dos 4 Cards de Soluções e CTAs Contextuais

**Cobre**: US-001, FR-001, NFR-001

```gherkin
@US-001 @FR-001 @NFR-001 @AC-002
Feature: Cards de Soluções na Home
  Scenario: Verificação dos textos dos botões de ação
    Given que o visitante rola até a seção "Minhas soluções" na Home
    When inspeciona os 4 cards de perfis
    Then os cards 1 e 2 exibem o botão "Falar com a agência"
    And os cards 3 e 4 exibem o botão "Conhecer"
```

#### AC-003 — Seletor de Idioma e Acessibilidade na Home

**Cobre**: US-001, FR-001, NFR-001

```gherkin
@US-001 @FR-001 @NFR-001 @AC-003
Feature: Idioma e Acessibilidade na Home
  Scenario: Alternância para o idioma inglês
    Given que o visitante clica no seletor "EN" no topo da página
    When a rota é alterada para /en/
    Then todas as seções da Home renderizam textos em inglês com contraste acessível
```

#### AC-004 — Agendamento Calendly em Empresas Brasil

**Cobre**: US-002, FR-002, NFR-001

```gherkin
@US-002 @FR-002 @NFR-001 @AC-004
Feature: Página de Empresas Brasil
  Scenario: Clique no CTA de solicitação de orçamento
    Given que o empresário está na página /empresas-brasil
    When clica no botão "Solicitar orçamento"
    Then a página executa scroll âncora suave até a seção final com embed do Calendly
```

#### AC-005 — Exibição das Seções e FAQ em Empresas Brasil

**Cobre**: US-002, FR-002, NFR-001

```gherkin
@US-002 @FR-002 @NFR-001 @AC-005
Feature: Conteúdo Informativo de Empresas Brasil
  Scenario: Visualização de escopo e FAQ da agência aiSIM
    Given que o usuário visualiza /empresas-brasil
    When percorre as seções informativas
    Then visualiza "Para quem é", cards de "Como trabalhamos", "O que fazemos" e as 4 perguntas do FAQ
```

#### AC-006 — Agendamento e Preços em Empresas Exterior

**Cobre**: US-002, FR-003, NFR-001

```gherkin
@US-002 @FR-003 @NFR-001 @AC-006
Feature: Página de Empresas Exterior
  Scenario: Visualização de custos em moeda forte e agendamento
    Given que o empresário internacional acessa /empresas-exterior
    When visualiza o conteúdo
    Then identifica as seções "Quanto custa", "Qual resultado esperado" e o embed do Calendly
```

#### AC-007 — Comparação de Modalidades para Empreendedores

**Cobre**: US-003, FR-004, NFR-001

```gherkin
@US-003 @FR-004 @NFR-001 @AC-007
Feature: Página de Empreendedores
  Scenario: Visualização dos 2 cards e da tabela comparativa
    Given que o empreendedor acessa /empreendedores
    When visualiza as seções 2 e 3
    Then exibe os 2 cards de curso vs mentoria e a tabela comparativa lado a lado
```

#### AC-008 — Respostas do FAQ de Empreendedores

**Cobre**: US-003, FR-004, NFR-001

```gherkin
@US-003 @FR-004 @NFR-001 @AC-008
Feature: FAQ de Empreendedores
  Scenario: Interação com as dúvidas frequentes
    Given que o empreendedor chega à seção de dúvidas em /empreendedores
    When clica em "Qual a diferença entre o curso e a mentoria?"
    Then a resposta detalhada é expandida sem quebra de layout
```

#### AC-009 — Apresentação da Proposta para Experts

**Cobre**: US-004, FR-005, NFR-001

```gherkin
@US-004 @FR-005 @NFR-001 @AC-009
Feature: Página de Experts
  Scenario: Visualização da proposta de funil perpétuo
    Given que o expert acessa /expertos
    When visualiza o topo da página
    Then visualiza o One Belief, o player de vídeo de 1 min e a tabela comparativa de formatos
```

#### AC-010 — Agendamento de Reunião para Experts

**Cobre**: US-004, FR-005, NFR-001

```gherkin
@US-004 @FR-005 @NFR-001 @AC-010
Feature: CTA e Calendly para Experts
  Scenario: Acesso ao calendário de alinhamento
    Given que o expert percorre a página /expertos
    When clica no botão de agendamento
    Then é direcionado ao embed do Calendly para seleção de data e hora
```

#### AC-011 — Acesso e Listagem de Artigos do Blog

**Cobre**: US-005, FR-006, NFR-001

```gherkin
@US-005 @FR-006 @NFR-001 @AC-011
Feature: Listagem do Blog
  Scenario: Carregamento da página /blog
    Given que o visitante clica no link "Blog" do cabeçalho
    When a rota /blog é carregada
    Then exibe os artigos do repositório integrado com paginação e filtro de tags
```

#### AC-012 — Leitura de Artigo Individual e SEO

**Cobre**: US-005, FR-006, NFR-002

```gherkin
@US-005 @FR-006 @NFR-002 @AC-012
Feature: Artigo Individual do Blog
  Scenario: Renderização de artigo e dados estruturados
    Given que o leitor abre um artigo específico do blog
    When a página é renderizada
    Then o texto usa Instrument Sans com contraste AA e dados Schema.org de artigo no cabeçalho
```

#### AC-013 — Injeção do Google Tag (GTAG) no Head

**Cobre**: US-006, FR-007, NFR-002

```gherkin
@US-006 @FR-007 @NFR-002 @AC-013
Feature: Rastreamento Google Tag
  Scenario: Verificação da presença do script GTAG
    Given que qualquer página do site é solicitada
    When inspecionado o HTML retornado
    Then a tag oficial do Google Analytics/GTAG está presente no elemento <head>
```

#### AC-014 — Injeção do Meta Pixel no Head

**Cobre**: US-006, FR-007, NFR-002

```gherkin
@US-006 @FR-007 @NFR-002 @AC-014
Feature: Rastreamento Meta Pixel
  Scenario: Verificação da presença do script do Pixel
    Given que qualquer página do site é solicitada
    When inspecionado o HTML retornado
    Then o script base do Meta Pixel está presente no elemento <head>
```

#### AC-015 — Validação de Build e Performance Global

**Cobre**: US-001, US-002, US-003, US-004, US-005, US-006, US-007, FR-001, FR-002, FR-003, FR-004, FR-005, FR-006, FR-007, FR-008, FR-009, NFR-001, NFR-002

```gherkin
@US-001 @US-002 @US-003 @US-004 @US-005 @US-006 @US-007 @FR-001 @FR-002 @FR-003 @FR-004 @FR-005 @FR-006 @FR-007 @FR-008 @FR-009 @NFR-001 @NFR-002 @AC-015
Feature: Build de Produção
  Scenario: Execução do build Astro completo
    Given que o comando npm run build é executado
    When todas as 80+ páginas são geradas
    Then o processo termina com exit code 0 e sitemaps válidos
```

#### AC-016 — Envio e Exibição de Comentário e Resposta (Threading)

**Cobre**: US-007, FR-008, NFR-001

```gherkin
@US-007 @FR-008 @NFR-001 @AC-016
Feature: Sistema de Comentários no Blog
  Scenario: Envio de comentário e resposta encadeada
    Given que o visitante está lendo um post no blog
    When preenche o formulário de comentário com nome, email e texto e clica em enviar
    Then o comentário é validado via Turnstile e persistido no Supabase
    And aparece na lista sob a ordenação selecionada (Best/Newest/Oldest)
    And outros leitores podem clicar em "Reply" para responder aninhado
```

#### AC-017 — Prevenção de Bots e Spam via Cloudflare Turnstile

**Cobre**: US-007, FR-009, NFR-002

```gherkin
@US-007 @FR-009 @NFR-002 @AC-017
Feature: Proteção Anti-Spam de Comentários
  Scenario: Bloqueio de envio automatizado sem token válido
    Given que uma requisição POST é disparada para o endpoint de comentários sem token do Turnstile
    When o servidor valida a requisição
    Then rejeita com status 403 e mensagem amigável sem gravar no banco de dados
```

### 7. Requisitos

#### Funcionais

- **FR-001**: Exibir a Home com Header, Hero, 4 Pilares de Experiência, 4 Cards de Perfis, Conteúdo Gratuito, FAQ e Footer.
- **FR-002**: Exibir `/empresas-brasil` com One Belief, player de vídeo 1 min, Para quem é, Como trabalhamos, O que fazemos, FAQ aiSIM e embed Calendly.
- **FR-003**: Exibir `/empresas-exterior` com One Belief, player de vídeo 1 min, O que fazemos, Quanto custa, Qual resultado esperado, FAQ e embed Calendly.
- **FR-004**: Exibir `/empreendedores` com One Belief, 2 cards de modalidades, tabela comparativa lado a lado e FAQ.
- **FR-005**: Exibir `/expertos` com One Belief, player de vídeo 1 min, tabela comparativa e embed Calendly.
- **FR-006**: Rota `/blog` integrada com visual do Brand Book e artigos indexáveis.
- **FR-007**: Scripts globais de rastreamento (GTAG / GA4 e Meta Pixel) injetados via `Head.astro`.
- **FR-008**: Sistema próprio de comentários no Blog (estilo Disqus) integrado ao Supabase com respostas em árvore (`parent_id`), ordenação (*Best, Newest, Oldest*), likes e badges (`Mod`/Autor).
- **FR-009**: Proteção anti-spam invisível com Cloudflare Turnstile para envios de comentários sem fricção para o usuário.

#### Não funcionais

- **NFR-001**: Design 100% fiel ao Brand Book oficial de Maurício Leite (Preto Pista `#111111`, Prata `#C6C6C6`, Petronas `#00A39E`, Vinho `#80142B`; Fontes: Sora e Instrument Sans).
- **NFR-002**: Performance de carregamento com métrica Core Web Vitals verde no celular e deploy no Cloudflare Pages.

#### Erros e casos-limite

- Script do Calendly bloqueado por adblocker -> Exibir link de contingência direto para `https://calendly.com/...`.
- Vídeo de 1 minuto em carregamento lento -> Exibir poster/capa otimizada com indicador de play.
- Falha de conexão com o Supabase ou Turnstile expirado -> Exibir mensagem discreta de erro com opção de tentar novamente sem perder o texto digitado.

## Ato II — Projetar e provar

### 8. Plano técnico

#### Contexto existente

- Astro 7.0 + Tailwind CSS v4 + Vite.
- Suporte a rotas com idioma `src/pages/[...lang]/index.astro`.

#### Arquitetura e módulos

- Componentes reutilizáveis em `src/layouts/components/`:
  - `HeaderNav.astro`: Menu superior, logo oficial monograma ML, idioma.
  - `Hero.astro`: Primeira dobra da Home.
  - `Experience.astro`: 4 cards de metodologia & resultados.
  - `SolutionsCards.astro`: 4 cards dos perfis de soluções da Home.
  - `ComparisonTable.astro`: Tabela comparativa lado a lado reaproveitável (Empreendedores e Experts).
  - `CalendlyEmbed.astro`: Container responsivo e leve do Calendly com fallback.
  - `VideoPlayer1Min.astro`: Player otimizado para o pitch de 1 min.
  - `FreeContent.astro`: Cards para Instagram, YouTube e Blog.
  - `FaqAccordion.astro`: Seção de dúvidas frequentes reutilizável por página.
  - `FooterMauricio.astro`: Rodapé oficial.

#### Migrations
 
 - `supabase/migrations/20261002_create_blog_comments.sql`:
   - Criação da tabela `comments` (`id`, `post_slug`, `author_name`, `author_email`, `author_avatar`, `content`, `parent_id`, `created_at`, `is_approved`, `likes_count`).
   - Índice em `(post_slug, created_at)` e chave estrangeira auto-referencial `parent_id REFERENCES comments(id) ON DELETE CASCADE`.
   - Políticas RLS: Select público para aprovados (`is_approved = true`), insert público com validação de campos.
 
#### Models
 
 - `Comment`: Entidade de comentário com tipagem TypeScript para respostas aninhadas (`replies: Comment[]`).
 
#### Controllers e casos de uso
 
 - Endpoint Astro SSR: `src/pages/api/comments.ts` (POST para inserção e validação do Cloudflare Turnstile, GET para busca reativa).
 
#### Views e experiência
 
 - `src/pages/[...lang]/index.astro`: Página inicial montada com componentes semânticos e responsivos.
 - `src/pages/[...lang]/empresas-brasil.astro`: Página da agência aiSIM no Brasil.
 - `src/pages/[...lang]/empresas-exterior.astro`: Página da agência aiSIM no Exterior.
 - `src/pages/[...lang]/empreendedores.astro`: Página de cursos e mentoria para donos de negócio.
 - `src/pages/[...lang]/expertos.astro`: Página de funis perpétuos para especialistas.
 - `src/pages/[...lang]/blog/`: Rota incorporada do repositório dedicado com componente `CommentsSection.astro` no final de cada post.
 
#### Queries e repositórios
 
 - `src/lib/comments.ts`: Funções para buscar comentários por slug e estruturar a árvore hierárquica.
 
#### Jobs e processamento assíncrono
 
 - Não aplicável.
 
#### Estrutura de arquivos
 
 ```text
 specs/draft/0001-home-mauricio-leite/
   spec.md
 src/
   layouts/
     components/
       HeaderNav.astro
       Hero.astro
       Experience.astro
       SolutionsCards.astro
       ComparisonTable.astro
       CalendlyEmbed.astro
       VideoPlayer1Min.astro
       FreeContent.astro
       FaqAccordion.astro
       FooterMauricio.astro
       comments/
         CommentsSection.astro
         CommentInput.astro
         CommentThread.astro
         CommentItem.astro
   lib/
     comments.ts
     supabase.ts
   pages/
     api/
       comments.ts
     [...lang]/
       index.astro
       empresas-brasil.astro
       empresas-exterior.astro
       empreendedores.astro
       expertos.astro
       blog/
 supabase/
   migrations/
     20261002_create_blog_comments.sql
 ```
 
 ### 9. Modelo de dados
 
 #### Entidades
 
 | Entidade | Identidade | Atributos e regras | Relações |
 | --- | --- | --- | --- |
 | SiteConfig | slug | idioma, títulos, meta tags, links | 1:N |
 | FAQItem | id | question, answer, page | 1:N |
 | ComparisonRow | id | feature, optionA, optionB, page | 1:N |
 | Comment | id (UUID) | post_slug, author_name, author_email, author_avatar, content, parent_id, created_at, is_approved, likes_count | 1:N auto-referencial (parent_id) |

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

- Astro 7.0, Tailwind CSS v4, HTML5 semântico, SVG e embeds seguros.

#### Telas e responsabilidades

- Home Page (`/`): Apresentação dos serviços, autoridade profissional e canais de aquisição.
- Empresas Brasil (`/empresas-brasil`): Página de conversão da agência aiSIM no mercado nacional.
- Empresas Exterior (`/empresas-exterior`): Página de conversão da agência aiSIM em moeda forte.
- Empreendedores (`/empreendedores`): Comparação entre curso e mentoria de processos e IA.
- Experts (`/expertos`): Página de parceria em funis perpétuos de low ticket.
- Blog (`/blog`): Hub de artigos técnicos e SEO orgânico.

#### Fluxo de informação e navegação

- O fluxo de navegação parte da Home e permite navegação direta através dos 4 links do cabeçalho ou dos 4 cards de soluções. Em cada página de público, o CTA principal conduz via scroll âncora suave para o agendamento no Calendly ou checkout do treinamento.

#### Menus e navegação principal

- Header fixo com links:
  - 'Para empresas no Brasil' -> /empresas-brasil
  - 'Para empresas no exterior' -> /empresas-exterior
  - 'Para empreendedores' -> /empreendedores
  - 'Para expertos' -> /expertos
  - 'Blog' -> /blog
  - Seletor de idioma (PT | EN)
- Menu móvel responsivo com botão hambúrguer.

#### Formulários e ações

- Botões principais de ação com scroll âncora suave para a seção do embed do Calendly.
- Formulário de agendamento embutido do Calendly.

#### Composição e disposição

- Layout dark com fundo Preto Pista (`#111111`), containers com bordas sutis em Prata (`#C6C6C6/15`), botões primários em Petronas (`#00A39E`) e secundários em grafite escuro com contorno.

#### Blocos React e componentes selecionados

| Tela | Bloco React | Responsabilidade | Arquivo previsto | Componente ou composição | Origem | Reuso ou extensão |
| --- | --- | --- | --- | --- | --- | --- |
| Home | N/A | Componentes nativos Astro | src/layouts/components/*.astro | Astro Native | Próprio | Novo |
| Segmentos | N/A | Componentes nativos Astro | src/layouts/components/*.astro | Astro Native | Próprio | Novo |

#### Estados e acessibilidade

- Foco visível por teclado, contraste AA entre textos e fundo, tags ARIA em acordeões de FAQ e embeds isolados para evitar bloqueio de renderização.

#### Revisão visual durante o desenvolvimento

- A revisão visual confere bordas, espaçamentos, margens, padding e tipografia do sistema conforme o Brand Book oficial de Maurício Leite:
  - Fundo Preto Pista (#111111), acentos Petronas (#00A39E), bordas e textos em Prata (#C6C6C6) e Branco (#FFFFFF).
  - Tipografia de títulos com fonte Sora e textos em Instrument Sans.
  - Inspeção de consistência nas resoluções mobile (375px), tablet (768px) e desktop (1440px).

#### APIs expostas

- Não aplicável.

#### APIs externas utilizadas

- Embed do Calendly (`https://calendly.com/...`).
- Scripts do Google Tag (GTAG) e Meta Pixel.

#### Documentação das APIs consultadas

- Documentação oficial de embed do Calendly.
- Documentação da biblioteca Google Tag e Meta Pixel.

#### Eventos e outros contratos

- Não aplicável.

## Ato III — Entregar e validar

### 11. Estratégia TDD

- **Unidade / Integração**: `npm run build` garantindo integridade de todas as rotas criadas.
- **BDD de Aceite**: Cenários AC-001 a AC-015.

#### Evidência RED-GREEN-REFACTOR

| IDs | BDD de referência | Teste TDD informado pelo BDD | RED observado | GREEN observado | Refactor/regressão |
| --- | --- | --- | --- | --- | --- |
| US-001, FR-001, NFR-001, AC-001 | AC-001 na seção 6 | npm run build | Pending | Passed | Passed |
| US-002, FR-002, NFR-001, AC-004 | AC-004 na seção 6 | npm run build | Pending | Pending | Pending |
| US-003, FR-004, NFR-001, AC-007 | AC-007 na seção 6 | npm run build | Pending | Pending | Pending |
| US-004, FR-005, NFR-001, AC-009 | AC-009 na seção 6 | npm run build | Pending | Pending | Pending |
| US-006, FR-007, NFR-002, AC-013 | AC-013 na seção 6 | npm run build | Pending | Pending | Pending |

### 12. Plano de testes e rastreabilidade

| Requisito | Cenário BDD | Nível | Arquivo/comando esperado | Evidência |
| --- | --- | --- | --- | --- |
| FR-001 | AC-001 | Integração | npm run build | Passed |
| FR-002 | AC-004 | Visual/E2E | Inspeção da rota /empresas-brasil | Pending |
| FR-003 | AC-006 | Visual/E2E | Inspeção da rota /empresas-exterior | Pending |
| FR-004 | AC-007 | Visual/E2E | Inspeção da rota /empreendedores | Pending |
| FR-005 | AC-009 | Visual/E2E | Inspeção da rota /expertos | Pending |
| FR-006 | AC-011 | Integração | Rota /blog carregada | Pending |
| FR-007 | AC-013 | Verificação Head | Scripts GTAG/Meta presentes | Pending |

### 13. Validações

#### Gate do Ato I — Definição

- **Resultado**: Passed
- **Comando**: `node .agents/skills/specsfy-04-validate/scripts/validate_spec.mjs specs/draft/0001-home-mauricio-leite/spec.md --allow-draft`
- **Achados**: Definição completa e aprovada com todas as páginas e requisitos mapeados.

#### Gate do Ato II — Plano

- **Resultado**: Passed
- **Comando**: `node .agents/skills/specsfy-05-tasks/scripts/validate_tasks.mjs specs/draft/0001-home-mauricio-leite/spec.md`
- **Achados**: Arquitetura e componentes estruturados.

#### Gate do Ato III — Entrega

- **Resultado**: Pending
- **Comando**: `node .agents/skills/specsfy-06-tdd-bdd/scripts/check_traceability.mjs specs/draft/0001-home-mauricio-leite/spec.md .`
- **Achados**: Em execução das tarefas das novas páginas.

### 14. Tarefas

- [x] T001 [CODE] [US-001] Criar e consolidar a Home com 4 cards de resultados e 4 cards de soluções — Refs: US-001, FR-001, NFR-001, AC-001, AC-002, AC-003, AC-015 — Depends: none
  - [x] ****: Definir componentes da Home.
  - [x] ****: Implementar soluções e resultados.
  - [x] ****: Validar renderização e responsividade.
  - [x] ****: Padrão visual do Brand Book.
  - [x] ****: Registrar conclusão.
  - [x] ****: Otimização de build.

- [x] T002 [CODE] [US-006] Injetar Google Tag (GTAG/GA4/GTM) e Meta Pixel em `Head.astro` — Refs: US-006, FR-007, NFR-002, AC-013, AC-014, AC-015 — Depends: none
  - [x] **PREP**: Obter IDs oficiais ou variáveis de ambiente de tracking.
  - [x] **EXECUTE**: Inserir scripts assíncronos no componente `Head.astro` e `Base.astro`.
  - [x] **VERIFY**: Testar presença das tags nas páginas geradas.
  - [x] **VISUAL**: Não aplicável (tarefa de script de cabeçalho).
  - [x] **EVIDENCE**: Build e astro-check executados com exit code 0.
  - [x] **IMPROVE**: Aplicar carregamento assíncrono para zero impacto no LCP.

- [x] T003 [CODE] [US-002] Criar componente `CalendlyEmbed.astro` e `VideoPlayer1Min.astro` — Refs: US-002, FR-002, FR-003, NFR-001, AC-004, AC-005, AC-006, AC-015 — Depends: none
  - [x] **PREP**: Definir dimensões responsivas e estrutura de fallback do Calendly.
  - [x] **EXECUTE**: Criar componentes reutilizáveis em `src/layouts/components/`.
  - [x] **VERIFY**: Testar renderização do player de vídeo e container do calendário.
  - [x] **VISUAL**: Conferir bordas Prata e fundo escuro no tema dark.
  - [x] **EVIDENCE**: Componentes criados com validação no astro-check.
  - [x] **IMPROVE**: Otimizar carregamento preguiçoso do iframe do Calendly.

- [x] T004 [CODE] [US-002] Implementar página `/empresas-brasil` (One Belief, seções informativas, FAQ aiSIM e Calendly) — Refs: US-002, FR-002, NFR-001, AC-004, AC-005, AC-015 — Depends: T003
  - [x] **PREP**: Estruturar briefing de copy aprovado (arquivo para empresas no brasil (1).md).
  - [x] **EXECUTE**: Criar `src/pages/[...lang]/empresas-brasil.astro` com suporte bilíngue, design system dark e scroll âncora para Calendly.
  - [x] **VERIFY**: Testar scroll âncora suave até o Calendly e renderização do FAQ e cards VCEC.
  - [x] **VISUAL**: Tipografia Sora nos títulos e Instrument Sans nos textos, acentos Petronas (#00A39E) e Preto Pista (#111111).
  - [x] **EVIDENCE**: Rota funcional compilada com sucesso.
  - [x] **IMPROVE**: Garantir compatibilidade e responsividade no mobile.

- [ ] T005 [CODE] [US-002] Implementar página `/empresas-exterior` (One Belief internacional, quanto custa, resultados e Calendly) — Refs: US-002, FR-003, NFR-001, AC-006, AC-015 — Depends: T003
  - [ ] **PREP**: Adaptar textos para contexto internacional.
  - [ ] **EXECUTE**: Criar `src/pages/[...lang]/empresas-exterior.astro`.
  - [ ] **VERIFY**: Testar agendamento e seções de custos.
  - [ ] **VISUAL**: Conferir alinhamento de grid e cards escuros.
  - [ ] **EVIDENCE**: Registrar rota funcional.
  - [ ] **IMPROVE**: Validação de contraste.

- [ ] T006 [CODE] [US-003] Criar componente `ComparisonTable.astro` e implementar página `/empreendedores` — Refs: US-003, FR-004, NFR-001, AC-007, AC-008, AC-015 — Depends: none
  - [ ] **PREP**: Estruturar tabela comparativa lado a lado conforme imagem de referência.
  - [ ] **EXECUTE**: Criar componente e página `src/pages/[...lang]/empreendedores.astro`.
  - [ ] **VERIFY**: Testar expansão de FAQ e responsividade da tabela.
  - [ ] **VISUAL**: Padrão estético do Brand Book com destaques em Petronas.
  - [ ] **EVIDENCE**: Registrar evidência visual e funcional.
  - [ ] **IMPROVE**: Scroll horizontal suave da tabela em telas pequenas.

- [ ] T007 [CODE] [US-004] Implementar página `/expertos` (One Belief, tabela de parceria e Calendly) — Refs: US-004, FR-005, NFR-001, AC-009, AC-010, AC-015 — Depends: T003, T006
  - [ ] **PREP**: Estruturar copy para criadores e funis de low-ticket.
  - [ ] **EXECUTE**: Criar `src/pages/[...lang]/expertos.astro`.
  - [ ] **VERIFY**: Testar agendamento Calendly e tabela.
  - [ ] **VISUAL**: Conferir consistência com as demais páginas.
  - [ ] **EVIDENCE**: Registrar rota funcional.
  - [ ] **IMPROVE**: Otimização de performance.

- [ ] T008 [CODE] [US-005] Incorporar e adaptar o repositório externo do Blog à rota `/blog` no Brand Book — Refs: US-005, FR-006, NFR-001, NFR-002, AC-011, AC-012, AC-015 — Depends: none
  - [ ] **PREP**: Identificar arquivos do projeto Astro de Blog externo.
  - [ ] **EXECUTE**: Integrar rotas e coleções em `src/pages/[...lang]/blog/`.
  - [ ] **VERIFY**: Validar listagem e abertura de posts.
  - [ ] **VISUAL**: Adequação à paleta Preto Pista e Instrument Sans.
  - [ ] **EVIDENCE**: Registrar rotas de blog integradas.
  - [ ] **IMPROVE**: Inclusão de Schema.org de artigo para SEO.

- [ ] T009 [TEST] [US-001] Executar `npm run build` e validar zero erros em todas as rotas — Refs: US-001, US-002, US-003, US-004, US-005, US-006, FR-001, FR-002, FR-003, FR-004, FR-005, FR-006, FR-007, NFR-001, NFR-002, AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-007, AC-008, AC-009, AC-010, AC-011, AC-012, AC-013, AC-014, AC-015 — Depends: T004, T005, T006, T007, T008
  - [ ] **PREP**: Verificar ambiente de build.
  - [ ] **EXECUTE**: Rodar `npm run build`.
  - [ ] **VERIFY**: Todas as 80+ páginas geradas com exit code 0.
  - [ ] **VISUAL**: Não aplicável (tarefa de build).
  - [ ] **EVIDENCE**: Registrar log de sucesso do build.
  - [ ] **IMPROVE**: Conferir integridade do sitemap.

- [ ] T010 [INFRA] [US-006] Checklist de DNS Hostinger -> Cloudflare (SSL Full) e verificação Google Search Console — Refs: US-006, FR-007, NFR-002, AC-013, AC-014, AC-015 — Depends: T009
  - [ ] **PREP**: Validar zona de DNS na Cloudflare.
  - [ ] **EXECUTE**: Apontar Nameservers da Hostinger e configurar SSL Full.
  - [ ] **VERIFY**: Testar propagação e verificação no Search Console.
  - [ ] **VISUAL**: Não aplicável (infraestrutura de rede).
  - [ ] **EVIDENCE**: Registrar checklist concluído.
  - [ ] **IMPROVE**: Otimizar cache e compressão Brotli na Cloudflare.

- [ ] T011 [MIGRATION] [US-007] Criar schema e migration da tabela `comments` no Supabase com RLS — Refs: US-007, FR-008, NFR-001, AC-016 — Depends: none
  - [ ] **PREP**: [PENDÊNCIA DE AMBIENTE] Usuário precisa atualizar as credenciais/token do Supabase MCP para a conta correta antes de aplicar a migration (atualmente conectado ao projeto 'Dora 3.0').
  - [ ] **EXECUTE**: Criar migration versionada `supabase/migrations/20261002_create_blog_comments.sql` e aplicar via MCP/SQL na conta nova.
  - [ ] **VERIFY**: Inspecionar schema e políticas RLS de leitura pública de aprovados e inserção.
  - [ ] **VISUAL**: Não aplicável (persistência de dados).
  - [ ] **EVIDENCE**: Registrar migration aplicada e estrutura validada.
  - [ ] **IMPROVE**: Índices em `(post_slug, created_at)` para consulta instantânea.

- [ ] T012 [CODE] [US-007] Criar endpoint Astro `/api/comments` com validação de Cloudflare Turnstile — Refs: US-007, FR-008, FR-009, NFR-002, AC-016, AC-017 — Depends: T011
  - [ ] **PREP**: Obter chave secreta do Turnstile e URL do Supabase.
  - [ ] **EXECUTE**: Implementar endpoint REST POST (valida Turnstile + grava Supabase) e GET (recupera lista hierárquica).
  - [ ] **VERIFY**: Testar requisição direta e rejeição de spam sem token.
  - [ ] **VISUAL**: Não aplicável (API backend).
  - [ ] **EVIDENCE**: Respostas 200 OK com payload estruturado e 403 Forbidden para requisições inválidas.
  - [ ] **IMPROVE**: Sanitização de HTML com DOMPurify para prevenção de XSS.

- [ ] T013 [CODE] [US-007] Desenvolver componentes de UI dos Comentários (`CommentsSection`, `CommentInput`, `CommentThread`) no Brand Book — Refs: US-007, FR-008, NFR-001, AC-016 — Depends: T012
  - [ ] **PREP**: Reproduzir o layout limpo do Disqus (header com ordenação Best/Newest, avatar, input com expansão e botão Reply).
  - [ ] **EXECUTE**: Criar `CommentsSection.astro`, `CommentInput.astro`, `CommentThread.astro` e integrar no layout do blog.
  - [ ] **VERIFY**: Testar postagem, resposta encadeada e alternância de ordenação.
  - [ ] **VISUAL**: Cores do Brand Book (Preto Pista `#111111`, detalhes Petronas `#00A39E`, tipografia Instrument Sans e badges `Mod`).
  - [ ] **EVIDENCE**: Capturas e testes no navegador.
  - [ ] **IMPROVE**: Zero impacto de renderização estática para o post do blog.

### 15. Ordem de execução

- Caminho crítico: T002/T003/T006 → T004/T005/T007 → T008 → T011 → T012 → T013 → T009 → T010.
- Tarefas paralelas: T002, T003, T006 e T011 podem ser desenvolvidas em paralelo.
- Estratégia de MVP: Entrega faseada das páginas de empresas, empreendedores e experts com tracking completo.

### 16. Dependências, riscos e suposições

#### Dependências

- Conexão e disponibilidade do serviço Calendly.
- IDs de rastreamento do Google Tag e Meta Pixel.
- **[ABERTO / PENDENTE]** Atualização do Personal Access Token (PAT) do Supabase MCP para a conta oficial/correta (desconectando de `Dora 3.0`) antes da execução da migration T011.

#### Riscos

- Bloqueio de scripts do Calendly por adblockers → Mitigado com link direto visível como fallback.
- Lentidão em conexões móveis → Mitigado com lazy loading e ausência de bibliotecas 3D pesadas.

#### Suposições

- O repositório continuará utilizando a arquitetura Astro 7 com Tailwind CSS v4.

### 17. Decisões

- **DEC-001**: Remoção do Spline 3D e adoção de componentes nativos Astro/Tailwind para garantia de performance sub-segundo no celular.
- **DEC-002**: Aderência estrita à paleta do Brand Book v2.0 (Preto Pista `#111111`, Prata `#C6C6C6`, Petronas `#00A39E`, Vinho `#80142B`).
- **DEC-003**: Ação de solicitação de orçamento via scroll âncora suave para o embed oficial do Calendly.
- **DEC-004**: Incorporação de projeto Astro externo dedicado para o Blog.
- **DEC-005**: Infraestrutura completa de rastreamento com Google Tag, Meta Pixel, Search Console e DNS Cloudflare.

### 18. Definition of Done

- [x] `Definition Gate` está `Passed`.
- [x] `Plan Gate` está `Passed`.
- [ ] `Delivery Gate` está `Passed`.
- [ ] Todos os cenários `AC` aplicáveis passam.
- [ ] Todas as tarefas na seção 14 estão concluídas.
- [ ] Testes e checks estáticos disponíveis passam.
