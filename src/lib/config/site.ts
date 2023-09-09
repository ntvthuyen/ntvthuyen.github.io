import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'ntvthuyen.com',
  title: 'Vinh-Thuyen',
  subtitle: 'A penguin loves coding, music, and science',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Vinh-Thuyen',
    status: '🐧',
    bio: 'A penguin \n email: ntvthuyen@gmail(dot)com'
  },
  themeColor: '#008080'
}
