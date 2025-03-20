import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/presentation/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/styles/safelist.txt",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        magic: {
          primary: "#b8d43f",
          secondary: "#5ea7e9",
          warning: "#f2ee4c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
