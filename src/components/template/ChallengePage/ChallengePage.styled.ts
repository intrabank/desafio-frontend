// THEME
import { styled } from "../../../pages/styles/theme";

export const ChallengePageContainer = styled("div", {
  padding: "77px 100px",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins",
  position: "relative",
  overflow: "hidden",

  ".globe": {
    position: "absolute",
    zIndex: "-1",
  },

  "@bp1": {
    padding: "0px",
  },
});

export const FeedbackBox = styled("div", {
  mixBlendMode: "normal",
  width: "820px",
  height: "428px",
  background: "rgba(29, 29, 29, 0.5)",
  border: "2px solid $dark900",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  padding: "93px 40px",
  textAlign: "center",

  ".user-icon": {
    width: "78px",
    height: "78px",
    background: "#47E0FF",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40px",

    color: "#000",
    fontSize: "25px",
    fontWeight: "600",
  },

  h1: {
    fontFamily: "Poppins",
  },

  ".birthdate": {
    fontSize: "18px",
    fontWeight: "300",
  },

  "@bp1": {
    width: "100vw",
    height: "100vh",
  },
});
