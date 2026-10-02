import { createClient } from "@supabase/supabase-js";

export interface Comment {
  id: string;
  post_slug: string;
  author_name: string;
  author_email: string;
  author_avatar?: string;
  content: string;
  parent_id?: string | null;
  is_approved: boolean;
  likes_count: number;
  is_author: boolean;
  created_at: string;
  replies?: Comment[];
}

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Organiza comentários planos em árvore hierárquica (threads/respostas aninhadas)
 */
export function buildCommentTree(comments: Comment[]): Comment[] {
  const map = new Map<string, Comment>();
  const roots: Comment[] = [];

  comments.forEach((c) => {
    map.set(c.id, { ...c, replies: [] });
  });

  comments.forEach((c) => {
    const node = map.get(c.id);
    if (node) {
      if (c.parent_id && map.has(c.parent_id)) {
        map.get(c.parent_id)!.replies!.push(node);
      } else {
        roots.push(node);
      }
    }
  });

  return roots;
}
