import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins",

    "::placeholder": {
      color: "$dark950",
    },
  },

  body: {
    background: "$dark1000",
    minHeight: "100vh",

    "#__next": {
      minHeight: "100vh",
    },
  },
});
