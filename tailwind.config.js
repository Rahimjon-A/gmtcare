/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-title': {
          '@apply text-[28px] md:text-[34px] lg:text-[48px]': {},
        },
        '.custom-text': {
          '@apply text-[12px] md:text-[14px] lg:text-[16px]': {},
        },
        '.custom-space': {
          '@apply pt-[10px] md:pt-[20px] lg:pt-[25px]': {},
        },
        '.custom-margin': {
          '@apply mb-[60px] md:mb-[120px] lg:mb-[150px]': {},
        },
      })
    },
  ],
}


