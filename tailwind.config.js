/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED", // Violet 600
        secondary: "#A78BFA", // Violet 400
        dark: "#1E1B4B", // Indigo 950 - More blue/vibrant than Slate 900
        light: "#F8FAFC", // Slate 50
        accent: "#38BDF8", // Sky 400
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.5)',
      }
    },
  },
  plugins: [],
}
