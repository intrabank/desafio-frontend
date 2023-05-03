import { styled } from "@stitches/react";

export const Box = styled("div", {
  backgroundColor: 'transparent',
  display: "flex",
  flexDirection: "column",
  alignItems: '$align',
  width: "$width",
  height: "$height",
  border: "$customBorder",
  borderRadius: "8px",
  padding: "$customPadding",
  margin: '$customMargin'
});
