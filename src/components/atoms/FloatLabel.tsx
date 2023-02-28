import { ChangeEventHandler, useState } from "react";
import { FloatLabelContainer } from "./FloatLabel.styled";

interface FloatLabelProps {
  label: string;
  value: string;
  type: string;
}

const FloatLabel = ({ label, value, type }: FloatLabelProps) => {
  const [focused, setFocused] = useState(false);

  function handleFloat(e: any) {
    if (e.length > 0) {
      return setFocused(true);
    }
    return setFocused(false);
  }

  console.log(focused);

  return (
    <FloatLabelContainer>
      <input
        type={type}
        onChange={(e) => handleFloat(e.target.value)}
        className="input-control"
        required
      />

      <label className={`input-label ${focused ? "float" : ""}`}>{label}</label>
    </FloatLabelContainer>
  );
};

export default FloatLabel;
