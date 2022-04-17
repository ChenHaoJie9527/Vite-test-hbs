import {} from "tailwindcss";
module.exports = {
  // purge: 清楚选项，当在生成环境时，需要清楚未使用的类 这样生成出来的尺寸更小
  purge: [
    "./index.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.tsx",
    "./src/**/*.jsx",
  ],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {},
  // darkMode: false,
};
