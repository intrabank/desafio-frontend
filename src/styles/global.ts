import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins",
  },

  body: {
    background: "$dark1000",
    minHeight: "100vh",

    "#__next": {
      minHeight: "100vh",
    },
  },

  "-webkit-datetime-edit-year-field:not([aria-valuenow]), -webkit-datetime-edit-month-field:not([aria-valuenow]), -webkit-datetime-edit-day-field:not([aria-valuenow])":
    {
      color: "transparent",
    },
});
