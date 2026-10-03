---
title: "Instalar o MCP do Google Search Console no Windows: Guia Definitivo com Claude Desktop"
description: "Aprenda o passo a passo completo e testado na prática para conectar o Claude Desktop ao Google Search Console no Windows. Inclui códigos prontos, solução dos erros mais comuns e download exclusivo da Skill."
image: "/images/blog-post/tutorial-mcp-gsc.png"
imageAlt: "Tutorial Instalar MCP Google Search Console no Windows com Claude Desktop"
date: 2026-10-03
author: "Maurício Leite"
avatarUrl: "/images/perfil.jpg"
categories:
  - "Automações & IA"
tags:
  - "Claude Desktop"
  - "Google Search Console"
  - "MCP"
  - "SEO"
  - "Windows"
  - "Inteligência Artificial"
readTime: 12
featured: true
draft: false
---

Conectar modelos avançados de inteligência artificial diretamente às fontes de dados do seu negócio é o maior divisor de águas da automação moderna. Graças ao **Model Context Protocol (MCP)**, você não precisa mais exportar planilhas manuais do Google Search Console para depois subir em chats: o próprio **Claude Desktop** passa a ler, inspecionar e auditar os dados orgânicos do seu site em tempo real através de linguagem natural.

No entanto, quem utiliza o **Windows** frequentemente esbarra em particularidades do sistema operacional: comandos de terminal desenhados originalmente para Linux/macOS, variáveis de ambiente que o Claude não enxerga, sandboxes da Microsoft Store e armadilhas de extensões ocultas de arquivos.

Neste guia definitivo e testado na prática, você aprenderá exatamente como configurar o MCP oficial do Google Search Console no Windows, terá acesso ao vídeo demonstrativo, poderá baixar a **Skill exclusiva pronta para uso** e aprenderá a contornar cada um dos erros típicos do ambiente Windows.

---

## Assista ao Vídeo Tutorial Prático

Se você prefere acompanhar a instalação passo a passo na tela, assista ao vídeo completo abaixo antes de executar os comandos:

<div class="not-prose my-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black relative group cursor-pointer" id="yt-lite-player">
  <img
    src="https://i.ytimg.com/vi/pJVmzRl3iDA/maxresdefault.jpg"
    alt="Instalar o MCP do Google Search Console no Windows - Maurício Leite"
    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    loading="lazy"
  />
  <div class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/20 flex items-center justify-center">
    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#00A39E] flex items-center justify-center shadow-[0_0_30px_rgba(0,163,158,0.5)] transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#00c4be]">
      <svg class="w-7 h-7 sm:w-8 sm:h-8 text-[#111111] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    </div>
  </div>
  <div class="absolute bottom-3 left-4 right-4 text-xs font-semibold text-white/90 drop-shadow-md flex items-center justify-between pointer-events-none">
    <span>▶ Clique para assistir ao tutorial prático</span>
    <span class="bg-black/60 px-2.5 py-1 rounded-md text-[11px] font-mono text-[#00A39E]">YouTube 1080p</span>
  </div>
</div>

<script is:inline>
  document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('yt-lite-player');
    if (player) {
      player.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('class', 'w-full h-full');
        iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/pJVmzRl3iDA?autoplay=1&rel=0');
        iframe.setAttribute('title', 'Instalar o MCP do Google Search Console no Windows - Maurício Leite');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', 'true');
        player.innerHTML = '';
        player.appendChild(iframe);
      }, { once: true });
    }
  });
</script>

---

## Download da Skill Exclusiva

Para quem utiliza agentes inteligentes e ferramentas compatíveis com skills de automação (como o ecossistema Claude, Antigravity ou Cursor), disponibilizei o pacote oficial da skill para download direto:

