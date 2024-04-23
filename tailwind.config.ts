import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
};
export default config;
