import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        drawerShow: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        drawerHide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        overlayHide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        drawerShow: 'drawerShow 250ms ease',
        drawerHide: 'drawerHide 250ms ease',
        overlayShow: 'overlayShow 250ms ease',
        overlayHide: 'overlayHide 250ms ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
