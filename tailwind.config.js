module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { 500: '#0070f3' },
      },
    },
  },
  plugins: [
    // https://twin-docs.netlify.app/plugin-support
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-no-scrollbar'),
  ],
}
