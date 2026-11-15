/**
 * Comentários do blog — código usado nos dois lados:
 * - no build (Astro), para já entregar os comentários no HTML e no JSON-LD;
 * - no navegador, para redesenhar a lista depois de login, voto ou envio.
 * Um molde só, para o que o Google lê ser igual ao que o leitor vê.
 */

export const SUPABASE_URL = "https://rhfufrjbzjkmiwgoauks.supabase.co";
// Chave publicável: feita para ficar no navegador. Quem protege os dados é o RLS.
export const SUPABASE_KEY = "sb_publishable__vk_mYjY2ZBtVj6MTDHPtQ_KBDntsMg";

export const FIELDS =
  "id,post_slug,autor,autor_nome,autor_avatar,eh_autor_do_blog,conteudo,parent_id,criado_em,editado_em,blog_comentario_votos(user_id)";

export interface CommentRow {
  id: string;
  post_slug: string;
  autor: string;
  autor_nome: string;
  autor_avatar: string | null;
  eh_autor_do_blog: boolean;
  conteudo: string;
  parent_id: string | null;
  criado_em: string;
  editado_em: string | null;
  blog_comentario_votos: { user_id: string }[];
}

export type SortMode = "best" | "newest" | "oldest";

export function strings(en: boolean) {
  return en
    ? {
        empty: "No comments yet. Be the first to start the conversation!",
        loadError: "Could not load the comments. Please try again in a moment.",
        loginFirst: "Sign in to take part.",
        sendError: "Could not send. Please try again.",
        rate: "Too many comments in a row. Wait a minute and try again.",
        badLogin: "Wrong email or password, or the email is not confirmed yet.",
        confirm: "We sent a confirmation link to your email. Open it to finish creating your account.",
        authError: "Sign-in failed. Please try again.",
        weakPass: "Use a password with at least 8 characters.",
        needName: "Tell us your name.",
        signIn: "Sign in",
        signUp: "Create account",
        toSignUp: "I don't have an account",
        toSignIn: "I already have an account",
        reply: "Reply",
        share: "Share",
        copied: "Link copied.",
        edit: "Edit",
        del: "Delete",
        cancel: "Cancel",
        save: "Save",
        replyPh: "Write a reply…",
        delConfirm: "Delete this comment and its replies?",
        author: "Author",
        edited: "edited",
        like: "Like this comment",
        inReplyTo: "in reply to",
      }
    : {
        empty: "Nenhum comentário ainda. Deixe sua pergunta ou opinião acima!",
        loadError: "Não foi possível carregar os comentários. Tente de novo em instantes.",
        loginFirst: "Entre para participar.",
        sendError: "Não foi possível enviar. Tente de novo.",
        rate: "Muitos comentários seguidos. Espere um minuto e tente de novo.",
        badLogin: "E-mail ou senha incorretos, ou o e-mail ainda não foi confirmado.",
        confirm: "Enviamos um link de confirmação para o seu e-mail. Abra o link para concluir o cadastro.",
        authError: "Não foi possível entrar. Tente de novo.",
        weakPass: "Use uma senha com pelo menos 8 caracteres.",
        needName: "Informe seu nome.",
        signIn: "Entrar",
        signUp: "Criar conta",
        toSignUp: "Ainda não tenho conta",
        toSignIn: "Já tenho conta",
        reply: "Responder",
        share: "Compartilhar",
        copied: "Link copiado.",
        edit: "Editar",
        del: "Apagar",
        cancel: "Cancelar",
        save: "Salvar",
        replyPh: "Escreva uma resposta…",
        delConfirm: "Apagar este comentário e as respostas dele?",
        author: "Autor",
        edited: "editado",
        like: "Curtir este comentário",
        inReplyTo: "em resposta a",
      };
}

