/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphBg: "#EBEBEB",
        accentRed: "#FF1E27",
        darkPaper: "#0D0D11",
        pureBlack: "#08080A",
        ink: "#111111",
        inkMuted: "#666666",
        polaroidWhite: "#FFFFFF",
      },
      fontFamily: {
        extended: ['"Unbounded"', '"Syne"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        display: ['"Unbounded"', 'sans-serif'],
        hindi: ['"Rozha One"', '"Yatra One"', 'serif'],
        yatra: ['"Yatra One"', 'cursive'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px #000000',
        'brutal-red': '4px 4px 0px #FF1E27',
        'brutal-lg': '6px 6px 0px #000000',
        'polaroid': '0 12px 24px -6px rgba(0, 0, 0, 0.15), 0 4px 8px -4px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
