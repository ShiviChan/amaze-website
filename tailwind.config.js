/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary text / dark surfaces (was the page background in the dark theme)
        ink: {
          DEFAULT: "#0F172A",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
        },
        // Light page canvas
        canvas: {
          DEFAULT: "#F7F8FC",
          50: "#FBFBFE",
          100: "#F7F8FC",
          200: "#EEF0F7",
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
        // Secondary gradient accents (Shiprocket-style pastel mesh)
        coral: "#FF6B4A",
        rose: "#FF3D7F",
        violet: "#7B5CFF",
        sky: "#3BA9FF",
        cream: "#F7F4EE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
        deva: ["var(--font-deva)", "var(--font-display)", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)",
        lift: "0 2px 4px rgba(15,23,42,0.04), 0 24px 48px -16px rgba(15,23,42,0.16)",
        brand: "0 10px 30px -10px rgba(229,9,20,0.55)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.97)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #E50914 0%, #FF3D7F 55%, #FF6B4A 100%)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(255,61,127,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};
