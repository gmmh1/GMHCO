// Minimal markdown-to-HTML renderer for blog post bodies. Handles the subset
// of markdown actually used in posts: ##/### headings, **bold**, - bullet
// lists, and paragraph breaks. Not a general-purpose markdown parser.
export function renderBlogMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^## (.+)$/gm, `<h2 style="font-family:Orbitron,sans-serif;color:#e2e8f0;font-size:1.1rem;margin-top:2rem;margin-bottom:0.75rem;">$1</h2>`)
    .replace(/^### (.+)$/gm, `<h3 style="color:#84ff00;font-size:0.95rem;margin-top:1.5rem;margin-bottom:0.5rem;">$1</h3>`)
    .replace(/\*\*(.+?)\*\*/g, `<strong style="color:#e2e8f0;">$1</strong>`)
    .replace(/^- (.+)$/gm, `<li style="margin-left:1rem;list-style:disc;">$1</li>`)
    .replace(/\n\n/g, `</p><p style="color:#cbd5e1;line-height:1.8;margin-top:1rem;">`)
    .replace(/^(?!<)(.+)$/gm, `<p style="color:#cbd5e1;line-height:1.8;">$1</p>`)
    .replace(/<\/p><p[^>]*><\/p>/g, "")
    .replace(/(<li[^>]*>.+?<\/li>)/gs, `<ul style="margin:1rem 0;padding-left:1.5rem;">$1</ul>`);
}
