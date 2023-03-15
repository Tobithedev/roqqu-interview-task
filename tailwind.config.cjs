/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        "Satoshi-Black": ["Satoshi-Black"],
        "Satoshi-Bold": ["Satoshi-Bold"],
        "Satoshi-Light": ["Satoshi-Light"],
        "Satoshi-Medium": ["Satoshi-Medium"],
        "Satoshi-Regular": ["Satoshi-Regular"],
      },
    },
  },
  plugins: [],
}