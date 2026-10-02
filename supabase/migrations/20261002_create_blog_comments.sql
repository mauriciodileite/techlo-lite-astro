-- Migration: 20261002_create_blog_comments.sql
-- Sistema Próprio de Comentários no Blog (Disqus-like) integrado ao Supabase
-- Autor: Maurício Leite Ecossistema

CREATE TABLE IF NOT EXISTS public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  author_avatar TEXT DEFAULT '',
  content TEXT NOT NULL,
  parent_id UUID REFERENCES public.comments(id) ON DELETE CASCADE,
  is_approved BOOLEAN DEFAULT TRUE,
  likes_count INTEGER DEFAULT 0,
  is_author BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices de alta performance para busca e ordenação por post
CREATE INDEX IF NOT EXISTS idx_comments_post_slug ON public.comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_comments_parent_id ON public.comments(parent_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON public.comments(created_at DESC);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Política 1: Leitura pública para comentários aprovados
DROP POLICY IF EXISTS "Public read approved comments" ON public.comments;
CREATE POLICY "Public read approved comments"
  ON public.comments
  FOR SELECT
  USING (is_approved = TRUE);

-- Política 2: Inserção pública com campos preenchidos
DROP POLICY IF EXISTS "Public insert comment" ON public.comments;
CREATE POLICY "Public insert comment"
  ON public.comments
  FOR INSERT
  WITH CHECK (
    char_length(author_name) >= 2 AND
    char_length(author_email) >= 5 AND
    char_length(content) >= 2
  );
