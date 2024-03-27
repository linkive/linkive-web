import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem",
      },
      colors: {
        "primary-black": "var(--primary-black)",
        "primary-white": "var(--primary-white)",
        "primary-red": "var(--primary-red)",
        "primary-green": "var(--primary-green)",
        "grey-50": "var(--grey-50)",
        "grey-100": "var(--grey-100)",
        "grey-200": "var(--grey-200)",
        "grey-300": "var(--grey-300)",
        "grey-400": "var(--grey-400)",
        "grey-500": "var(--grey-500)",
        "grey-600": "var(--grey-600)",
        "grey-700": "var(--grey-700)",
        "grey-800": "var(--grey-800)",
        "grey-900": "var(--grey-900)",
      },
      backgroundImage: {
        "skeleton-gradient":
          "linear-gradient(90deg, #E1E1E1 0%, rgba(225, 225, 225, 0.50) 100%);",
      },
      boxShadow: {
        btn: "0px 0px 4px rgba(0, 0, 0, 0.50)",
      },
      fontFamily: {
        pretandard: ["PretendardGOVVariable", "sans-serif"],
      },
    },
  },
  plugins: [],

  mode: "jit",
};
export default config;
