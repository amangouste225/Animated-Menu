/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var( --font-secondary)",
      },
      colors: {
        red: "var( --red)",
        black: "var(--black)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
      fontSize: {
        "10xl": "70px",
        "8xl": "60px",
        "6xl": "45px",
        "3xl": "30px",
        "2xl": "23px",
        xl: "20px",
        lg: "18px",
        md: "16px",
      },
      fontWeight: {
        semibold: "600",
        bold: "700",
        black: "800",
      },
    },
  },
  plugins: [],
};
