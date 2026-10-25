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
        background: "#0B0B0D",
        surface: {
          DEFAULT: "#141417",
          raised: "#1C1C22",
          elevated: "#24242C",
          border: "#1C1C22",
          borderHover: "#2E2E38",
        },
        brand: {
          amber: {
            DEFAULT: "#F59E0B",
            hover: "#D97706",
            gold: "#DCAE53",
            light: "#FDE68A",
          },
          emerald: {
            DEFAULT: "#10B981",
            whatsapp: "#25D366",
            hover: "#059669",
            dark: "#064E3B",
          },
          blue: {
            DEFAULT: "#2563EB",
            hover: "#1D4ED8",
            light: "#3B82F6",
            glow: "#60A5FA",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      animation: {
        "shine-sweep": "shine 3s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "50%, 100%": { transform: "translateX(100%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
