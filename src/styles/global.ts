import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins",
  },

  body: {
    background: "$background",
    minHeight: "100vh",
  },
});
