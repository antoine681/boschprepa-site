import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        moss: {
          DEFAULT: "#010F01",
          50: "#F2F7F2",
          100: "#D9E5D9",
          200: "#A8BFA8",
          300: "#6B8A6B",
          400: "#385838",
          500: "#1A2D1A",
          600: "#0E1C0E",
          700: "#071407",
          800: "#040D04",
          900: "#010F01",
          950: "#000700",
        },
        lime: {
          DEFAULT: "#85F637",
          glow: "#A8FF60",
          deep: "#6DD423",
        },
        bone: {
          DEFAULT: "#FAFFFB",
          dim: "#E8EFE9",
        },
      },
      fontFamily: {
        display: ["var(--font-cal)", "system-ui", "sans-serif"],
        sans: ["var(--font-red-hat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(133, 246, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(133, 246, 55, 0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-glow": "pulse-glow 2.4s ease-out infinite",
        "marquee": "marquee 40s linear infinite",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(133,246,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(133,246,55,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at top, rgba(133,246,55,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
