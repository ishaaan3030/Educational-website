module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFC947',
          DEFAULT: '#FFC947',
          dark: '#F0B429',
          darker: '#F0B429',
        },
      },
    },
    darkMode: 'media', // or 'class'
  },
}
