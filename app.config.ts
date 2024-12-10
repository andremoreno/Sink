export default defineAppConfig({
  title: 'D R E',
  email: 'sink.cool@miantiao.me',
  twitter: 'https://dre.web.id/x',
  github: 'https://dre.web.id/gh',
  blog: 'https://dre.web.id/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})