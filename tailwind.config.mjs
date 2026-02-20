/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#1e3a8a',
        'navy-dark': '#0f1d45',
        gold: '#c9a961',
        'gold-light': '#d4b978',
        warm: '#faf9f7',
        'warm-dark': '#f0ebe0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide-plus': '0.15em',
      },
    },
  },
  plugins: [],
};
