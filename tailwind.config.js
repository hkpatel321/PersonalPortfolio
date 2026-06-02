/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: "#09090b",
        surface: "#111113",
        "surface-light": "#18181b",
        border: "rgba(255, 255, 255, 0.06)",
        "border-hover": "rgba(255, 255, 255, 0.12)",
        accent: "#3b82f6",
        "accent-violet": "#8b5cf6",
        "accent-emerald": "#10b981",
        "accent-amber": "#f59e0b",
        "accent-rose": "#f43f5e",
        "text-primary": "#fafafa",
        "text-secondary": "#a1a1aa",
        "text-muted": "#71717a",
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-violet": "0 0 20px rgba(139, 92, 246, 0.15)",
        "glow-emerald": "0 0 20px rgba(16, 185, 129, 0.15)",
        card: "0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 10px 40px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      animation: {
        "border-glow": "border-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(59, 130, 246, 0.2)" },
          "50%": { borderColor: "rgba(139, 92, 246, 0.4)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.25)" },
        },
      },
    },
  },
  plugins: [],
}
