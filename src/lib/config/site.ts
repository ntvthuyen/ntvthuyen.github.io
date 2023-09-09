import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'ntvthuyen.github.io',
  title: 'Vinh-Thuyen',
  subtitle: 'A penguin loves coding, music, and science',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/penguin.jpg',
    name: 'Vinh-Thuyen',
    status: '🐧',
    bio: 'A penguin \n email: ntvthuyen@{gmail(dot)com, apcs.fitus(dot)edu.vn}'
  },
  themeColor: '#008080'
}
