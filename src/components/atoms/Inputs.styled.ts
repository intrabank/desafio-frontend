import { styled } from "../../styles/theme";

export const Input = styled("input", {
  background: "$dark950",
  border: "none",
  borderRadius: "8px",
  padding: "19px 16px",
  width: "100%",
  outline: "1px solid $dark800",
  color: "#FFF",
  transition: "0.2s all",

  "&::placeholder": {
    fontFamily: "Poppins",
    fontSize: "14px",
    lineHeight: "130%",
    fontWeight: "400",
  },

  "&:focus": {
    outline: "1px solid #FFF",
  },
});
