/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body-color':'#232529',
        'form':'#eae7dc',
        'form-text':'#e85a4f'
      }
    },
  },
  plugins: [],
}

