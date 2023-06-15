/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false, // set preflight to false
  },
  prefix: "tw-", // set prefix to 'tw-'
  important: true, // set important to true
  theme: {
    extend: {},
  },
  plugins: [],
};
