/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F8F6F0",
        paperDark: "#EDE8DF",
        paperCard: "#FFFFFF",
        ink: "#141416",
        inkMuted: "#52525B",
        pastelYellow: "#FEF08A",
        pastelMint: "#BBF7D0",
        pastelPeach: "#FED7AA",
        pastelBlue: "#BAE6FD",
        pastelPurple: "#DDD6FE",
        pastelPink: "#FBCFE8",
      },
      fontFamily: {
        pixel: ['"Jersey 10"', '"Pixelify Sans"', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        display: ['"Jersey 10"', '"Pixelify Sans"', 'sans-serif'],
        unbounded: ['"Jersey 10"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '3px 3px 0px #141416',
        'brutal-lg': '5px 5px 0px #141416',
        'brutal-sm': '2px 2px 0px #141416',
        'polaroid': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
