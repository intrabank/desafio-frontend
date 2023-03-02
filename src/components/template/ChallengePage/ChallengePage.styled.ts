import { styled } from "../../../pages/styles/theme";

export const ChallengePageContainer = styled("div", {
  padding: "77px 100px",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins",

  ".globe": {
    position: "absolute",
    zIndex: "-1",
  },
});

export const FeedbackBox = styled("div", {
  mixBlendMode: "normal",
  width: "820px",
  height: "428px",
  background: "rgba(29, 29, 29, 0.5)",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  color: "#fff",

  h1: {
    fontFamily: "Poppins",
  },
});
