import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ds: {
          dark:    '#050B18',
          card:    '#0D1526',
          subtle:  '#111D35',
          cyan:    '#00D4FF',
          blue:    '#3B7BFF',
          primary: '#F0F6FF',
          muted:   '#7A8FA6',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ds-hero':   'linear-gradient(135deg, #050B18 0%, #0D1A3A 50%, #0A1628 100%)',
        'ds-accent': 'linear-gradient(90deg, #00D4FF, #3B7BFF)',
      },
    },
  },
  plugins: [],
}
export default config
