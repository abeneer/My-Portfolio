/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientShift: "gradientShift 6s ease infinite",
      },
      boxShadow: {
        glass: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 8px 25px rgba(99,102,241,0.25)",
      },
    },
  },
  plugins: [],
};
