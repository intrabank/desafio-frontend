import { useState } from "react";
import FloatLabel from "../../atoms/FloatLabel";
import { Input } from "../../atoms/Inputs.styled";
import { FormContainer } from "./FormComponent.styled";

const FormComponent = () => {
  const [focused, setFocused] = useState(false);

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

      {/* Name Input */}
      <FloatLabel label="Nome" value="" onChange={() => ""} />
    </FormContainer>
  );
};

export default FormComponent;
