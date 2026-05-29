/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#111111",
          700: "#1a1a1a",
        },
        brand: {
          DEFAULT: "#E50914",
          50: "#FFF1F2",
          100: "#FFE1E3",
          200: "#FFB8BD",
          300: "#FF8088",
          400: "#FF4753",
          500: "#E50914",
          600: "#C2070F",
          700: "#9B050B",
          800: "#740308",
          900: "#4D0205",
        },
        cream: "#F7F4EE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(229,9,20,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};
