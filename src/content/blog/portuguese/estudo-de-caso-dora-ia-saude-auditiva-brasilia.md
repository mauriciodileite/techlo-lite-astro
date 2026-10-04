---
title: "Estudo de Caso: Dora IA — Inteligência Artificial com Memória Contínua e Graph RAG para Clínica de Saúde Auditiva em Brasília"
description: "Descubra como uma tradicional clínica de saúde auditiva em Brasília implementou um agente com Mem0, Neo4j e n8n para zerar alucinações, acolher o público sênior e qualificar leads 24/7."
image: "/images/blog-post/estudo-de-caso-clinica-auditiva-dora-ia.jpg"
imageAlt: "Consultório moderno e acolhedor de clínica de saúde auditiva e audiologia em Brasília"
date: 2026-10-03
author: "Maurício Leite"
avatarUrl: "/images/perfil.jpg"
categories:
  - "Inteligência Artificial"
tags:
  - "Estudo de Caso"
  - "Graph RAG"
  - "Mem0"
  - "Neo4j"
  - "n8n"
  - "Saúde Auditiva"
readTime: 8
featured: true
draft: false
---

**Cliente:** Clínica de Saúde Auditiva (Brasília – DF)  
**Engenharia & Arquitetura de IA:** Maurício Leite  
**Stack:** n8n, OpenAI, Mem0 (Open Source), LightRAG, Neo4j, Supabase (PostgreSQL), AvisaAPI  
**Conformidade:** 100% LGPD (dados anonimizados e proteção rigorosa de histórico clínico)

---

## 1. Sumário Executivo

Uma conceituada **clínica de saúde auditiva em Brasília (DF)** é referência na reabilitação auditiva, adaptação de aparelhos, manutenção técnica especializada e suporte a convênios e processos militares (Marinha, FUSEX, Exército).

O desafio central consistia em criar um agente conversacional no WhatsApp (**Dona Dora**) que não fosse um chatbot rígido de opções numéricas nem um LLM genérico sujeito a alucinações. O agente precisava:

1. **Atender com extremo acolhimento** um público majoritariamente sênior.
2. **Reconhecer instantaneamente** pacientes da casa e novos leads.
3. **Lembrar de preferências, familiares e detalhes** de conversas anteriores sem exigir que a pessoa repita tudo.
4. **Responder com precisão cirúrgica** dúvidas sobre marcas, modelos, conectividade bluetooth, pilhas e processos burocráticos militares.
5. **Encaminhar oportunidades qualificadas** para a recepção humana no CRM.

---

## 2. A Arquitetura da Solução

Para alcançar essa maturidade de produto, foi desenhada uma arquitetura modular que combina **Orquestração de Eventos**, **Memória de Longo Prazo** e **Recuperação Aumentada por Grafo (Graph RAG)**:

```
[ WhatsApp / AvisaAPI ]
          │
          ▼
   [ n8n: Receiver ] ────────► [ Supabase (PostgreSQL) ]
          │                    (Identificação, Prontuário & Funil)
          ▼
 [ Agente: Dora v3 ]
   ├── Mem0 (Memória de Sessão & Fatos Persistentes)
   ├── LightRAG + Neo4j (Base de Conhecimento em Grafo)
   └── Sub-workflows de Ação (CRM, Vídeos de Manutenção, Recepção)
          │
          ▼
   [ n8n: Sender ] ──────────► [ WhatsApp Cliente ]
```

---

## 3. Por que Mem0 e LightRAG? Os Pilares de Inteligência

### 3.1. Mem0: Memória de Curto e Longo Prazo
O maior problema de chatbots convencionais no WhatsApp é a **amnésia**: se a pessoa entra em contato dias depois, a conversa começa do zero. Se o histórico inteiro for reinjetado como texto bruto, o custo de tokens explode e a janela de contexto se satura.

* **Por que usamos:** O Mem0 cria uma camada semântica de memória episódica associada a cada usuário.
* **Na prática:**
  * **Curto Prazo (Sessão):** Mantém a coerência dos turnos recentes da conversa atual, permitindo que a IA entenda referências anafóricas ("*ele tem exame*", "*prefiro na parte da tarde*").
  * **Longo Prazo (Fatos e Relações):** Destila informações perenes — por exemplo, se quem está falando é o próprio paciente ou um familiar (filho/cônjuge), preferências pessoais e histórico de necessidades.

### 3.2. LightRAG + Neo4j: Graph RAG Híbrido
O RAG vetorial tradicional (busca por similaridade de embeddings) frequentemente falha em saúde e equipamentos técnicos, pois busca pedaços de texto isolados e perde as **relações de causa e efeito** (ex: compatibilidade de pilhas com marcas específicas, processos burocráticos de cada órgão militar).

