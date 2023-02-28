import { useState } from "react";
import FloatLabel from "../../atoms/FloatLabel";
import { Input } from "../../atoms/Inputs.styled";
import { FormContainer } from "./FormComponent.styled";

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
        <FloatLabel label="Nome" type="text" value="" />

        {/* Last Name Input */}
        <FloatLabel label="Sobrenome" type="text" value="" />

        {/* E-mail Input */}
        <FloatLabel label="E-mail" type="email" value="" />

        {/* Birth Day Input */}
        <FloatLabel label="Data de nascimento" type="date" value="" />

        {/* Password Input */}
        <div className="input-container">
          <FloatLabel
            label="Senha"
            type={showPassword ? "text" : "password"}
            value=""
          />
          <span
            onClick={() => {
              setShowPassword(!showPassword);
              console.log(showPassword);
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
        <FloatLabel label="Bio" style="bio" type="text" value="" />
      </div>
      {/* Name Input */}
    </FormContainer>
  );
};

export default FormComponent;
