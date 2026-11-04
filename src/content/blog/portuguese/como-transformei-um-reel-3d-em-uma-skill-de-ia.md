---
title: "Como transformei um reel 3D em uma skill de IA (e por que esse formato vende)"
description: "Vi um reel com um bonequinho 3D andando por uma trilha de hexágonos e quis fazer igual. Em um dia, a referência virou análise no meu segundo cérebro, um vídeo e uma skill para o Claude Code."
image: "/images/blog-post/como-transformei-um-reel-3d-em-uma-skill-de-ia.jpg"
imageAlt: "Como transformei um reel 3D em uma skill de IA - Maurício Leite"
date: 2026-11-04
author: "Maurício Leite"
avatarUrl: "/images/perfil.jpg"
categories:
  - "Vídeos com IA"
tags:
  - "Motion com IA"
  - "Remotion"
  - "Claude Code"
  - "React Three Fiber"
  - "3D Low-Poly"
  - "Skill de IA"
  - "ElevenLabs"
readTime: 6
featured: true
draft: false
youtubeId: "EGych7uiPSU"
videoBadgeText: "Jornada 3D • YouTube Shorts"
videoDurationText: "00:45 min"
videoTitle: "Do WhatsApp ao Agente no Ar: Vídeo Explicador 3D Low-Poly"
videoAspectRatio: "9/16"
---

**Resumo:** vi um reel com um bonequinho 3D andando por uma trilha de hexágonos e quis fazer igual. Em um dia, a referência virou análise no meu [segundo cérebro](/blog/como-fazer-video-de-motion-com-ia/), depois um vídeo de 45 segundos sobre o meu [serviço de agente de IA no WhatsApp](/agente-de-ia-para-whatsapp/) e, no fim, uma skill que qualquer pessoa pode baixar e usar no Claude Code.

---

## O formato

Você provavelmente já viu: um bonequinho low-poly (3D com poucos polígonos e cores chapadas, como nos jogos de celular) para em cima de um hexágono. A narração começa, e objetos vão surgindo ao lado dele: uma placa, um telão, engrenagens. Ele anda até o próximo hexágono, o piso acende, e uma nova etapa começa. No final, a câmera sobe, mostra a trilha inteira com tudo o que aconteceu no caminho e aparece um "PARABÉNS!".

É um explicador em formato de jornada. Cada hexágono é uma etapa de um processo, e quem assiste sente que avançou de fase.

Não é vídeo gerado por IA. É uma cena 3D de verdade, montada e animada em código.

## Passo 1: a referência entrou no segundo cérebro

Tenho uma pasta que chamo de [segundo cérebro do meu estúdio de vídeo](/blog/como-fazer-video-de-motion-com-ia/). Lá ficam quem eu sou, as ferramentas, o método e, principalmente, as referências. A regra é simples: **todo vídeo que eu analiso vira um documento**, detalhado o bastante para ninguém precisar abrir a fonte de novo.

Com esse reel foi assim:

1. O Claude baixou o vídeo, tirou 16 quadros ao longo dele e montou uma folha de contato para "assistir" de uma vez.
2. Escreveu a análise: o cenário, o caminho de hexágonos, a câmera em terceira pessoa, as etiquetas em pílula, o título amarelo de cada etapa, a legenda palavra por palavra, o zoom-out final e o ritmo segundo a segundo.
3. Registrou a referência no catálogo e num [**grafo de conhecimento (Neo4j)**](/blog/melhor-configuracao-agentes-ia-whatsapp-grafos-neo4j/), ligada ao formato "jornada 3D low-poly" e aos estilos dela. Quando eu pedir "uma referência de explicador gamificado", ela aparece junto com as parecidas.
4. Guardou as decisões na [memória de longo prazo](/blog/mem0-open-source-architecture-and-self-hosting-guide/), para a próxima conversa já saber o que foi combinado.

O resultado é que a referência deixou de ser um vídeo salvo no Instagram e virou conhecimento que a IA consulta antes de produzir.

## Passo 2: o roteiro

Eu estava montando a página do meu [serviço de agente de IA para WhatsApp](/agente-de-ia-para-whatsapp/), e o formato encaixou: o serviço tem etapas, e a jornada mostra etapas.

O roteiro ficou em estações:

