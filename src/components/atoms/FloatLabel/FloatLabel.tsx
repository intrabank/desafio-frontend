import { ChangeEventHandler, useState } from "react";
import { FloatLabelInputContainer } from "./FloatLabel.styled";

interface FloatLabelProps {
  label: string;
  value: string;
  type: string;
  style?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FloatLabelInput = ({
  label,
  value,
  type,
  style,
  onChange,
  placeholder,
}: FloatLabelProps) => {
  return (
    <FloatLabelInputContainer>
      <input
        type={type}
        onChange={onChange}
        className={style ? `input-control ${style}` : "input-control"}
        placeholder={placeholder}
        required
      />

      <label className={`input-label`}>{label}</label>
    </FloatLabelInputContainer>
  );
};

export const FloatLabelTextArea = ({
  label,
  style,
  placeholder,
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
      <textarea
        onChange={(e) => handleFloat(e.target.value)}
        className={style ? `input-control ${style}` : "input-control"}
        placeholder={placeholder}
      />

      <label className={`input-label`}>{label}</label>
    </FloatLabelInputContainer>
  );
};
