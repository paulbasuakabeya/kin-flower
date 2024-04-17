/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#CED7DC',
        'customBg': 'rgb(4, 114, 107)'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'custom-gray': '#CED7DC',
//       },
//     },
//   },
// };