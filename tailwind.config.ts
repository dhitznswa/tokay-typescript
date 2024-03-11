import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        madimi: ["Madimi One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
