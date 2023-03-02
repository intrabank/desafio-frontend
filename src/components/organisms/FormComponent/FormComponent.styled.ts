import { styled } from "../../../pages/styles/theme";

export const FormContainer = styled("div", {
  background: "$transparentDark900",
  maxWidth: "706px",
  padding: "54px 77px",
  borderRadius: "8px",
  border: "2px solid $dark900",
  backdropFilter: "blur(100px)",
  color: "#FFF",
  textAlign: "center",
  flex: 1,

  header: {
    marginBottom: "32px",

    h1: {
      fontSize: "25px",
    },

    p: {
      fontSize: "14px",
      fontWeight: "300",
    },
  },

  ".form-controls": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",

    ".input-container": {
      position: "relative",

      ".eye-icon": {
        zIndex: 9999,
        position: "absolute",
        top: "18%",
        right: "15px",
      },
    },
  },

  "@bp1": {
    borderRadius: "0px",
    border: "none",
    padding: "54px 34px",
  },
});
