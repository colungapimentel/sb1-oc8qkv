/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#253729',
        'secondary': '#426D33',
        'accent': '#98AD8D',
        'light': '#E5E2D9',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'ablatin': ['Ablatin Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}