| Estação | O que aparece | Narração |
|---|---|---|
| Abertura | Celular vibrando, "47 MENSAGENS SEM RESPOSTA" | "Seu WhatsApp não para. E você não consegue responder todo mundo." |
| 1. Diagnóstico | Lupa sobre balões de conversa que se organizam em grupos | "Primeiro, eu olho o seu atendimento e descubro o que seus clientes mais perguntam." |
| 2. Treinamento | Livros, PDF e tabela de preços voando para dentro de um cérebro | "Depois, treino o agente com as informações da sua empresa..." |
| 3. Teste | Conversa no celular e um check verde | "Você conversa com ele e aprova antes de qualquer cliente." |
| 4. No ar | O céu escurece, a lua aparece, o relógio marca 23h e o celular responde | "Sexta à noite, domingo, feriado: responde em segundos e já agenda." |
| 5. Memória | Uma cliente volta meses depois, e os fatos dela acendem: "Ana", "corte na terça" | "Ele não começa do zero, ele continua a conversa." |
| Final | Zoom-out com a trilha inteira, confete e "PARABÉNS!" | "...e o seu WhatsApp vende 24 horas por dia." |

Três regras guiaram o texto:

- **Uma ideia por estação.** No máximo 4 objetos e 2 etiquetas.
- **Uma cena concreta vale mais que uma frase genérica.** "Lembra de cada cliente" virou a Ana voltando e o agente perguntando se ela quer o mesmo horário de terça.
- **O final é a assinatura.** O "PARABÉNS!" fecha a jornada e mostra o resultado.

## Passo 3: narração, 3D e revisão

- **Narração:** gerada no [ElevenLabs](/blog/como-fazer-anuncio-formato-podcast-ia/) (modelo v4, voz em português do Brasil) e aprovada antes de qualquer animação. Animar em cima de um áudio que ainda vai mudar é retrabalho garantido.
- **Sincronia:** a narração foi transcrita palavra por palavra. Cada objeto entra exatamente na palavra que fala dele.
- **3D:** tudo foi feito no [Remotion](/blog/como-fazer-video-de-motion-com-ia/), que monta vídeo com código React, mais o módulo 3D dele. Nenhum modelo 3D foi baixado: o hexágono é um cilindro de 6 lados, a árvore é um cone, o boneco são caixas e uma esfera.

A primeira versão saiu boa, mas a revisão encontrou três coisas:

1. **Formato errado.** Saiu em paisagem, e o lugar dele é o Reels, em 9:16.
2. **Pouco som.** Nesse estilo dá para abusar: passos quando o boneco anda, um "level up" quando o hexágono acende e um pop em cada objeto que surge. Eu gerei esses efeitos no ElevenLabs.
3. **A trilha do final estava vazia.** No zoom-out, cada estação precisa mostrar o que aconteceu nela, senão parece que nada foi construído.

A segunda versão corrigiu tudo isso, e só então virou skill.

## Passo 4: a skill

Uma skill é um pacote de instruções que o Claude Code lê antes de fazer uma tarefa. Em vez de explicar tudo de novo a cada vídeo, eu peço "faz uma jornada 3D explicando as etapas de [seu processo]" e ele já sabe:

- as regras do formato: 9:16, som em tudo, trilha cheia no final e narração aprovada antes de animar;
- o passo a passo, do roteiro em estações ao volume final do áudio;
- os números de câmera que funcionaram na vertical;
- os erros que já cometemos e como evitar cada um: objetos gigantes na frente da câmera, rosto escuro, etiqueta cortada na borda, transcrição errada;
- o código completo do vídeo aprovado, como modelo para copiar.

A skill nasceu depois do vídeo, de propósito. Primeiro testamos, erramos e corrigimos. Depois escrevemos. Se a skill viesse antes, ela ensinaria só teoria.

## Baixe a skill

**[Baixar a skill editar-reels-jornada-3d (.zip)](/downloads/editar-reels-jornada-3d.zip)**

O pacote traz:

- `SKILL.md`: o método e as regras;
- `references/modelo-jornada-3d.tsx`: o vídeo de exemplo completo;
- `references/sons.md`: a lista de efeitos e os prompts para gerar cada um;
- `LEIA-ME.md`: o passo a passo da instalação.

**Para instalar:** descompacte em `~/.claude/skills/`, crie um projeto Remotion, instale `@remotion/three three @react-three/fiber` e peça ao Claude Code: "faz uma jornada 3D explicando as etapas de [seu processo]". A narração e os sons não vêm no pacote. Use a sua voz e gere os efeitos com os prompts.

---

