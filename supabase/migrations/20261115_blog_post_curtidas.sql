-- Curtida do post (coração na barra de comentários). Uma por pessoa logada.

create table public.blog_post_curtidas (
  post_slug text not null check (char_length(post_slug) between 1 and 200),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  criado_em timestamptz not null default now(),
  primary key (post_slug, user_id)
);
create index blog_post_curtidas_user_idx on public.blog_post_curtidas (user_id);

alter table public.blog_post_curtidas enable row level security;

revoke all on public.blog_post_curtidas from anon, authenticated;
grant select on public.blog_post_curtidas to anon, authenticated;
grant insert, delete on public.blog_post_curtidas to authenticated;

create policy "todos leem curtidas" on public.blog_post_curtidas
  for select to anon, authenticated using (true);

create policy "logado curte em seu nome" on public.blog_post_curtidas
  for insert to authenticated with check (user_id = (select auth.uid()));

create policy "logado retira a propria curtida" on public.blog_post_curtidas
  for delete to authenticated using (user_id = (select auth.uid()));
