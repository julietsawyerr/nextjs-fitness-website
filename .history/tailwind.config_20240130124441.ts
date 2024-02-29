import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          "gray-20":  "#F8F4EB",
          "gray-50":"#EFE6E6",
          "gray-100": "#DFCCCC",
          "gray-"
      },
    },
  },
  plugins: [],
};
export default config;
