/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#030307",
        darkCard: "#090912",
        darkBorder: "rgba(255, 255, 255, 0.08)",
        purpleGlow: "#a855f7",
        purpleDark: "#7c3aed",
        purpleLight: "#c084fc",
        goldAccent: "#ffaa00",
        adobe: {
          ps: "#31a8ff",
          ai: "#ff9a00",
          pr: "#9999ff",
          id: "#ff3366",
          figma: "#f24e1e"
        }
      },
      fontFamily: {
        unbounded: ['"Unbounded"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        sans: ['"Montserrat"', '"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'purple-glow': '0 0 50px -10px rgba(168, 85, 247, 0.5)',
        'purple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 30px -10px rgba(168, 85, 247, 0.25)',
      },
      animation: {
        'blob': 'animateBlob 7s linear infinite',
      },
      keyframes: {
        animateBlob: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
