import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#236f01",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(0, 0, 0, 0.5) -5.91%, rgba(9, 121, 18, 0.5))"
      },
    },
  },
  plugins: [],
} satisfies Config;
