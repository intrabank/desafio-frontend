import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      dark1000: "#121212",
      dark950: "#202020",
      dark900: "#2A2A2A",
      transparentDark900: "rgba(29, 29, 29, 0.5)",
      dark800: "#414141",
    },
  },
});
