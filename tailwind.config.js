/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        container: "rgba(var(--container))",
        card: "rgba(var(--card))",
        box: "rgba(var(--box))",
        contBorder: "rgba(var(--contBorder))",
        input: "rgba(var(--input))",
        text: "rgba(var(--text))",
        descriptiontext: "rgba(var(--descriptiontext))",
        btn: "rgba(var(--btn))",
        navlink: "rgba(var(--navlink))",
        navtext: "rgba(var(--navtext))",
      },
    },
  },
  plugins: [],
};
