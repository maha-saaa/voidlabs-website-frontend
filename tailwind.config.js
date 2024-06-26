/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-light": "#FF9E00",
        "orange-medium": "#FF6D00",
        "orange-gradient-light": "rgba(255, 141, 1, 0.50)",
        "purple-medium": "#20152C",
        "purple-dark": "#0E0527",
        "purple-gradient-dark": "rgba(20, 10, 47, 0.20)",
        "gray-light": "#F4EFF6",
        "gray-gradient-light": "rgba(244, 239, 246, 0.80)",
        "gray-gradient-medium": "rgba(244, 239, 246, 0.20)",
      },
    },
  },
  plugins: [],
};
