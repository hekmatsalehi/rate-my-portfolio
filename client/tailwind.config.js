module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monster': ["'Montserrat'", 'sans-serif'],
        'sora': ["'Sora'", 'sans-serif'],
      }
    },
    
  },
  plugins: [require('@tailwindcss/forms')],
}

