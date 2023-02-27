import { Input } from "../../atoms/Inputs.styled";
import { FormContainer } from "./FormComponent.styled";

const FormComponent = () => {
  return (
    <FormContainer>
      <header>
        <h1>Cadastre-se</h1>
        <p>Para começar, insira os dados abaixo</p>
      </header>

      <Input />
    </FormContainer>
  );
};

export default FormComponent;
