import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/penguin.jpg',
    name: 'Vinh-Thuyen',
    status: '🐧',
    bio: 'Email: vthuyen@u(dot)nus(dot)edu, ntvthuyen@{gmail(dot)com, apcs.fitus(dot)edu.vn}'
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'ntvthuyen.github.io',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'I love penguins, cats, coding, music, and science',
  themeColor: '#3D4451',
  title: 'Vinh-Thuyen',
}
