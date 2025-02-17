/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1)' }, // 1.1 se bada hoga, adjust kar sakte hain
        },
      },
      animation: {
        'scale-pulse': 'scale-pulse 0.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