## Para quem é esse tipo de animação

Funciona melhor com **público leigo que precisa entender um processo**. O desenho de jogo deixa o assunto leve, e a trilha mostra "onde estamos" o tempo todo, o que reduz a sensação de que é complicado.

Combina com:

- **Prestadores de serviço com etapas:** agência, consultoria, [clínica](/blog/estudo-de-caso-dora-ia-saude-auditiva-brasilia/), escritório, implantação de software. É a resposta visual para "como funciona trabalhar com você?".
- **Infoprodutos e métodos:** "o método em 5 passos" vira 5 hexágonos.
- **Produtos com mecanismo:** quando você precisa explicar por que funciona, a jornada mostra a causa e o efeito em sequência.
- **Onboarding de clientes:** o que acontece depois que a pessoa compra.

Combina menos com produtos de luxo ou marcas muito sérias, em que o visual de jogo pode destoar, e com ofertas de compra por impulso, que não têm processo para explicar.

## Dá para fazer anúncio com isso?

Dá, e ele rende mais em alguns momentos:

- **Meio de funil (consideração):** a pessoa já conhece o problema e quer saber como você resolve. A jornada é, literalmente, o "como".
- **Explicação de mecanismo:** quando a promessa precisa de uma lógica para ser acreditada, as estações mostram essa lógica passo a passo.
- **Quebra de objeção:** "deve ser complicado", "vou ter trabalho". Mostrar o caminho inteiro, com uma etapa em que o cliente só testa e aprova, responde isso sem precisar dizer.
- **Remarketing:** para quem visitou a página e não comprou, o vídeo mostra o processo completo e termina no resultado.
- **Na própria página de vendas:** na [seção "como funciona"](/agente-de-ia-para-whatsapp/), com as etapas também escritas em texto ao lado.

No **topo de funil** (público frio), ele pode funcionar como quebra de padrão, porque destoa do feed. Mas o gancho precisa vir nos primeiros 2 segundos: a dor aparece logo na primeira estação, antes de o boneco andar. Uma abertura parada, só com o cenário, perde gente.

---

## Perguntas frequentes

**Preciso saber programar?**
Não para usar a skill: você descreve o processo e o Claude Code monta o código. Ajuda ter o Node.js instalado e saber rodar um comando no terminal.

**Preciso de um programa de 3D, como o Blender?**
Não. Toda a cena é feita com formas simples, direto no código do Remotion.

**Quanto tempo leva?**
Neste caso, foram cerca de 45 segundos de vídeo, renderizados em poucos minutos num notebook comum. O que mais toma tempo é o roteiro e a aprovação da narração.

**Quanto custa?**
O Remotion é gratuito para pessoas e empresas pequenas (confira a licença no site deles). Também entram o custo do Claude Code e o da voz e dos sons, se você usar o ElevenLabs.

**Posso usar a minha própria voz?**
Pode. Grave, solte o áudio na pasta do projeto e a skill sincroniza tudo pela transcrição.

**Funciona em 16:9, para YouTube ou site?**
O padrão é 9:16, para Reels, TikTok e Shorts. Para 16:9, a câmera e os textos precisam de ajustes. A primeira versão deste vídeo foi feita assim.

**Quantas etapas cabem?**
De 3 a 6 estações funcionam bem em 30 a 60 segundos. Mais que isso cansa. Divida em dois vídeos.

**Posso mudar o boneco, as cores e o cenário?**
Pode. O boneco, os hexágonos, as árvores e as cores são todos editáveis no modelo. Peça a mudança em português ("põe o boneco de camisa vermelha", "cenário de cidade").

**Os sons vêm junto?**
Não. O pacote traz a lista de efeitos e os prompts para você gerar cada um no ElevenLabs, ou usar a sua biblioteca de sons.

**Funciona no Codex ou em outras IAs?**
O `SKILL.md` é texto comum com o método completo. Qualquer agente que leia arquivos e rode comandos consegue seguir.

**O que é esse "segundo cérebro"?**
É uma pasta organizada com tudo o que a IA precisa saber para produzir do seu jeito: o seu perfil, as ferramentas, o método, as referências analisadas e o registro de cada sessão. Por trás, um [grafo de conhecimento](/blog/melhor-configuracao-agentes-ia-whatsapp-grafos-neo4j/) liga as referências entre si, e uma [memória de longo prazo](/blog/mem0-open-source-architecture-and-self-hosting-guide/) guarda as decisões.

