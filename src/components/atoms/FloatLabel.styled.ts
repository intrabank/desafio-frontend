import { styled } from "../../styles/theme";

export const FloatLabelContainer = styled("div", {
  position: "relative",

  ".input-control": {
    background: "$dark950",
    border: "none",
    borderRadius: "8px",
    padding: "24px 16px 10px 16px",
    width: "100%",
    outline: "1px solid $dark800",
    color: "#FFF",
    transition: "0.2s all",

    "&:focus": {
      outline: "1px solid #FFF",
    },
  },

  ".input-label": {
    position: "absolute",
    top: "14px",
    left: "16px",
    transition: "all 0.2s ease-out",
    pointerEvents: "none",
    color: "$dark500",
  },

  ".input-control:focus + .input-label": {
    top: "4px",
    fontSize: "12px",
  },

  ".input-label.float": {
    top: "4px",
    fontSize: "0.75rem",
  },
});
