---
title: "Como Fazer Vídeo de Motion com IA"
description: "Como eu montei um segundo cérebro para vídeo com o Claude Code, o Mem0 e o Neo4j, catalogando 131 referências de motion sem deixar nenhum vídeo pesado no computador."
image: "/images/blog-post/como-fazer-video-de-motion-com-ia.jpg"
imageAlt: "Como Fazer Vídeo de Motion com IA - Capa em colagem editorial por Maurício Leite"
date: 2026-10-26
author: "Maurício Leite"
avatarUrl: "/images/perfil.jpg"
categories:
  - "Vídeos com IA"
tags:
  - "Motion com IA"
  - "Claude Code"
  - "Mem0"
  - "Neo4j"
  - "Remotion"
  - "Edição de Vídeo"
readTime: 7
featured: true
draft: false
---

## Antes de tudo: os créditos

Este projeto não nasceu do zero. A base é o modelo **Estúdio de IA** e o PDF **Palácio mental de referências de motion**, criados por **Jeferson de Lima**, o [@jefao.ai](https://www.instagram.com/jefao.ai/). Foi ele quem me passou esse segundo cérebro, e todo o crédito pela estrutura original, pelo método de vídeo e pela curadoria das referências é dele.

Parte do método e das referências de motion vem do [Clube do Motion](https://clubedomotion.com), que também aparece como autor de referências dentro do PDF.

Os vídeos catalogados pertencem aos respectivos criadores. Aqui eu só guardo o link, as tags e uma nota curta de cada um. A mídia não fica comigo.

O que eu fiz foi adaptar esse modelo ao que eu já tinha e ao meu jeito de trabalhar. É isso que eu conto abaixo, passo a passo.

---

## O que eu usei (e o que não usei)

| Ferramenta | Usei? | Para quê / por quê |
|---|:---:|---|
| [Claude Code](https://claude.com/claude-code) | ✅ | O agente que executa tudo: baixa, organiza, cataloga e monta o grafo |
| Modelo Estúdio de IA (do Jeferson) | ✅ | Estrutura de pastas, scripts de referências e método de vídeo |
| [Mem0](https://mem0.ai) | ✅ | Memória de longo prazo: perfil, decisões e onde o trabalho parou |
| ai-memory | ❌ | O modelo original usa ele. Troquei pelo Mem0 para não ter duas memórias concorrendo |
| [Neo4j](https://neo4j.com) (AuraDB, na nuvem) | ✅ | Grafo que liga referência, criador, estilo, plataforma e categoria |
| GitHub (repositório privado) | ✅ | Backup e histórico do catálogo, do perfil e das anotações. Só texto |
| [Remotion](https://www.remotion.dev) | ✅ | O motor de edição dos meus reels, que eu já usava antes |
| HyperFrames | ❌ | O Remotion já cobre o que eu faço |
| After Effects | ❌ | É pago e faz motion em timeline. Meus reels são vídeo falado com inserts, e o Remotion resolve |
| EffectCraft | ❌ | Clone gratuito do After Effects, ainda em versão alfa. Não precisei |
| Motion Kit AE | ❌ | Depende do After Effects |
| Codex | ❌ | Fiz tudo no Claude Code |
| Instalador completo do modelo (roteiro 2) | ❌ | Baixa de 2 a 6 GB, e eu já tinha quase tudo |
| yt-dlp | ✅ | Baixa o vídeo de referência, só para olhar |
| ffmpeg | ✅ | O que já vem dentro do Remotion. Não instalei outro |
| uv + Pillow + PyMuPDF | ✅ | Temporários: rodaram o script e foram apagados no fim |

---

## Passo a passo

### 1. Uma pasta e um repositório privado

Criei uma pasta para o estúdio (sem acento no nome e fora do OneDrive) e um repositório **privado** no GitHub para servir de backup.

O modelo entra na pasta com o git, com o remoto chamado `modelo`. Esse remoto serve só para puxar atualizações do autor e nunca recebe push. O meu conteúdo vai só para o meu repositório privado:

```bash
git init -b main
git remote add modelo <endereço do modelo>
git fetch modelo main
git checkout -B main --track modelo/main
git remote add origin <seu repositório privado>
```

O endereço do modelo você consegue com o próprio autor, pelo [@jefao.ai](https://www.instagram.com/jefao.ai/).

No `.gitignore` entram as pastas pesadas e o projeto do Remotion, que tem um git próprio. Vídeo nunca vai para o repositório.

### 2. A memória: Mem0 no lugar do ai-memory

O roteiro original instala o ai-memory, um servidor local que guarda as sessões. Eu já usava o Mem0, e ter duas memórias separadas é pior do que ter uma. Ficou assim:

- **Mem0** guarda fatos e decisões: "a mídia não fica no computador", "o motor é o Remotion", o perfil, onde o trabalho parou.
- **Neo4j** guarda as correlações: qual referência usa qual estilo, quem criou, em que plataforma saiu.

O `AGENTS.md`, o arquivo que o agente lê ao abrir a pasta, foi reescrito para apontar para essas duas camadas.

### 3. O perfil numa conversa curta

O agente faz as perguntas do perfil em blocos de duas ou três, como uma conversa:

- o que eu faço e onde publico;
- que formatos de vídeo eu uso;
- quem eu admiro;
- como eu falo;
- o que eu não quero de jeito nenhum.

No meu caso, "cara de IA e excesso de efeito sonoro" entraram na lista do que evitar. O agente consulta esse perfil antes de produzir qualquer coisa.

### 4. Pular o instalador pesado

O roteiro 2 do modelo instala tudo o que a edição precisa: de 2 a 6 GB, com quatro motores de motion. Eu já tinha o Remotion, o ffmpeg e três skills de edição de reels prontas, então pulei. A regra que ficou: só instalo uma ferramenta quando ela fizer falta de verdade.

### 5. Skills somam, não competem

O modelo traz skills novas: som de cena, interface recriada para vídeo, animação estilo SaaS e análise de referência. Elas cobrem coisas que as minhas não cobriam, então ficaram.

Só ajustei uma, a `estudio-video`. A descrição dela dizia que era a porta de entrada de qualquer pedido de vídeo, e assim ela poderia passar na frente das minhas skills de reels. Mudei a descrição para ela ceder a vez a elas e usar só o Remotion.

### 6. Catalogar o Palácio mental (131 referências)

O PDF traz 131 referências de motion organizadas por criador, cada uma com título, link, estilo, técnicas e um resumo. O fluxo foi este:

1. **Ler o PDF.** O texto saiu embaralhado na primeira tentativa (explico nos erros, mais abaixo). Com o PyMuPDF virou uma lista limpa: 131 itens, sendo 128 com link e 3 sem link.
2. **Montar a lista de links** em `03-referencias/_entrada/links.md`.
3. **Baixar em lotes de 20**, em 360p e **só a imagem, sem áudio**. Para olhar a referência, isso basta, e uma aula de 2 horas cai de gigabytes para algumas dezenas de MB.
4. **Gerar a folha de contato** de cada vídeo: 8 quadros lado a lado, com o tempo de cada um. O agente olha a folha e confere se bate com o que o PDF descreve.
5. **Organizar e catalogar.** O script renomeia o arquivo, escolhe a categoria (motion, som, design, anúncios), escreve as tags (estilo e técnicas) e uma nota de uma frase, e acrescenta uma linha no `catalogo.md`.
6. **Apagar o vídeo.** Depois de catalogado, o vídeo sai do disco. Fica o link.
7. **O que não baixou entra direto no catálogo**, com a coluna Arquivo vazia e o link na coluna Origem.

### 7. O grafo no Neo4j

Cada referência virou um nó ligado ao que importa:

```
(:Criador)-[:CRIOU]->(:Referencia)-[:TEM_ESTILO]->(:Estilo)
                          |-[:PUBLICADA_EM]->(:Plataforma)
                          |-[:NA_CATEGORIA]->(:Categoria)
(:Criador)-[:COLABOROU]->(:Referencia)
```

Duas decisões fizeram diferença:

- **Um label próprio (`:Estudio`) em todo nó.** O meu Neo4j já tinha outros grafos, e nada se mistura.
- **Estilo virou nó, técnica virou lista.** Os estilos são poucos (17) e se repetem muito, o que gera correlação forte. As técnicas são frases quase únicas: como nós, seriam uns 900 soltos, sem ligação nenhuma. Então elas ficam como lista dentro de cada referência.

Um exemplo de consulta: "referências narradas em 9:16".

```cypher
MATCH (r:Referencia)-[:TEM_ESTILO]->(:Estilo {nome:'narrado'})
WHERE r.proporcao = '9:16'
MATCH (c:Criador)-[:CRIOU]->(r)
RETURN r.titulo, c.nome, r.duracao, r.tecnicas[0..3]
```

Voltaram 10 referências na hora, com as técnicas de cada uma. Outra consulta mostrou que "interface de produto" aparece mais junto com "minimalista" (27 referências), "SaaS" e "tipografia cinética" (18 cada).

### 8. Limpeza: nada pesado no computador

No fim, apaguei:

- os vídeos baixados;
- as folhas de contato;
- os scripts temporários;
- os pacotes que usei uma vez só, do cache do uv.

O que fica é texto no GitHub, o grafo no Neo4j e as decisões no Mem0. Tudo na nuvem.

---

## Os números

| | |
|---|---|
| Referências no catálogo | **131** |
| Vistas por folha de contato | 79 |
| Só com link | 52 (49 que não baixaram + 3 sem link) |
| Criadores no grafo | 59 |
| Estilos | 17 |
| Plataformas | 6 |
| Vídeos guardados no computador | **0** |

---

## Os erros (e por que aconteceram)

### 1. O YouTube bloqueou: "Sign in to confirm you're not a bot"

**O que aconteceu:** no meio do trabalho, o YouTube passou a recusar os downloads sem login. 34 referências ficaram só com o link.

**Por quê:** foram muitos pedidos seguidos, do mesmo IP e sem login. Para piorar, um dos links do PDF era o **canal inteiro** de um criador, não um vídeo. O yt-dlp começou a baixar o canal todo antes de eu interromper. Esse volume de pedidos é exatamente o que dispara a proteção anti-robô.

**Como contornar:**
- **Esperar.** O bloqueio costuma passar em algumas horas ou em um dia. Depois, rodar de novo com pausa entre um link e outro.
- **Usar os cookies do navegador** (`--cookies-from-browser`). Resolve na hora, mas dá ao yt-dlp acesso à sua sessão logada. Só faça isso consciente do risco.
- **Prevenir:** antes de baixar, filtrar todo link que é perfil ou canal (`youtube.com/@...`, `instagram.com/usuario/`, `tiktok.com/@...`). Eles não são vídeo, e eu passei a marcar esses links como falha logo de cara.

### 2. O Instagram pediu login em 2 reels

Alguns posts só abrem para quem está logado. O yt-dlp recebe uma resposta vazia e desiste. Esses dois ficaram só com o link.

### 3. Sites e páginas não são vídeo

Seis links eram páginas: uma plataforma de cursos, um repositório de código, uma loja de sons, a página de anúncios de uma empresa e duas buscas no Pinterest. Não há o que baixar. Entraram no catálogo como referência de link.

### 4. O texto do PDF saiu embaralhado

A primeira extração juntou letras de linhas diferentes, porque o PDF tem camadas de texto sobrepostas. A saída foi ler com o PyMuPDF e juntar os trechos de cada linha na ordem certa.

### 5. A folha de contato travou nas aulas longas

Para tirar cada quadro, o script decodificava o vídeo desde o começo. Numa aula de 2h28, isso leva uma eternidade. A correção: pular direto para 2 segundos antes de cada ponto e decodificar só esse pedaço. A imagem sai igual e muito mais rápido.

### 6. Arquivos com extensão `.unknown_video`

Os vídeos de uma das plataformas de templates vieram sem extensão reconhecida. Eram MP4 normais: bastou renomear.

### 7. Uma página baixou 4 vídeos em vez de 1

O link da home de um site trouxe todos os vídeos da página. Mantive um como amostra e apaguei o resto.

### 8. O cache do uv estava travado

Para limpar os pacotes temporários, o comando de limpeza precisa do cache só para ele. Dois servidores MCP rodando pelo `uvx` estavam usando o cache ao mesmo tempo. Em vez de derrubar esses servidores, apaguei só as entradas que eu mesmo tinha criado naquele dia.

---

## O que dá para fazer agora

- **Começar uma conversa sem explicar nada.** Abrindo o agente dentro da pasta do estúdio, ele já sabe quem eu sou, meu tom, meus formatos e o que eu não quero.
- **Pedir referência por estilo, formato ou técnica.** Por exemplo: "me dá 5 referências de anúncio UGC com menos de 30 segundos".
- **Editar com uma referência como guia.** Por exemplo: "edita esse vídeo no estilo da referência pm-017".
- **Adicionar referência nova em minutos.** Mando o link, o agente baixa, olha, cataloga, liga no grafo e apaga o vídeo.

## Próximos passos

1. Tentar de novo as 34 referências do YouTube, com calma e pausa entre os pedidos.
2. Ligar as referências visuais ao meu grafo de tráfego pago, onde ficam as matrizes de anúncio, os ganchos e os perfis psicológicos. A ideia é pedir "criativo para tal público" e receber o ângulo junto com a referência visual de como executar.

---

## Créditos e links

- **Jeferson de Lima**, autor do modelo Estúdio de IA e do Palácio mental de referências de motion: [instagram.com/jefao.ai](https://www.instagram.com/jefao.ai/)
- **Clube do Motion**: [clubedomotion.com](https://clubedomotion.com)
- **Mem0**, memória de longo prazo para agentes de IA: [mem0.ai](https://mem0.ai)
- **Neo4j**, banco de dados em grafo: [neo4j.com](https://neo4j.com)
- **Remotion**, vídeo feito em código: [remotion.dev](https://www.remotion.dev)
- **Claude Code**: [claude.com/claude-code](https://claude.com/claude-code)

*Os vídeos citados pertencem aos seus criadores. Este post descreve como organizei referências para estudo e não redistribui nenhuma mídia.*

---

### Quer acelerar a produção dos seus vídeos com IA?

Converse diretamente conosco no WhatsApp para estruturar seu estúdio inteligente ou tirar dúvidas sobre o fluxo:

<div class="my-8 text-center not-prose">
  <a
    href="https://wa.me/5592985582795?text=Ol%C3%A1%2C%20vi%20o%20artigo%20sobre%20v%C3%ADdeo%20de%20motion%20com%20IA%20e%20quero%20editar%20r%C3%A1pido."
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00A39E] text-black font-bold text-base hover:bg-[#00b5af] hover:shadow-[0_0_25px_rgba(0,163,158,0.4)] transition-all duration-300 shadow-lg shadow-[#00A39E]/20 cursor-pointer no-underline group"
  >
    <span>Quero editar rápido</span>
    <svg class="w-5 h-5 fill-current inline-block ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 6.84C9.34 6.84 9.03 6.91 8.77 7.19C8.5 7.46 7.77 8.16 7.77 9.58C7.77 11 8.81 12.37 8.95 12.56C9.1 12.75 11 15.68 13.9 16.94C14.59 17.24 15.13 17.42 15.55 17.56C16.24 17.78 16.87 17.75 17.37 17.68C17.93 17.6 19.09 16.98 19.33 16.3C19.57 15.62 19.57 15.04 19.5 14.92C19.42 14.8 19.23 14.73 18.94 14.58C18.66 14.44 17.27 13.76 17.02 13.66C16.76 13.56 16.57 13.52 16.38 13.81C16.19 14.1 15.64 14.73 15.47 14.92C15.3 15.12 15.14 15.14 14.85 15C14.56 14.85 13.64 14.55 12.54 13.57C11.69 12.81 11.11 11.87 10.94 11.58C10.78 11.3 10.92 11.14 11.07 11C11.2 10.87 11.36 10.66 11.5 10.5C11.65 10.33 11.7 10.21 11.8 10.02C11.89 9.82 11.84 9.66 11.77 9.51C11.7 9.37 11.12 7.93 10.88 7.36C10.65 6.79 10.41 6.87 10.24 6.86C10.07 6.85 9.87 6.84 9.53 6.84Z"/>
    </svg>
  </a>
  <p class="text-xs text-neutral-500 mt-2 font-sans">
    WhatsApp • +55 (92) 98558-2795 • Resposta rápida
  </p>
</div>
