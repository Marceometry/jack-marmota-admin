import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        overlayHide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        drawerShow: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        drawerHide: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        dialogShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        dialogHide: {
          from: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          to: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 250ms ease',
        overlayHide: 'overlayHide 250ms ease',
        drawerShow: 'drawerShow 250ms ease',
        drawerHide: 'drawerHide 250ms ease',
        dialogShow: 'dialogShow 150ms ease',
        dialogHide: 'dialogHide 150ms ease',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
