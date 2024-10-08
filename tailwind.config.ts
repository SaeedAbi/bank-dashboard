import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "15px",
      base: "16px",
      xl: "18px",
      "2xl": "20px",
      "3xl": "22px",
      "4xl": "28px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        md: "800px",
      },
      colors: {
        black: "#232323",
        primary: "#343C6A",
        secondary: "#B1B1B1",
        mainBg: "#E6EFF5",
        textBlue: "#718EBF",
        withdraw: "#FF4B4A",
        deposit: "#41D4A8",
        darkBlue: "#0A06F4",
        borderGrey: "#EBEEF2",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
export default config;
