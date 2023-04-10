/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1250px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ addComponents }) => {
      addComponents({
        ".has-caret": {
          position: "relative",
          "&::after": {
            backgroundSize: "cover",
            display: "inline-block",
            height: "6px",
            position: "absolute",
            right: "-18px",
            width: "10px",
            backgroundColor: "red",
            backgroundImage: `url(
              "data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m2.25.6 3.25 3 3.25-3 1.3.6L5.5 5.4.95 1.2l1.3-.6Z' fill='%23000'/%3E%3C/svg%3E"
            )`,
          },
        },
      });
    }),
  ],
};
