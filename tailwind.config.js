/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(100px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-in-out": {
        "0%": {
          opacity: "1",
          transform: "translateY(0)",
        },
        "100%": {
          opacity: "0",
          transform: "translateY(-100px)",
        },
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 0.5s ease-out",
      "fade-in-out": "fade-in-out 0.5s forwards",
    },
  },
  plugins: [],
};
