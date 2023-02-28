import { styled } from "../../../styles/theme";

export const GlobeContainer = styled("div", {
  flex: 1,
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  zIndex: "-1",
  userSelect: "none",
  position: "fixed",
  right: "0px",
  img: {
    mixBlendMode: "normal",
    opacity: 0.7,
    position: "absolute",
    right: "-100px",
    top: "-10%",
    zIndex: "-1",
  },
});
