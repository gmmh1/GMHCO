import { supabase } from "@/lib/supabase";
import { EDITORIAL_POSTS } from "@/lib/editorial-posts";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  keywords: string[];
  related_service_slugs: string[];
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};

function mergeEditorialPosts(posts: BlogPost[]): BlogPost[] {
  const bySlug = new Map(posts.map((post) => [post.slug, post]));
  for (const post of EDITORIAL_POSTS) {
    bySlug.set(post.slug, post);
  }
  return [...bySlug.values()].sort(
    (a, b) => Date.parse(b.published_at) - Date.parse(a.published_at)
  );
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) {
    console.error("[blog] Failed to fetch posts:", error);
    return EDITORIAL_POSTS;
  }
  return mergeEditorialPosts(data as BlogPost[]);
}

export async function getPublishedPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from("blog_posts").select("slug").eq("published", true);
  if (error) {
    console.error("[blog] Failed to fetch post slugs:", error);
    return EDITORIAL_POSTS.map((post) => post.slug);
  }
  return [
    ...new Set([
      ...(data as { slug: string }[]).map((post) => post.slug),
      ...EDITORIAL_POSTS.map((post) => post.slug),
    ]),
  ];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const editorialPost = EDITORIAL_POSTS.find((post) => post.slug === slug);
  if (editorialPost) return editorialPost;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) {
    console.error("[blog] Failed to fetch post:", error);
    return null;
  }
  return data as BlogPost | null;
}

export async function getPostsForService(serviceSlug: string, limit = 3): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .contains("related_service_slugs", [serviceSlug])
    .order("published_at", { ascending: false })
    .limit(limit);
  if (error) {
    console.error("[blog] Failed to fetch related posts:", error);
    return EDITORIAL_POSTS.filter((post) =>
      post.related_service_slugs.includes(serviceSlug)
    ).slice(0, limit);
  }
  return mergeEditorialPosts(data as BlogPost[])
    .filter((post) => post.related_service_slugs.includes(serviceSlug))
    .slice(0, limit);
}
