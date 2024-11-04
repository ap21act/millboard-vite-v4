/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#414042',
        'green': '#799512',
        'green-dark': '#AAC93C',
        'green-progress': '#789512',
        'black-background': '#575756',
        'white-background': '#DEDCD2',
        'white': '#FCFBF7',
        'white-nav': '#F9F7F1',
        'red': '#951313',
        'grey': "#E6E6E6",
      },
      fontFamily: {
        'F37': ['F37 Ginger', 'sans-serif'],
        'F37-light': ['F37 Ginger Light', 'sans-serif'],
      },
      spacing: {
        'clamp-186-20vw-404': 'clamp(186px, 20vw, 404px)',
        'clamp-200-30vw-612': 'clamp(200px, 30vw, 612px)',
        'clamp-375-40vw-816': 'clamp(375px, 40vw, 816px)',
        'clamp-150-20vw-405': 'clamp(150px, 20vw, 405px)',
      },
      height: {
        'clamp-186-20vw-404': 'clamp(186px, 20vw, 404px)',
        'clamp-200-30vw-612': 'clamp(200px, 30vw, 612px)',
        'clamp-375-40vw-816': 'clamp(375px, 40vw, 816px)',
        'clamp-150-20vw-405': 'clamp(150px, 20vw, 405px)',
      },
    },
  },
  plugins: [],
}
