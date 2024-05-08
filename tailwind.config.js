/** @type {import('tailwindcss').Config} */
// import    {back}  from     src/assets/back.jpg
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#CED7DC',
        'customBg': 'rgb(4, 114, 107)',
        customColor: '#f4ebe4'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-background': "url('/src/assets/back.jpg')",
        'basde-texture': "url('src/assets/images.jpeg')",
        'form-texture': "url('src/assets/plantes/grimpante.avif')",
        'deuil-texture': "url('/src/assets/back.jpg')",

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