export function esc(str: unknown) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function fullDate(iso: string, en: boolean) {
  return new Date(iso).toLocaleDateString(en ? "en-US" : "pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });
}

/** "há 12 dias" / "12 days ago". No build usa-se a data por extenso, que não envelhece. */
export function relativeDate(iso: string, en: boolean) {
  const s = Math.max(0, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  const fmt = (n: number, pt: [string, string], eng: [string, string]) => {
    const unit = (en ? eng : pt)[n === 1 ? 0 : 1];
    return en ? `${n} ${unit} ago` : `há ${n} ${unit}`;
  };
  if (s < 60) return en ? "just now" : "agora mesmo";
  if (s < 3600) return fmt(Math.floor(s / 60), ["minuto", "minutos"], ["minute", "minutes"]);
  if (s < 86400) return fmt(Math.floor(s / 3600), ["hora", "horas"], ["hour", "hours"]);
  if (s < 86400 * 30) return fmt(Math.floor(s / 86400), ["dia", "dias"], ["day", "days"]);
  if (s < 86400 * 365) return fmt(Math.floor(s / (86400 * 30)), ["mês", "meses"], ["month", "months"]);
  return fmt(Math.floor(s / (86400 * 365)), ["ano", "anos"], ["year", "years"]);
}

export const likes = (c: CommentRow) => (c.blog_comentario_votos || []).length;

export function buildTree(rows: CommentRow[], sort: SortMode) {
  const kids = new Map<string, CommentRow[]>();
  const byId = new Map(rows.map((c) => [c.id, c]));
  const tops: CommentRow[] = [];
  const time = (c: CommentRow) => new Date(c.criado_em).getTime();

  [...rows]
    .sort((a, b) => time(a) - time(b))
    .forEach((c) => {
      if (c.parent_id && byId.has(c.parent_id)) {
        if (!kids.has(c.parent_id)) kids.set(c.parent_id, []);
        kids.get(c.parent_id)!.push(c);
      } else {
        tops.push(c);
      }
    });

  if (sort === "newest") tops.sort((a, b) => time(b) - time(a));
  else if (sort === "best") tops.sort((a, b) => likes(b) - likes(a) || time(b) - time(a));

  return { tops, kids, byId };
}

const ICON_LIKE =
  '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Zm0 0 4-8a2 2 0 0 1 2 2v4h5.4a2 2 0 0 1 2 2.4l-1.2 6A2 2 0 0 1 17.2 20H7"/></svg>';
const ICON_REPLY_TO =
  '<svg class="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l5 5-5 5M4 4v7a4 4 0 0 0 4 4h12"/></svg>';

function avatar(c: CommentRow) {
  if (c.autor_avatar && /^https:\/\//.test(c.autor_avatar)) {
    return `<img src="${esc(c.autor_avatar)}" alt="" width="40" height="40" loading="lazy" referrerpolicy="no-referrer" class="w-10 h-10 rounded-xl object-cover shrink-0 border border-white/15" />`;
  }
  return `<div class="lt-dark w-10 h-10 rounded-xl ${c.eh_autor_do_blog ? "bg-[#80142B]" : "bg-[#00A39E]"} flex items-center justify-center font-heading text-base font-bold ${c.eh_autor_do_blog ? "text-white" : "text-[#111111]"} shrink-0" aria-hidden="true">${esc((c.autor_nome || "?").charAt(0).toUpperCase())}</div>`;
}

export interface RenderOptions {
  en: boolean;
  sort: SortMode;
  /** id de quem está logado; null no build */
  userId: string | null;
  isMod: boolean;
  /** true no navegador ("há 2 dias"); false no build (data por extenso) */
  relative: boolean;
}

export function renderComments(rows: CommentRow[], o: RenderOptions): string {
  const T = strings(o.en);
  if (rows.length === 0) {
    return `<div class="py-8 text-center text-xs text-neutral-500 border border-dashed border-white/5 rounded-2xl">${T.empty}</div>`;
  }

  const { tops, kids, byId } = buildTree(rows, o.sort);
  const muted = "reply-toggle-btn text-[#888888] hover:text-[#00A39E] transition-colors cursor-pointer";

  const draw = (c: CommentRow, depth: number): string => {
    const mine = !!o.userId && c.autor === o.userId;
    const liked = !!o.userId && (c.blog_comentario_votos || []).some((v) => v.user_id === o.userId);
    const parent = c.parent_id ? byId.get(c.parent_id) : null;
    const wrap =
      depth === 0
        ? "py-6 border-b border-white/10"
        : `mt-6 ${depth < 4 ? "ml-5 sm:ml-12" : ""}`;

    return `
    <article id="comentario-${c.id}" class="ml-comment ${wrap} scroll-mt-24">
      <div class="flex gap-3">
        ${avatar(c)}
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span class="comment-author-name font-heading font-semibold text-white text-sm">${esc(c.autor_nome)}</span>
            ${c.eh_autor_do_blog ? `<span class="lt-dark text-[9px] bg-[#80142B] text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">${T.author}</span>` : ""}
            ${parent ? `<span class="comment-time-ago inline-flex items-center gap-1 text-xs text-[#777777]" title="${T.inReplyTo} ${esc(parent.autor_nome)}">${ICON_REPLY_TO}<span>${esc(parent.autor_nome)}</span></span>` : ""}
          </div>
          <time class="comment-time-ago block text-xs text-[#777777]" datetime="${esc(c.criado_em)}" title="${esc(fullDate(c.criado_em, o.en))}">${o.relative ? relativeDate(c.criado_em, o.en) : fullDate(c.criado_em, o.en)}${c.editado_em ? ` · ${T.edited}` : ""}</time>

          <p class="comment-content-text mt-2 text-[15px] text-[#D1D1D1] leading-relaxed whitespace-pre-line break-words" data-text="${c.id}">${esc(c.conteudo)}</p>

          ${mine ? `<div class="hidden mt-2" data-editbox="${c.id}">
            <textarea rows="3" maxlength="4000" class="w-full bg-[#111111] border border-[#00A39E]/60 rounded-xl p-3 text-sm text-white focus:border-[#00A39E] outline-none resize-y">${esc(c.conteudo)}</textarea>
            <div class="flex justify-end gap-2 mt-2">
              <button type="button" data-act="edit" data-id="${c.id}" class="px-3 py-1.5 rounded-lg text-xs ${muted}">${T.cancel}</button>
              <button type="button" data-act="save" data-id="${c.id}" class="px-4 py-1.5 rounded-lg bg-[#00A39E] text-black font-heading font-semibold text-xs hover:bg-[#00c4be] transition-colors cursor-pointer">${T.save}</button>
            </div>
          </div>` : ""}

          <div class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-heading font-medium">
            <button type="button" data-act="vote" data-id="${c.id}" aria-label="${T.like}" aria-pressed="${liked}" class="inline-flex items-center gap-1.5 ${liked ? "text-[#00A39E] cursor-pointer" : muted}">
              ${ICON_LIKE}<span>${likes(c)}</span>
            </button>
            <button type="button" data-act="reply" data-id="${c.id}" class="${muted}">${T.reply}</button>
            <button type="button" data-act="share" data-id="${c.id}" class="${muted}">${T.share}</button>
            ${mine ? `<button type="button" data-act="edit" data-id="${c.id}" class="${muted}">${T.edit}</button>` : ""}
            ${mine || o.isMod ? `<button type="button" data-act="delete" data-id="${c.id}" class="delete-comment-btn text-[#888888] hover:text-[#EF4444] transition-colors cursor-pointer">${T.del}</button>` : ""}
          </div>

          ${o.relative ? `<div id="reply-form-${c.id}" class="hidden mt-4">
            <form data-reply="${c.id}" class="space-y-2.5">
              <textarea required rows="2" maxlength="4000" placeholder="${T.replyPh}" class="w-full bg-[#111111] border border-white/10 rounded-xl p-2.5 text-sm text-white placeholder-[#666666] focus:border-[#00A39E] outline-none"></textarea>
              <div class="flex justify-end gap-2">
                <button type="button" data-act="reply" data-id="${c.id}" class="px-3 py-1 rounded-lg text-xs ${muted}">${T.cancel}</button>
                <button type="submit" class="px-4 py-1.5 rounded-lg bg-[#00A39E] text-black font-heading font-semibold text-xs hover:bg-[#00c4be] cursor-pointer">${T.reply}</button>
              </div>
            </form>
          </div>` : ""}
        </div>
      </div>
      ${(kids.get(c.id) || []).map((k) => draw(k, depth + 1)).join("")}
    </article>`;
  };

  return tops.map((c) => draw(c, 0)).join("");
}

/** schema.org/Comment aninhado, para o JSON-LD do artigo. */
export function commentsJsonLd(rows: CommentRow[], pageUrl: string) {
  const { tops, kids } = buildTree(rows, "oldest");
  const node = (c: CommentRow): Record<string, unknown> => {
    const children = kids.get(c.id) || [];
    return {
      "@type": "Comment",
      "@id": `${pageUrl}#comentario-${c.id}`,
      url: `${pageUrl}#comentario-${c.id}`,
      text: c.conteudo,
      dateCreated: c.criado_em,
      ...(c.editado_em ? { dateModified: c.editado_em } : {}),
      author: { "@type": "Person", name: c.autor_nome },
      upvoteCount: likes(c),
      ...(children.length ? { comment: children.map(node) } : {}),
    };
  };
  return tops.map(node);
}

/* ---------- Só no build ---------- */

let buildData: Promise<{ comments: Map<string, CommentRow[]>; postLikes: Map<string, number> }> | null = null;

/** Uma busca só para o build inteiro. Se o Supabase falhar, o site sai sem comentários no HTML. */
export function loadForBuild() {
  if (!buildData) {
    buildData = (async () => {
      const comments = new Map<string, CommentRow[]>();
      const postLikes = new Map<string, number>();
      const get = async (path: string) => {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
          headers: { apikey: SUPABASE_KEY },
        });
        if (!res.ok) throw new Error(`${res.status}`);
        return res.json();
      };
      try {
        const [rows, curtidas] = await Promise.all([
          get(`blog_comentarios?select=${FIELDS}&order=criado_em.asc`),
          get("blog_post_curtidas?select=post_slug"),
        ]);
        (rows as CommentRow[]).forEach((c) => {
          if (!comments.has(c.post_slug)) comments.set(c.post_slug, []);
          comments.get(c.post_slug)!.push(c);
        });
        (curtidas as { post_slug: string }[]).forEach((l) => {
          postLikes.set(l.post_slug, (postLikes.get(l.post_slug) || 0) + 1);
        });
      } catch (e) {
        console.warn("[comentarios] não foi possível buscar os comentários no build:", e);
      }
      return { comments, postLikes };
    })();
  }
  return buildData;
}
