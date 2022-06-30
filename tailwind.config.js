/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    backgroundImage: {
      'kopimaca' : "url(../public/images/kopimaca.jpg)",
    },
    extend: {},
  },
  plugins: [],
}
