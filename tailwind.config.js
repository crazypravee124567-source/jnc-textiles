import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#142B3B",
          charcoal: "#20272D",
          white: "#F8F7F2",
          beige: "#D8C3A5",
          copper: "#A8734F",
          copperDark: "#8f5e3d",
          navyDark: "#0B1A24",
          border: "#E2E0D8",
          surfaceLight: "#FBFBF9",
        },
        primary: "#142B3B",
        "primary-container": "#142b3b",
        "on-primary": "#ffffff",
        "on-primary-container": "#7c93a6",
        secondary: "#835332",
        "secondary-container": "#febf95",
        "secondary-fixed": "#ffdcc6",
        "secondary-fixed-dim": "#f8b990",
        "on-secondary": "#ffffff",
        tertiary: "#1d1303",
        "tertiary-fixed": "#f6dfc0",
        "tertiary-fixed-dim": "#d9c4a5",
        surface: "#f6faff",
        "surface-dim": "#d4dbe3",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eef4fd",
        "surface-container": "#e8eff7",
        "surface-container-high": "#e2e9f1",
        "surface-variant": "#dce3eb",
        "on-surface": "#151c22",
        "on-surface-variant": "#43474c",
        outline: "#73777c",
        "outline-variant": "#c3c7cc",
        background: "#f6faff",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [forms, containerQueries],
};
