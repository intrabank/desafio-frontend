import { globalCss, styled } from "./theme";

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

export const Rectangle = styled("div", {
  background: "$primaryColor",
  width: "43px",
  height: "11px",
  borderRadius: "20px",
  margin: "16px 0",
});