* **Por que usamos:** O LightRAG integrado ao Neo4j estrutura o conhecimento clínico e operacional como um **Grafo de Conhecimento** (entidades interconectadas por relacionamentos explícitos).
* **Modo Híbrido (`hybrid`):** A busca consulta simultaneamente o grafo de entidades no Neo4j e a base vetorial semântica.
* **Benefício:** A IA nunca "chuta" se um modelo tem bluetooth ou se a clínica atende determinado processo; ela consulta o grafo e responde com precisão técnica absoluta.

---

## 4. Desafios de Engenharia e Problemas Resolvidos

Durante o ciclo de desenvolvimento e testes em produção, foram superados gargalos críticos de orquestração:

### Desafio 1: O Envenenamento de Contexto no Histórico de Sessão
* **O Problema:** Inicialmente, a gravação de turnos no Mem0 estava configurada para inferir fatos a cada resposta (`infer: true`). O sistema gerava resumos em terceira pessoa distorcendo falas do usuário (ex: interpretando "não tenho preferência por marca" como "o usuário tem preferência"). Isso poluía o histórico imediato e fazia a IA repetir perguntas.
* **A Solução:** Separação estrita de escopos:
  * A **sessão imediata** passou a gravar o diálogo de forma literal e cronológica (`infer: false`).
  * A **memória de longo prazo** seguiu com extração semântica de fatos perenes.
  * Inclusão de regras de ouro no prompt: a mensagem atual do cliente tem precedência sobre qualquer inferência passada.

### Desafio 2: A Ambiguidade entre Paciente e Novo Lead
* **O Problema:** Novos contatos que não estavam na base histórica de prontuários ficavam rotulados estaticamente como "não identificados", deixando a IA sem saber se devia fazer triagem comercial ou suporte técnico.
* **A Solução:** Automação na camada de dados via PostgreSQL no Supabase:
  * Se o número de telefone bate com o prontuário eletrônico da clínica, o funil ativa automaticamente o modo **Paciente da Casa** (com acesso a garantias e fonoaudiólogo de referência).
  * Se o número não existe na base, o funil ativa automaticamente o modo **Novo Lead**, orientando a Dora para acolhimento, triagem de necessidades e qualificação.

### Desafio 3: Otimização do Acesso ao Graph RAG
* **O Problema:** A ferramenta HTTP que conectava a IA ao LightRAG estava com passagem cega de parâmetros gerados pelo modelo, gerando buscas poluídas e sem garantia de varredura no Neo4j.
* **A Solução:** Padronização do payload com o parâmetro `query` instruído especificamente para termos técnicos objetivos e fixação do `mode: "hybrid"`, ativando o potencial completo do grafo de conhecimento.

### Desafio 4: Resiliência de Schemas de Ferramentas (Case-Sensitivity)
* **O Problema:** A IA gerava chamadas de ferramentas com variações de maiúsculas e minúsculas nos nomes das propriedades, o que gerava rejeição de schema na validação do n8n.
* **A Solução:** Blindagem das definições de ferramentas e do system prompt, garantindo conformidade estrita e eliminando erros em tempo de execução.

---

## 5. Capacidades Operacionais da Dora IA

Hoje, a **Dona Dora** atua como uma assistente virtual de triagem de alta performance:

| Capacidade | Como Funciona |
| :--- | :--- |
| **Identificação Inteligente** | Reconhece se o contato é paciente, lead ou familiar, sem exigir digitação de documentos logo na saudação. |
| **Triagem & Qualificação de Leads** | Descobre quem necessita do atendimento, se já possui exames audiométricos e classifica a maturidade no CRM. |
| **Encaminhamento para Recepção** | Não promete horários fictícios; reúne o resumo completo da conversa e cria a oportunidade no CRM para a equipe humana agendar. |
| **Processos de Licitação / Militar** | Identifica demandas de convênios (Marinha, FUSEX, Exército) e orienta sobre o fluxo correto de avaliação e testes. |
| **Suporte Técnico de Limpeza** | Orienta pacientes com dúvidas sobre entupimento e envia vídeos tutoriais oficiais conforme o formato do aparelho. |
| **Proteção de Dados & LGPD** | Só compartilha dados cadastrais se o número do WhatsApp coincidir com a ficha clínica; jamais expõe dados de terceiros. |

---

## 6. Resultados e Impacto de Negócio

* **Disponibilidade 24/7 sem Ruído:** Pacientes e familiares são acolhidos a qualquer horário com a mesma qualidade e tom humanizado.
* **Zero Alucinação Clínica:** A combinação de regras de precedência com Graph RAG híbrido eliminou respostas incorretas sobre modelos e preços.
* **Eficiência para a Recepção:** A equipe humana recebe atendimentos já triados, com notas claras sobre o motivo do contato e histórico familiar, aumentando a conversão de agendamentos presenciais.
* **Experiência Personalizada:** O cliente sente que está conversando com alguém que realmente conhece sua jornada e a história do seu aparelho auditivo.

---

> **Engenharia e Arquitetura por Maurício Leite**  
> *Especialista em Soluções de Inteligência Artificial, Automação de Processos & Graph RAG.*
