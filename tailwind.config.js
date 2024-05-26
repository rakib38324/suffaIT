/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.hide-scrollbar': {
        /* Hide scrollbar for Chrome, Safari and Opera */
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',     /* Firefox */
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};
