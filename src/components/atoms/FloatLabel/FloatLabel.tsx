import { ChangeEventHandler, useState } from "react";
import { FloatLabelInputContainer } from "./FloatLabel.styled";

interface FloatLabelProps {
  label: string;
  value: string;
  type: string;
  style?: string;
  id?: string;
  error?: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FloatLabelInput = ({
  label,
  value,
  type,
  style,
  onChange,
  id,
  error,
}: FloatLabelProps) => {
  return (
    <FloatLabelInputContainer>
      <input
        type={type}
        onChange={onChange}
        className={style ? `input-control ${style}` : "input-control"}
        placeholder="⠀"
        id={id}
        required
        min="1997-01-01"
        max="2030-12-31"
      />

      <label className={`input-label`}>{label}</label>

      {error && <p className="error-message">{error}</p>}
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
        placeholder="⠀"
      />

      <label className={`input-label`}>{label}</label>
    </FloatLabelInputContainer>
  );
};
