# AGENTS.md

This project is an Astro and Tailwind CSS theme. Follow the existing component, content, schema, and styling patterns before adding new code.

## Project Structure

- Section components live in `src/layouts/components/sections/`.
- Shared widgets live in `src/layouts/components/widgets/`.
- Cards live in `src/layouts/components/cards/`.
- Content lives in `src/content/` and is grouped by collection and language.
- Section content files live in `src/content/sections/{language}/`.
- Section schemas and shared content option schemas live in `src/sections.schema.ts`.
- Global styles live in `src/styles/`; check `base.css`, `components.css`, `safe.css`, and `theme.css` before adding classes or values.

## Section Conventions

- For every new section, create two files: one `.astro` component and one `.md` or `.mdx` content file.
- Example: `TestimonialSection.astro` with `testimonial-section.md`.
- For page-specific section names, append `Section` to the component and `-section` to the content file.
- Do not create a section file with the same name as a page file.
- Keep section defaults in the section content file. Put page-specific overrides in the page frontmatter using a named block such as `teamSection`, `ctaSection`, or `contactSection`.
- If a section can appear on multiple pages, make the most common layout the default and expose only needed overrides through content options.

## Content And Schema

- Keep editable copy, labels, links, images, buttons, cards, and section options in content files when they are not purely structural.
- Update `src/sections.schema.ts` when adding new content fields.
- Existing schema-supported fields should be reused instead of inventing parallel names.
- Include available nested options in section `.md` files so users and AI tools can discover supported configuration.
- Button options should follow the `sharedButton` schema.
- Marquee options should follow the `sharedMarquee` schema.

Example button block:

```yaml
button:
  # Refer to sharedButton in src/sections.schema.ts for all options.
  enable: true
  label: "Start a Project"
  url: "/contact/"
  hoverEffect: "magnetic-text-flip"
  variant: "fill"
  rel: ""
  target: ""
  class: ""
  icon:
    enable: true
    name: "ArrowUpRight"
    position: "right"
```

Example marquee block:

```yaml
marquee:
  elementWidthAuto: true
  pauseOnHover: false
  reverse: ""
  duration: "80s"
```

## Styling Rules

- Use mobile-first Tailwind CSS.
- Use the nearest existing Tailwind size and theme token.
- Check `src/styles/theme.css` before adding colors, spacing, radii, or typography values.
- Avoid Tailwind arbitrary values.
- Do not add classes to headings that are already handled by `base.css`, including default font weight, tracking, wrapping, or leading classes.
- Keep heading element classes focused on semantic size variants such as `text-h2`, `text-h3`, or layout spacing only when needed.
- Reuse existing utility classes and component classes from `base.css`, `components.css`, and `safe.css`.
- Do not add default CSS values that already exist in base styles.
- Avoid unused wrappers, duplicated cards, and nested card layouts.

## Component Rules

- Reuse existing components before creating new ones.
- Use `Button.astro` for theme buttons.
- Use `DynamicIcon.astro` or `Icons.astro` for icons.
- Use `OptimizedImage.astro` for local images.
- Use existing card components where a layout already matches.
- Keep imports clean and remove unused code.
- Prefer static rendering. Add client JavaScript only for real interaction.
- Initialize shared browser behavior through existing global/widget scripts instead of duplicating inline logic.

## Forms And Preline

- Use the theme contact/form components for inputs, selects, radios, checkboxes, and date fields.
- Use Preline components only through existing project patterns.
- Keep Preline initialization centralized where possible.
- Do not replace theme form classes with raw browser defaults.

## Copy And Theme Shipping

- Write generic product-theme copy that customers can use without replacing a specific brand name.
- Avoid hardcoding the theme name inside section copy unless the file is theme metadata.
- Keep content editable through `.md` or `.mdx` files.
- Do not leave placeholders like "Lorem ipsum" unless an existing file already uses placeholder content intentionally.

## Verification

- Run `npm run astro-check` after code or schema changes.
- Run `npm run build` for broad theme changes, content collection changes, or anything that affects routing/assets.
- Do not commit generated output such as `dist/`.

<!-- specsfy:framework:start -->
## Framework Specsfy

Leia e siga integralmente `.specsfy/Spec.md` antes de trabalhar com
backlogs, refinamentos do backlog, especificações, tarefas, testes ou implementação. Esse
arquivo contém o fluxo, os caminhos canônicos e os gates do framework.

- Preserve as instruções próprias deste projeto.
- O diretório do projeto é o caminho informado durante `$specsfy-setup`. Use-o
  em toda leitura e escrita posterior. Se ele estiver dentro de um Hub, não
  promova o trabalho para a raiz Git nem crie contexto, specs ou código fora
  desse caminho.
- Leia `PROJECT.md`, `DESIGNSYSTEM.MD`, `.specsfy/STACK.md`,
  `.specsfy/RULES.md`, `.specsfy/DATABASE.md`, `.specsfy/PACKAGES.md` e
  `.specsfy/USER-PROFILE.md` como contexto persistente antes de planejar
  mudanças.
- Antes de perguntar, consulte `.specsfy/USER-PROFILE.md`, a conversa atual e
  as fontes do projeto. Não repita uma pergunta cuja resposta já esteja
  confirmada; registre respostas novas no perfil com a fonte e o alcance.
- Quando `.specsfy/SPECKIT.md` existir, leia
  `.specify/memory/constitution.md` e cada fonte do GitHub Spec Kit listada na
  projeção. Preserve `.specify/` e os artefatos já existentes em `specs/`; o
  Specsfy não os migra nem os substitui.
- Antes de iniciar qualquer skill do framework, execute obrigatoriamente
  `$specsfy-setup` para verificar e reconciliar o contexto e os blocos
  reservados. A própria `$specsfy-setup` não se chama recursivamente. Em uma
  transição automática, execute-a de novo com a mesma raiz já confirmada antes
  de carregar a skill de destino. Execute `$specsfy-documentator` quando
  `PACKAGES.md` estiver ausente ou desatualizado.
- Execute o monitor de contexto no início, após cada tarefa e antes de concluir
  a entrega; resolva todo resultado `PENDING`.
- Use as skills `specsfy-aux-*` para manter stack, regras e banco sem apagar
  conteúdo humano.
- Toda tarefa que cria ou altera a estrutura do banco inclui uma tarefa
  `[MIGRATION]` com arquivo
  versionado. A implementação aplica a migration no banco de teste e consulta
  seu estado antes de concluir a tarefa ou o Delivery Gate.
- Execute `$specsfy-documentator` depois de cada implementação para reconstruir
  a documentação técnica completa em `docs/` e o registro de dependências em
  `.specsfy/PACKAGES.md`.
- Use `specs/inbox/` para capturas imediatas ainda não refinadas.
- Use `specs/backlog/` para itens refináveis ainda não promovidos.
- Use `specs/<estado>/<NNNN>-<slug>/spec.md` como fonte normativa de cada
  fatia, em uma única pasta de estado.
- Não crie `plan.md`, `tasks.md`, `research.md` ou outra fonte normativa
  paralela.
<!-- specsfy:framework:end -->
