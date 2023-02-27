import { styled } from "../../../styles/theme";

export const FormContainer = styled("div", {
  background: "$transparentDark900",
  height: "100%",
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
});
