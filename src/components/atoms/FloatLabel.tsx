import { ChangeEventHandler, useState } from "react";
import { FloatLabelInputContainer } from "./FloatLabel.styled";

interface FloatLabelProps {
  label: string;
  value: string;
  type: string;
  style?: string;
}

export const FloatLabelInput = ({
  label,
  value,
  type,
  style,
}: FloatLabelProps) => {
  const [focused, setFocused] = useState(false);

  function handleFloat(e: any) {
    if (e.length > 0) {
      return setFocused(true);
    }
    return setFocused(false);
  }

  return (
    <FloatLabelInputContainer>
      <input
        type={type}
        onChange={(e) => handleFloat(e.target.value)}
        className={style ? `input-control ${style}` : "input-control"}
        required
      />

      <label className={`input-label ${focused ? "float" : ""}`}>{label}</label>
    </FloatLabelInputContainer>
  );
};

export const FloatLabelTextArea = ({ label, style }: FloatLabelProps) => {
  const [focused, setFocused] = useState(false);

  function handleFloat(e: any) {
    if (e.length > 0) {
      return setFocused(true);
    }
    return setFocused(false);
  }

  return (
    <FloatLabelInputContainer>
      <textarea
        onChange={(e) => handleFloat(e.target.value)}
        className={style ? `input-control ${style}` : "input-control"}
      />

      <label className={`input-label ${focused ? "float" : ""}`}>{label}</label>
    </FloatLabelInputContainer>
  );
};
