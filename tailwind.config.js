/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          foreground: '#ffffff',
        },
        muted: '#6c757d',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
