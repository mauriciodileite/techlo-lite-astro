---
title: "Modelo de Atribuição no Meta Ads: Padrão vs Incremental"
description: "Por que a atribuição padrão do Meta Ads infla seus resultados, o que muda com a atribuição incremental e por que a API de Conversões bem configurada é pré-requisito para medir o lucro real das campanhas."
image: "/images/blog-post/modelo-atribuicao-meta-ads-incremental.webp"
imageAlt: "Modelo de atribuição no Meta Ads: comparação entre atribuição padrão e incremental"
date: 2026-11-25
author: "Maurício Leite"
avatarUrl: "/images/perfil.jpg"
categories:
  - "Tráfego Pago & Mídia"
tags:
  - "Meta Ads"
  - "Modelo de Atribuição"
  - "Atribuição Incremental"
  - "API de Conversões"
  - "Tráfego Pago"
keywords:
  - "modelo de atribuição meta ads"
  - "atribuição incremental meta"
  - "janela de atribuição meta ads"
readTime: 5
draft: false
---

Recentemente estudei um ponto de vista sobre o modelo de atribuição no Gerenciador de Anúncios da Meta. Ainda não testei, mas com certeza vou aplicar nas minhas próximas campanhas.

Acredito muito que a Meta possui modelos de otimização pensados para os anunciantes, e isso vem sendo apontado nos seus principais canais. Hoje, 25 de novembro, abri meu e-mail e estava lá um [podcast do Jon Loomer](https://pubcast.jonloomer.com/our-thinking-about-attribution-is-all-wrong/) falando sobre modelo de atribuição. Isso pegou muito a minha atenção, e venho aqui descrever o que aprendi.

## O que é a atribuição padrão

O primeiro ponto é que o modelo de atribuição padrão da Meta diz respeito a um **volume maior de dados** — não necessariamente a conversão registrada na Meta veio do seu anúncio. A pessoa pode ter clicado no seu anúncio e, alguns dias depois, comprado por um e-mail, pelo Google ou pela Amazon, e ainda assim a Meta atribui a conversão ao Gerenciador de Anúncios.

Está errado usar isso? Claro que não. A atribuição padrão serve para quem precisa de maior volume de dados, e por isso ela vem selecionada no gerenciador.

![Modelo de atribuição Padrão selecionado no Gerenciador de Anúncios da Meta](/images/blog-post/atribuicao-meta-ads-image1.webp)

Já a configuração de atribuição traz por padrão janelas de clique, engajamento e visualização (como na imagem abaixo). Segundo o podcast, isso te dá mais volume de dados para a campanha, principalmente pela busca desesperada por volume:

* Vender produtos por meio de anúncios costuma ser difícil e caro, o que gera uma dificuldade constante para atingir um volume expressivo de conversões.
* Como o volume é difícil de alcançar, os anunciantes acabam aceitando "qualquer volume que conseguirem", mesmo que venha de janelas amplas de clique e visualização, com a compra concluída por outros canais.
* A atribuição padrão fornece esses dados superficiais para ajudar a atingir a meta de volume que o anunciante e a operação desejam ver.

![Configurações de atribuição no Meta Ads: 7 dias de clique, 1 dia de engajamento e 1 dia de visualização](/images/blog-post/atribuicao-meta-ads-image2.webp)

## A ilusão dos números e a aversão à queda no painel

* O principal motivo pelo qual as pessoas evitam a atribuição incremental é que **elas veem as conversões relatadas caírem no painel** e interpretam isso como um resultado ruim.
* Na prática, a atribuição padrão infla a coluna de resultados com conversões incidentais — por exemplo, pessoas que viram o anúncio de relance, mas compraram por causa de um e-mail ou de uma busca no Google.
* Quando o anunciante ativa a atribuição incremental, a Meta deixa de reportar essas vendas casuais. À primeira vista parece que a campanha piorou, mas na verdade a ferramenta só eliminou números superficiais para focar no que de fato gerou impacto no lucro real.

## A crença equivocada de que isso ajuda o algoritmo a "aprender"

* Historicamente, criou-se a teoria de que janelas longas (como 7 dias de clique e 1 dia de visualização) eram necessárias para "ajudar o algoritmo a entender a fase de consideração do usuário".
* O Jon Loomer pontua que essa ideia estava errada: abrir essas janelas nunca ajudou a Meta a otimizar melhor. Só serviu para capturar conversões de remarketing ou preencher métricas com dados que o anúncio não causou diretamente.

## Minha opinião

Você precisa deixar muito bem configurada a **API de Conversões da Meta** para que a atribuição seja feita de forma correta. O modelo incremental está intimamente ligado a atribuir apenas o que veio dos seus anúncios, e não causas acidentais dentro da janela de atribuição — e sem sinal de qualidade isso não funciona.

Portanto, as pessoas recorrem ao padrão porque ele **faz os números parecerem maiores e melhores no relatório**, enquanto o incremental exige maturidade para aceitar um número menor de conversões na tela em troca de saber com exatidão o que realmente gera lucro.

## Por que se chama "incremental"?

O termo vem literalmente da palavra **incremento**, que significa acréscimo, adição ou ganho extra.

No marketing e na análise de dados, uma conversão é chamada de incremental quando representa uma venda adicional que só aconteceu porque o anúncio foi exibido — ou seja, um resultado que não teria ocorrido de forma alguma se a campanha estivesse desligada.

## Por que o nome importa para o seu bolso

Quando você avalia uma campanha pela ótica incremental, para de pagar comissão ou comemorar métricas por clientes que já iriam comprar. O foco passa a ser unicamente o **lucro líquido gerado a partir do zero pelos anúncios**.

Tem alguma dúvida ou quer dar outro ponto de vista? Comenta aqui embaixo, na aba "Comentários".
