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
        adobe: {
          ps: "#31a8ff",
          ai: "#ff9a00",
          pr: "#9999ff",
          ae: "#9999ff",
          id: "#ff3366",
          figma: "#f24e1e",
          canva: "#00c4cc"
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        editorial: ['"Bodoni Moda"', 'serif'],
        unbounded: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'purple-glow': '0 0 50px -10px rgba(168, 85, 247, 0.4)',
        'purple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(168, 85, 247, 0.2)',
      },
      animation: {
        'blob': 'animateBlob 8s linear infinite',
      },
      keyframes: {
        animateBlob: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.08)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
