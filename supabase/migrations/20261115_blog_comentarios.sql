-- Comentários do blog (mauricioleite.com.br) — projeto Supabase "VSL".
-- Só comenta quem está logado (Google ou e-mail e senha do Supabase Auth).
-- Nome, foto e selo de autor vêm do servidor: o navegador não consegue forjar.

create table public.blog_comentarios (
  id uuid primary key default gen_random_uuid(),
  post_slug text not null check (char_length(post_slug) between 1 and 200),
  autor uuid not null default auth.uid() references auth.users (id) on delete cascade,
  autor_nome text not null default '',
  autor_avatar text,
  eh_autor_do_blog boolean not null default false,
  conteudo text not null check (char_length(btrim(conteudo)) between 2 and 4000),
  parent_id uuid references public.blog_comentarios (id) on delete cascade,
  aprovado boolean not null default true,
  criado_em timestamptz not null default now(),
  editado_em timestamptz
);

create index blog_comentarios_post_idx on public.blog_comentarios (post_slug, criado_em);
create index blog_comentarios_parent_idx on public.blog_comentarios (parent_id);
create index blog_comentarios_autor_idx on public.blog_comentarios (autor, criado_em);

create table public.blog_comentario_votos (
  comentario_id uuid not null references public.blog_comentarios (id) on delete cascade,
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  criado_em timestamptz not null default now(),
  primary key (comentario_id, user_id)
);
create index blog_comentario_votos_user_idx on public.blog_comentario_votos (user_id);

-- Quem modera (apaga qualquer comentário e ganha o selo "Autor").
-- Sem policy de propósito: só as funções abaixo leem esta tabela.
create table public.blog_moderadores (
  user_id uuid primary key references auth.users (id) on delete cascade
);

alter table public.blog_comentarios enable row level security;
alter table public.blog_comentario_votos enable row level security;
alter table public.blog_moderadores enable row level security;

create function public.blog_eh_moderador()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.blog_moderadores m where m.user_id = (select auth.uid())
  );
$$;

create function public.blog_comentario_preparar()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  u record;
  recentes integer;
begin
  new.autor := auth.uid();
  if new.autor is null then
    raise exception 'login_obrigatorio';
  end if;

  select count(*) into recentes
  from public.blog_comentarios c
  where c.autor = new.autor and c.criado_em > now() - interval '1 minute';
  if recentes >= 5 then
    raise exception 'limite_de_comentarios';
  end if;

  if new.parent_id is not null and not exists (
    select 1 from public.blog_comentarios p
    where p.id = new.parent_id and p.post_slug = new.post_slug
  ) then
    raise exception 'resposta_invalida';
  end if;

  select au.email, au.raw_user_meta_data as meta into u
  from auth.users au where au.id = new.autor;

  new.autor_nome := left(coalesce(
    nullif(btrim(u.meta ->> 'full_name'), ''),
    nullif(btrim(u.meta ->> 'name'), ''),
    split_part(u.email, '@', 1),
    'Visitante'
  ), 80);
  new.autor_avatar := case
    when (u.meta ->> 'avatar_url') like 'https://%' then left(u.meta ->> 'avatar_url', 500)
    else null
  end;
  new.eh_autor_do_blog := exists (
    select 1 from public.blog_moderadores m where m.user_id = new.autor
  );
  new.conteudo := btrim(new.conteudo);
  new.aprovado := true;
  new.criado_em := now();
  new.editado_em := null;
  return new;
end;
$$;

-- Na edição só o texto muda; o resto volta ao que estava.
create function public.blog_comentario_editar()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.id := old.id;
  new.post_slug := old.post_slug;
  new.autor := old.autor;
  new.autor_nome := old.autor_nome;
  new.autor_avatar := old.autor_avatar;
  new.eh_autor_do_blog := old.eh_autor_do_blog;
  new.parent_id := old.parent_id;
  new.aprovado := old.aprovado;
  new.criado_em := old.criado_em;
  new.conteudo := btrim(new.conteudo);
  new.editado_em := now();
  return new;
end;
$$;

create trigger blog_comentarios_preparar
  before insert on public.blog_comentarios
  for each row execute function public.blog_comentario_preparar();

create trigger blog_comentarios_editar
  before update on public.blog_comentarios
  for each row execute function public.blog_comentario_editar();

revoke all on function public.blog_comentario_preparar() from public, anon, authenticated;
revoke all on function public.blog_comentario_editar() from public, anon, authenticated;
revoke all on function public.blog_eh_moderador() from public, anon;
grant execute on function public.blog_eh_moderador() to authenticated;

revoke all on public.blog_comentarios, public.blog_comentario_votos, public.blog_moderadores
  from anon, authenticated;
grant select on public.blog_comentarios, public.blog_comentario_votos to anon, authenticated;
grant insert, delete on public.blog_comentarios, public.blog_comentario_votos to authenticated;
grant update (conteudo) on public.blog_comentarios to authenticated;

create policy "todos leem comentarios aprovados" on public.blog_comentarios
  for select to anon, authenticated using (aprovado);

create policy "logado comenta em seu nome" on public.blog_comentarios
  for insert to authenticated with check (autor = (select auth.uid()));

create policy "autor edita o proprio" on public.blog_comentarios
  for update to authenticated
  using (autor = (select auth.uid()))
  with check (autor = (select auth.uid()));

create policy "autor ou moderador apaga" on public.blog_comentarios
  for delete to authenticated
  using (autor = (select auth.uid()) or (select public.blog_eh_moderador()));

create policy "todos leem votos" on public.blog_comentario_votos
  for select to anon, authenticated using (true);

create policy "logado vota em seu nome" on public.blog_comentario_votos
  for insert to authenticated with check (user_id = (select auth.uid()));

create policy "logado retira o proprio voto" on public.blog_comentario_votos
  for delete to authenticated using (user_id = (select auth.uid()));
