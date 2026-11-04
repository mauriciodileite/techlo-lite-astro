import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradiente de Fundo -->
    <radialGradient id="glowPetronas" cx="80%" cy="25%" r="60%">
      <stop offset="0%" stop-color="#00A39E" stop-opacity="0.22" />
      <stop offset="60%" stop-color="#00A39E" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#111111" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowSecondary" cx="20%" cy="80%" r="50%">
      <stop offset="0%" stop-color="#00A39E" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#111111" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#182229" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#10171c" stop-opacity="0.9" />
    </linearGradient>
    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00A39E" />
      <stop offset="100%" stop-color="#29FF54" />
    </linearGradient>
  </defs>

  <!-- Fundo Preto Pista Oficial -->
  <rect width="1200" height="630" fill="#111111" />
  <rect width="1200" height="630" fill="url(#glowPetronas)" />
  <rect width="1200" height="630" fill="url(#glowSecondary)" />

  <!-- Grid decorativo sutil -->
  <g stroke="#ffffff" stroke-width="0.5" opacity="0.04">
    <line x1="0" y1="105" x2="1200" y2="105" />
    <line x1="0" y1="210" x2="1200" y2="210" />
    <line x1="0" y1="315" x2="1200" y2="315" />
    <line x1="0" y1="420" x2="1200" y2="420" />
    <line x1="0" y1="525" x2="1200" y2="525" />
    <line x1="200" y1="0" x2="200" y2="630" />
    <line x1="400" y1="0" x2="400" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="800" y1="0" x2="800" y2="630" />
    <line x1="1000" y1="0" x2="1000" y2="630" />
  </g>

  <!-- Barra Decorativa Superior -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accentLine)" />

  <!-- Header Superior: Logo e Marca -->
  <g transform="translate(80, 60)">
    <!-- Monograma ML Oficial -->
    <g transform="scale(0.12)">
      <path d="M 60 40 L 140 100 L 140 360 L 60 360 Z" fill="#00A39E"/>
      <path d="M 210 145 L 180 185 L 180 360 L 340 360 L 340 285 L 255 285 L 255 185 Z" fill="#FFFFFF"/>
      <path d="M 340 40 L 260 100 L 260 250 L 340 250 Z" fill="#00A39E"/>
    </g>
    <text x="56" y="32" font-family="'Sora', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" letter-spacing="1.5">MAURÍCIO LEITE</text>
    <text x="268" y="32" font-family="'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="500" font-size="16" fill="#8696a0">| cria.chat partner</text>
  </g>

  <!-- Badge Pill -->
  <g transform="translate(80, 135)">
    <rect width="360" height="38" rx="19" fill="#1A1A1A" stroke="#00A39E" stroke-opacity="0.4" stroke-width="1.5" />
    <circle cx="20" cy="19" r="5" fill="#00A39E" />
    <text x="36" y="24" font-family="'Sora', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="13" fill="#00A39E" letter-spacing="2">AUTOMAÇÃO &amp; IA PARA WHATSAPP</text>
  </g>

  <!-- Headline Principal -->
  <g transform="translate(80, 240)">
    <text font-family="'Sora', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="46" fill="#FFFFFF" letter-spacing="-0.5">
      Agente de IA p/ WhatsApp
    </text>
    <text y="58" font-family="'Sora', -apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="44" fill="#00A39E" letter-spacing="-0.5">
      Atende, agenda e vende 24h
    </text>
  </g>

  <!-- Subtítulo -->
  <g transform="translate(80, 360)">
    <text font-family="'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif" font-size="21" fill="#C6C6C6">
      Atendimento autônomo e qualificação inteligente treinada nos dados da sua empresa.
    </text>
    <text y="30" font-family="'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif" font-size="21" fill="#8696a0">
      CRM integrado, múltiplos atendentes e memória que lembra de cada cliente.
    </text>
  </g>

  <!-- Cards / Badges Inferiores de Destaque -->
  <g transform="translate(80, 460)">
    <!-- Item 1 -->
    <rect x="0" y="0" width="310" height="74" rx="14" fill="#162026" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
    <circle cx="34" cy="37" r="14" fill="#00A39E" fill-opacity="0.15" />
    <text x="34" y="42" text-anchor="middle" font-family="'Sora', sans-serif" font-weight="900" font-size="13" fill="#00A39E">✓</text>
    <text x="60" y="32" font-family="'Sora', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">Implementação sob medida</text>
    <text x="60" y="52" font-family="'Instrument Sans', sans-serif" font-size="12" fill="#8696a0">Sem templates genéricos</text>

    <!-- Item 2 -->
    <rect x="330" y="0" width="320" height="74" rx="14" fill="#162026" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
    <circle cx="364" cy="37" r="14" fill="#00A39E" fill-opacity="0.15" />
    <text x="364" y="42" text-anchor="middle" font-family="'Sora', sans-serif" font-weight="900" font-size="13" fill="#00A39E">✓</text>
    <text x="390" y="32" font-family="'Sora', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">Treinado com seus dados</text>
    <text x="390" y="52" font-family="'Instrument Sans', sans-serif" font-size="12" fill="#8696a0">Regras, preços e catálogos</text>

    <!-- Item 3 -->
    <rect x="670" y="0" width="310" height="74" rx="14" fill="#162026" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
    <circle cx="704" cy="37" r="14" fill="#00A39E" fill-opacity="0.15" />
    <text x="704" y="42" text-anchor="middle" font-family="'Sora', sans-serif" font-weight="900" font-size="13" fill="#00A39E">✓</text>
    <text x="730" y="32" font-family="'Sora', sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">Memória persistente</text>
    <text x="730" y="52" font-family="'Instrument Sans', sans-serif" font-size="12" fill="#8696a0">Lembra de cada cliente</text>
  </g>

  <!-- Assinatura inferior direita -->
  <g transform="translate(1120, 575)">
    <text text-anchor="end" font-family="'Instrument Sans', sans-serif" font-weight="600" font-size="15" fill="#8696a0">
      mauricioleite.com.br/agente-de-ia-para-whatsapp
    </text>
  </g>
</svg>
`;

const outputPath = path.resolve('public/images/servicos/og-agente-ia-whatsapp.jpg');

async function run() {
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 92 })
    .toFile(outputPath);
  console.log(`Generated OG Image at: ${outputPath}`);
}

run().catch(console.error);
