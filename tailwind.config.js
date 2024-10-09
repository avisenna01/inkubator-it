/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textDecorationSkipInk: {
        none: "none",
        auto: "auto",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".decoration-skip-ink-none": {
          "text-decoration-skip-ink": "none",
        },
      });
    },
    // require("daisyui"),
  ],
};
