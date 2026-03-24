import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DigiSurf Australia',
    short_name: 'DigiSurf',
    description: 'AI automation for Australian businesses',
    start_url: '/',
    display: 'standalone',
    background_color: '#050B18',
    theme_color: '#050B18',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
