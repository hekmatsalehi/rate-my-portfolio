module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monster': ["'Montserrat'", 'sans-serif'],
      }
    },
    
  },
  plugins: [require('@tailwindcss/forms')],
}

