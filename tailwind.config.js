module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'normal': ['Noto'],
        'title': ['NotoKufi']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
