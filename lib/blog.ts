import { supabase } from "@/lib/supabase";

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

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) {
    console.error("[blog] Failed to fetch posts:", error);
    return [];
  }
  return data as BlogPost[];
}

export async function getPublishedPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase.from("blog_posts").select("slug").eq("published", true);
  if (error) {
    console.error("[blog] Failed to fetch post slugs:", error);
    return [];
  }
  return (data as { slug: string }[]).map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
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
    return [];
  }
  return data as BlogPost[];
}
