import { styled } from "../../../pages/styles/theme";

export const HomePageContainer = styled("div", {
  padding: "77px 100px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  ".globe": {
    display: "flex",
    flex: 1,
  },

  "@bp2": {
    borderRadius: "0px",
    padding: "0px",
  },
});
