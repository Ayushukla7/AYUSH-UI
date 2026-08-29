/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0c0d10",
        darkCard: "#131419",
        darkBorder: "rgba(255, 255, 255, 0.08)",
        goldAccent: "#ffaa00",
        orangeAccent: "#ff7b00",
        adobe: {
          ps: "#31a8ff",
          ai: "#ff9a00",
          pr: "#9999ff",
          id: "#ff3366",
          figma: "#f24e1e"
        }
      },
      fontFamily: {
        impact: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        handwriting: ['"Caveat"', '"Kaushan Script"', 'cursive'],
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'deck': '0 20px 40px -8px rgba(0, 0, 0, 0.8), 0 6px 16px -4px rgba(0, 0, 0, 0.6)',
        'paper': '0 10px 30px -5px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
