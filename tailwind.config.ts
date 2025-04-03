import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html", // Or adjust this path based on where your HTML files are located
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path to match your JavaScript/TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
