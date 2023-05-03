import InputMask from "react-input-mask";
import { styled } from "@stitches/react";

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  minWidth: '506px',
  backgroundColor: 'transparent'
});

export const Input = styled('input', {
  backgroundColor: "#202020",
  border: "1px solid #414141",
  borderRadius: "4px",
  height: "56px",
  width: "$customWidth",
  margin: "8px 0",
  padding: "0 8px",
  outlineColor: "gray",
});

export const DateInput = styled(InputMask, {
  backgroundColor: "#202020",
  border: "1px solid #414141",
  borderRadius: "4px",
  height: "56px",
  width: "$customWidth",
  margin: "8px 0",
  padding: "0 8px",
  outlineColor: "gray",
});

export const Select = styled('select', {
  backgroundColor: '#202020',
  color: '$customColor',
  width: '100%',
  height: '56px',
  border: '1px solid #414141',
  borderRadius: '8px',
  margin: '8px 0',
  padding: '0 4px',
  
  '&:hover': {
    appearance: 'none'
  }
})

export const Textarea = styled("textarea", {
  backgroundColor: "#202020",
  resize: "none",
  width: '100%',
  border: '1px solid #414141',
  borderRadius: "4px",
  padding: '8px',
  margin: "8px 0",

});

export const Button = styled("button", {
  backgroundColor: "$bgColor",
  color: '#000',
  fontWeight: '700',
  fontSize: '14px',
  height: "56px",
  border: "none",
  width: '100%',
  borderRadius: "8px",
  margin: "8px 0",
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8
  }
});

export const CheckboxWrapper = styled("div", {
  display: "flex",
  margin: '25px auto 0 auto'
});

export const StyledCheckbox = styled("input", {
  marginRight: "6px",
  outlineColor: "gray",
  cursor: "pointer",
  width: "15px",
  border: "1px solid gray",
  borderRadius: '4px'
});
