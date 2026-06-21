import type { Config } from "tailwindcss";

export default {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand palette derived from the Cleareds logo — sage-green leaf accent
        brand: {
          50: "#f4f7ef",
          100: "#e6efdc",
          200: "#cedfbb",
          300: "#abc78f",
          400: "#8aab68",
          500: "#6f8d4c",
          600: "#56723b",
          700: "#445a30",
          800: "#38492a",
          900: "#2f3d25",
        },
        // Charcoal/ink derived from the logo wordmark (slight green undertone)
        ink: {
          DEFAULT: "#1e2a24",
          light: "#2b3a31",
          muted: "#3a4b41",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out both",
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    }
  },
  plugins: [],
} satisfies Config;
