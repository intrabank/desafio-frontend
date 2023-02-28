// GENERAL
import { useState } from "react";

// CSS
import { FormContainer } from "./FormComponent.styled";

// COMPONENTS
import {
  FloatLabelInput,
  FloatLabelTextArea,
} from "../../atoms/FloatLabel/FloatLabel";
import { SubmitButton } from "../../atoms/Button.styled";

const FormComponent = () => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  return (
    <FormContainer>
      <header>
        <h1>Cadastre-se</h1>
        <p>Para começar, insira os dados abaixo</p>
      </header>

      <div className="form-controls">
        {/* First Name Input */}
        <FloatLabelInput label="Nome" type="text" value="" />

        {/* Last Name Input */}
        <FloatLabelInput label="Sobrenome" type="text" value="" />

        {/* E-mail Input */}
        <FloatLabelInput label="E-mail" type="email" value="" />

        {/* Birth Day Input */}
        <FloatLabelInput label="Data de nascimento" type="date" value="" />

        {/* Password Input */}
        <div className="input-container">
          <FloatLabelInput
            label="Senha"
            type={showPassword ? "text" : "password"}
            value=""
          />
          <span
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="eye-icon"
            id="show-password"
          >
            <img
              src={
                showPassword
                  ? "/assets/hidePassword.png"
                  : "/assets/showPassword.png"
              }
            />
          </span>
        </div>

        {/* Bio Input */}
        <FloatLabelTextArea label="Bio" style="bio" type="text" value="" />

        {/* Submit Button */}
        <SubmitButton>Cadastrar</SubmitButton>
      </div>
    </FormContainer>
  );
};

export default FormComponent;
