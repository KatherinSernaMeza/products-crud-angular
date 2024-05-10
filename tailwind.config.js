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
        form: "rgba(var(--form))",
        table: "rgba(var(--table))",
        row: "rgba(var(--row))",
        contBorder: "rgba(var(--contBorder))",
        input: "rgba(var(--input))",
        textcolor: "rgba(var(--textcolor))",
        descriptiontext: "rgba(var(--descriptiontext))",
        btn: "rgba(var(--btn))",
        navlink: "rgba(var(--navlink))",
        navtext: "rgba(var(--navtext))",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
      screens: {
        tablet: "992px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
