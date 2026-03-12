import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#070B14",
        surface: "#0F172A",
        glass: "rgba(255, 255, 255, 0.08)",
        accent: "#42D9FF",
        accent2: "#7B7CFF",
        text: "#E2E8F0",
        muted: "#94A3B8"
      },
      boxShadow: {
        glow: "0 0 35px rgba(66, 217, 255, 0.32)",
        glass: "0 18px 45px rgba(5, 10, 22, 0.35)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at top right, rgba(123,124,255,0.25), transparent 55%), radial-gradient(circle at 20% 20%, rgba(66,217,255,0.18), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
