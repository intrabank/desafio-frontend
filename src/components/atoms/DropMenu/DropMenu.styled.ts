import { keyframes } from "@stitches/react";
import { styled } from "../../../styles/theme";

export const DropMenuContainer = styled("div", {
  position: "relative",

  ".dropmenu-wrapper": {
    background: "$dark950",
    border: "none",
    borderRadius: "8px",
    padding: "16px 16px",
    width: "100%",
    outline: "1px solid $dark800",
    color: "#888888",
    transition: "0.2s all",
    textAlign: "left",
    cursor: "default",
  },

  ".dropmenu-options": {
    position: "absolute",
    top: "50px",
    zIndex: 99,
    width: "100%",
    background: "$dark950",
    padding: "19px 16px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    outline: "1px solid $dark800",
    borderTop: "none",
    transition: "0.2s all",

    ul: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "start",
      height: "100%",
      gap: "16px",

      li: {
        textAlign: "left",
        width: "100%",
        listStyle: "none",
        color: "$dark300",

        "&:hover": {
          color: "#fff",
          cursor: "default",
        },
      },
    },
  },
});
