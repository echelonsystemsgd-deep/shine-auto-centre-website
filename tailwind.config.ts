import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B14",
        surface: {
          DEFAULT: "#101626",
          raised: "#161F36",
          elevated: "#1D2846",
          border: "#233054",
        },
        brand: {
          blue: {
            DEFAULT: "#2563EB",
            hover: "#1D4ED8",
            light: "#3B82F6",
            glow: "#60A5FA",
          },
          amber: {
            DEFAULT: "#F97316",
            hover: "#EA580C",
            light: "#FB923C",
          },
          navy: {
            900: "#080B14",
            800: "#101626",
            700: "#161F36",
            600: "#233054",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "shine-sweep": "shine 3s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "50%, 100%": { transform: "translateX(100%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        }
      }
    },
  },
  plugins: [],
};

export default config;
