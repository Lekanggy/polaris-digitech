// ── Helper to ensure link is ALWAYS exactly /projects/slug ────────────────
export function getLinkPath(href: string): string {
  if (!href || href === '#') return '/projects';
  
  // 1. Remove all leading and trailing slashes
  let cleanPath = href.replace(/^\/+|\/+$/g, '');
  
  // 2. If it starts with 'projects/', remove that part so we don't duplicate it
  if (cleanPath.startsWith('projects/')) {
    cleanPath = cleanPath.substring(9);
  } else if (cleanPath === 'projects') {
    return '/projects';
  }
  
  // 3. Reconstruct it strictly as /projects/whatever-the-slug-is
  return `/projects/${cleanPath}`;
}