/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a1a1a',
        'surface': '#2a2a2a',
        'primary': '#8c6d46',
        'secondary': '#a68a64',
        'success': '#6a994e',
        'text-main': '#f2e8cf',
        'text-secondary': '#a68a64',
      }
    },
  },
  plugins: [],
}