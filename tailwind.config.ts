import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/presentation/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        magic:{
          primary: '#b8d43f',
          secondary: '#5ea7e9',
          warning: '#f2ee4c',
        }
      },
    },
  },
  plugins: [],
  safelist:[
    {
      pattern: /bg-(red|blue|green|yellow|purple|gray)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover'], // Opcional: incluye variantes como hover
    },
    {
      pattern: /text-(white|black|gray|red|blue|green|yellow|purple)/,
    },
    {
      pattern: /w-(0|2|4|6|8|10|12|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern: /h-(0|2|4|6|8|10|12|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    }
  ]
};
export default config;
