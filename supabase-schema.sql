-- GMHCO Supabase Database Schema
-- Run this in Supabase SQL Editor (supabase.com → your project → SQL Editor)

-- ─── Leads from contact form ──────────────────────────────────────────────
create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  company     text,
  service     text,
  budget      text,
  message     text not null,
  source      text default 'contact_form',
  created_at  timestamptz default now()
);

-- Index for email lookups
create index if not exists leads_email_idx on leads(email);
create index if not exists leads_created_idx on leads(created_at desc);

-- ─── Chat leads from AI chatbot ───────────────────────────────────────────
create table if not exists chat_leads (
  id                    uuid primary key default gen_random_uuid(),
  email                 text not null,
  conversation_summary  text,
  created_at            timestamptz default now()
);

create index if not exists chat_leads_email_idx on chat_leads(email);

-- ─── Blog posts (optional CMS) ────────────────────────────────────────────
create table if not exists blog_posts (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  slug         text unique not null,
  content      text not null,
  excerpt      text,
  published    boolean default false,
  published_at timestamptz,
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

-- ─── Row Level Security ───────────────────────────────────────────────────
-- Disable public read on sensitive tables (admin only via service role key)
alter table leads enable row level security;
alter table chat_leads enable row level security;

-- Only the service role (used server-side) can read/write
create policy "Service role only" on leads
  for all using (auth.role() = 'service_role');

create policy "Service role only" on chat_leads
  for all using (auth.role() = 'service_role');

-- Blog posts can be publicly readable when published
alter table blog_posts enable row level security;

create policy "Public read published posts" on blog_posts
  for select using (published = true);

create policy "Service role full access" on blog_posts
  for all using (auth.role() = 'service_role');
