/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/view/about.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#D6D3D1",
        secondary: "#525252",
        primaryHover: "#ca8a04",
        primaryOpacity: "#D6D3D121",
        paragraph: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      width: {
        86: "344px",
      },
      fontFamily: {
        inter: "Inter",
        aesthetic: "Modern Aesthetic - Demo Version",
      },
      borderRadius: {
        "5xl": "32px",
        "7xl": "40px",
        "9xl": "48px",
      },
    },
  },
  plugins: [],
};