<div class="not-prose my-8 rounded-2xl border border-[#00A39E]/30 bg-[#161616] p-6 md:p-8 shadow-xl relative overflow-hidden">
  <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A39E] via-[#4285F4] to-[#00A39E]"></div>
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div class="space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A39E]/10 border border-[#00A39E]/30 text-[#00A39E] text-xs font-semibold uppercase tracking-wider">
        Recurso para Download
      </div>
      <h3 class="text-xl md:text-2xl font-['Sora',sans-serif] font-bold text-white m-0">instalar-mcp-gsc-windows.skill</h3>
      <p class="text-sm text-[#C6C6C6] max-w-[600px] m-0">
        Pacote estruturado com as instruções normativas, comandos de diagnóstico e cheatsheet de resolução de problemas para instalar e validar o MCP do Search Console no Windows.
      </p>
    </div>
    <a
      href="/downloads/instalar-mcp-gsc-windows.skill"
      download="instalar-mcp-gsc-windows.skill"
      style="color: #111111 !important; background-color: #00A39E !important;"
      class="shrink-0 inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-['Sora',sans-serif] font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(0,163,158,0.35)] hover:shadow-[0_0_30px_rgba(0,163,158,0.6)] hover:brightness-110 hover:scale-105 cursor-pointer no-underline"
    >
      <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="#111111" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span style="color: #111111 !important;">Baixar Skill (.skill)</span>
    </a>
  </div>
</div>

---

## Antes de Começar: Checklist de Pré-Requisitos

Antes de abrir o terminal, certifique-se de que os três itens abaixo estão prontos:

1. **Claude Desktop instalado:** É necessário o aplicativo nativo para desktop (disponível em [anthropic.com/claude-desktop](https://claude.ai/download)). Extensões de navegador ou a versão web simples não executam servidores MCP locais.
2. **Conta no Google Cloud Console:** Acesso ativo ao console da Google ([console.cloud.google.com](https://console.cloud.google.com/)) para geração de credenciais OAuth.
3. **Propriedade verificada no Google Search Console:** O site ou domínio que você quer auditar já deve estar vinculado e validado na sua conta Google.

---

## Passo a Passo Completo de Instalação

### Passo 1: Instalar o gerenciador `uv` via PowerShell

O pacote oficial do MCP Search Console (`mcp-search-console`) roda através do **uv**, o gerenciador de pacotes ultrarrápido do ecossistema Python desenvolvido pela Astral.

Abra o **PowerShell** (não use o Prompt de Comando comum CMD). Pressione `Win + X` e selecione **Windows Terminal** ou **PowerShell**:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Após a conclusão da instalação, feche o PowerShell e abra uma nova janela para carregar as alterações. Confirme se o comando está funcionando:

```powershell
uv --version
```

> **Resultado esperado:** O terminal deve retornar a versão instalada, por exemplo `uv 0.12.5`.

---

### Passo 2: Gerar as credenciais OAuth no Google Cloud Console

Para que o Claude leia suas métricas sem violar a segurança da Google, é necessário criar uma chave de autorização OAuth 2.0:

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/) e crie um novo projeto (ou selecione um projeto existente).
2. Ative a **Google Search Console API** acessando a [Biblioteca de APIs do Search Console](https://console.cloud.google.com/apis/library/searchconsole.googleapis.com) e clicando em **Ativar**.
3. Configure a **Tela de consentimento OAuth**:
   - Defina o tipo de usuário como Externo.
   - Adicione o seu e-mail do Google na lista de **Usuários de teste** (Passo obrigatório enquanto o app estiver em modo de teste).
4. Crie a credencial:
   - Vá para o menu [Credenciais](https://console.cloud.google.com/apis/credentials).
   - Clique em **+ Criar Credenciais** → **ID do cliente OAuth**.
   - Em *Tipo de aplicativo*, selecione obrigatoriamente **App para computador** (Desktop App).
   - Dê um nome (ex: `Claude Desktop MCP`) e clique em **Criar**.
5. No pop-up que surgir com a credencial criada, clique em **Fazer download do JSON**.

---

### Passo 3: Salvar o JSON num local definitivo e evitar a armadilha do `.json.json`

Mova o arquivo baixado para uma pasta permanente (nunca deixe na pasta *Downloads*, pois ela pode ser apagada por engano).

**Caminho sugerido:**
```text
C:\Users\SEU_USUARIO\mcp-gsc\client_secrets.json
```

> ⚠️ **A maior armadilha do Windows:** Por padrão, o Windows esconde extensões de arquivos conhecidos. Se você renomear o arquivo baixado no Explorador de Arquivos para `client_secrets.json`, o Windows pode secretamente salvá-lo como `client_secrets.json.json`. O Claude emitirá um erro de que o arquivo não existe, mesmo que o caminho aparente estar correto.

Para diagnosticar e garantir que o nome está correto, execute no PowerShell:

```powershell
Get-ChildItem "C:\Users\$env:USERNAME\mcp-gsc"
```

Se o nome exibido for `client_secrets.json.json`, corrija imediatamente com o comando:

```powershell
Rename-Item "C:\Users\$env:USERNAME\mcp-gsc\client_secrets.json.json" "client_secrets.json"
```

Valide se o caminho responde positivamente (deve retornar `True`):

```powershell
Test-Path "C:\Users\$env:USERNAME\mcp-gsc\client_secrets.json"
```

---

### Passo 4: Descobrir o caminho absoluto do `uvx.exe`

O Claude Desktop não herda automaticamente a variável de ambiente `PATH` da sessão interativa do seu terminal no Windows. Por isso, precisamos passar o caminho completo e absoluto para o binário do `uvx.exe`.

Descubra o local exato executando no PowerShell:

```powershell
Get-Command uvx | Select-Object -ExpandProperty Source
```

> **Exemplo de saída típica:**
> `C:\Users\SEU_USUARIO\.local\bin\uvx.exe`  
> Guarde esse caminho exato.

---

### Passo 5: Localizar a pasta do `claude_desktop_config.json`

O arquivo de configuração do Claude Desktop fica localizado na pasta de dados de aplicativos.

Cole o comando abaixo na barra de endereços do **Explorador de Arquivos** e pressione `Enter`:

```text
%APPDATA%\Claude
```

Se o arquivo `claude_desktop_config.json` não existir nessa pasta, você pode criá-lo com o Bloco de Notas.

> 💡 **Instalação via Microsoft Store?** Se o Windows informar que não encontrou o caminho `%APPDATA%\Claude`, seu aplicativo foi instalado através da loja da Microsoft em modo sandbox. O caminho real fica localizado em:
> `C:\Users\SEU_USUARIO\AppData\Local\Packages\Claude_<hash>\LocalCache\Roaming\Claude`

---

### Passo 6: Editar o arquivo de configuração com atenção às barras duplas

Abra o arquivo `claude_desktop_config.json`. 

> **Regra fundamental:** Se você já tiver outros servidores MCP configurados (como Neo4j, Supabase ou Google Tag Manager), **nunca apague o conteúdo existente**. Apenas adicione a chave `"gscServer"` dentro do objeto `"mcpServers"`.

Repare também que os caminhos no arquivo JSON do Windows devem utilizar **barras invertidas duplas (`\\`)**:

```json
{
  "mcpServers": {
    "gscServer": {
      "command": "C:\\Users\\SEU_USUARIO\\.local\\bin\\uvx.exe",
      "args": ["mcp-search-console"],
      "env": {
        "GSC_OAUTH_CLIENT_SECRETS_FILE": "C:\\Users\\SEU_USUARIO\\mcp-gsc\\client_secrets.json"
      }
    }
  }
}
```

*(Substitua `SEU_USUARIO` pelo seu usuário real do Windows nos dois caminhos).*

---

### Passo 7: Reiniciar o Claude Desktop por completo

Fechar a janela do Claude clicando no `X` superior **não encerra o processo**, pois o Claude continua em execução em segundo plano na bandeja do sistema.

Para aplicar a nova configuração:
1. Vá até a **Bandeja do Sistema** (ícones ocultos perto do relógio do Windows).
2. Clique com o botão direito no ícone do Claude.
3. Escolha **Sair / Quit**.
4. Inicie o Claude Desktop novamente.

---

### Passo 8: Testar a Conexão no Chat

Abra um novo chat no Claude Desktop e digite:

```text
List my GSC properties
```

Na primeira execução, o Claude abrirá automaticamente uma aba no seu navegador padrão solicitando autorização na sua conta Google. Conceda as permissões.

Se o Claude listar todas as suas propriedades do Search Console, parabéns: sua IA agora tem acesso direto aos dados orgânicos do seu domínio!

---

## Guia de Resolução de Problemas no Windows (Troubleshooting)

<details class="my-4 rounded-xl border border-white/10 bg-[#161616] p-4 text-sm text-[#C6C6C6]">
  <summary class="font-semibold text-white cursor-pointer hover:text-[#00A39E] transition-colors">
    ❌ Colei o comando com 'curl | sh' e deu erro no terminal
  </summary>
  <div class="mt-3 pl-4 border-l-2 border-[#00A39E] space-y-2">
    <p><strong>Causa:</strong> Documentações oficiais frequentemente indicam comandos voltados para Linux ou macOS (Unix). O Prompt de Comando do Windows não reconhece o pipe para <code>sh</code>.</p>
    <p><strong>Solução:</strong> Utilize sempre o PowerShell com o comando oficial do Passo 1: <code>powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code>.</p>
  </div>
</details>

<details class="my-4 rounded-xl border border-white/10 bg-[#161616] p-4 text-sm text-[#C6C6C6]">
  <summary class="font-semibold text-white cursor-pointer hover:text-[#00A39E] transition-colors">
    ❌ Erro "GSC_OAUTH_CLIENT_SECRETS_FILE ... file does not exist"
  </summary>
  <div class="mt-3 pl-4 border-l-2 border-[#00A39E] space-y-2">
    <p><strong>Causa:</strong> Quase sempre decorre de extensão dupla gerada pelo Explorador do Windows (<code>client_secrets.json.json</code>) ou de barras simples no arquivo JSON.</p>
    <p><strong>Solução:</strong> Use o comando <code>Get-ChildItem</code> no PowerShell para confirmar a extensão real e certifique-se de usar barras duplas (<code>\\</code>) no arquivo de configuração.</p>
  </div>
</details>

<details class="my-4 rounded-xl border border-white/10 bg-[#161616] p-4 text-sm text-[#C6C6C6]">
  <summary class="font-semibold text-white cursor-pointer hover:text-[#00A39E] transition-colors">
    ❌ "Usuários" vs "Users" no caminho do disco
  </summary>
  <div class="mt-3 pl-4 border-l-2 border-[#00A39E] space-y-2">
    <p><strong>Falso Alarme:</strong> Mesmo que o Explorador exiba a pasta como "Usuários" em sistemas traduzidos para português, o caminho físico real interpretado pelo Windows continua sendo <code>C:\Users\SEU_USUARIO</code>. Nunca altere para "Usuários" no JSON de configuração.</p>
  </div>
</details>

<details class="my-4 rounded-xl border border-white/10 bg-[#161616] p-4 text-sm text-[#C6C6C6]">
  <summary class="font-semibold text-white cursor-pointer hover:text-[#00A39E] transition-colors">
    ❌ Erro "Too many URLs provided" ao inspecionar páginas
  </summary>
  <div class="mt-3 pl-4 border-l-2 border-[#00A39E] space-y-2">
    <p><strong>Causa:</strong> A API oficial do Google Search Console limita requisições de inspeção a lotes de no máximo 10 URLs por chamada para evitar esgotamento de cotas.</p>
    <p><strong>Solução:</strong> Peça ao Claude para analisar sua lista de URLs dividida em grupos de 10 por requisição.</p>
  </div>
</details>

---

## O que Perguntar ao Claude após a Conexão?

Com o MCP conectado, você pode transformar auditorias complexas em perguntas cotidianas:

| Área de Análise | Exemplo de Comando ou Pergunta para o Claude |
| :--- | :--- |
| **Performance de Termos** | *"Quais foram os 10 termos com maior número de impressões mas com CTR abaixo de 2% nos últimos 28 dias?"* |
| **Páginas com Queda** | *"Compare o tráfego orgânico das minhas 5 principais páginas entre este mês e o mês anterior e aponte quedas acentuadas."* |
| **Inspeção de Indexação** | *"Verifique o status de indexação destas 5 URLs e me diga se há erros de canônica ou noindex ativo."* |
| **Auditoria de Sitemaps** | *"Liste todos os sitemaps cadastrados no meu domínio e verifique se há alertas de processamento pendentes."* |

---

## Conclusão

A integração do Claude Desktop com o Google Search Console via MCP elimina o atrito de alternar entre abas, planilhas e filtros manuais. Com essa configuração estável no Windows, suas decisões de SEO, ajustes de conteúdo e diagnósticos de indexação passam a ser orientados por dados atualizados e interpretados com profundidade pela IA.

Se você curtiu este tutorial, lembre-se de **baixar a Skill** para seus agentes e compartilhar este conteúdo com outros desenvolvedores e profissionais de SEO que utilizam o Windows!
