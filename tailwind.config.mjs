/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#121212',
        darkTheme: '#121212',
        textHover: '#f35a25'
      },
      backgroundColor: {
        btnHover: '#f35a25'
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "sans-serif"]
      },
      boxShadow: {
        "black" : "4px 4px 0 #000",
        "white" : "4px 4px 0 #fff"
      },
      gridTemplateColumns: {
        "auto" : "repeat(auto-fit, minmax(200px, 1fr))",
        "large" : "repeat(auto-fit, minmax(400px, 1fr))",
        "small" : "repeat(auto-fit, minmax(200px, 1fr))"
      },
      backgroundImage: ['before']
    },
  },
  darkMode: 'selector',
  plugins: [],
};
