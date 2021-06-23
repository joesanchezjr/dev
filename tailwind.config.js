module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        slideup: {
          "0%": { transform: "translateY(35%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideleft: {
          "0%": { transform: "translateX(5%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideright: {
          "0%": { transform: "translateX(-5%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        strokein: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        slideup: "slideup 500ms ease-in-out forwards 1",
        slideleft: "slideleft 500ms ease-in-out forwards 1",
        slideright: "slideright 500ms ease-in-out forwards 1",
        strokein: "strokein 1500ms ease-out 1s forwards 1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
