const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
