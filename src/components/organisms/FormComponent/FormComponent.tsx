// GENERAL
import { useState } from "react";

// CSS
import { FormContainer } from "./FormComponent.styled";
import { SubmitButton } from "../../atoms/Button.styled";

// COMPONENTS
import {
  FloatLabelInput,
  FloatLabelTextArea,
} from "../../atoms/FloatLabel/FloatLabel";
import DropMenu from "../../atoms/DropMenu/DropMenu";

// ERROR TYPE
type error = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  biography?: string;
  selectedOption?: string;
};

const FormComponent = () => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // DATA
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({} as error);

  // HANDLE SUBMIT ACTION
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(firstName);

    const result = await checkErrors();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    console.log(firstName);

    return firstName;
  };

  // CHECK FORM ERRORS
  const checkErrors = () => {
    const erros = {} as error;

    if (!firstName) {
      erros.firstName = "Nome inválido";
    }

    console.log(erros);
    return erros;
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <header>
        <h1>Cadastre-se</h1>
        <p>Para começar, insira os dados abaixo</p>
      </header>

      <div className="form-controls">
        {/* First Name Input */}
        <FloatLabelInput
          onChange={handleInputChange}
          label="Nome"
          type="text"
          value={firstName}
          placeholder="\"
        />

        {/* Last Name Input */}
        <FloatLabelInput
          onChange={() => ""}
          label="Sobrenome"
          type="text"
          value=""
          placeholder="\"
        />

        {/* E-mail Input */}
        <FloatLabelInput
          onChange={() => ""}
          label="E-mail"
          type="email"
          value=""
          placeholder="\"
        />

        {/* Birth Day Input */}
        <FloatLabelInput
          onChange={() => ""}
          label="Data de nascimento"
          type="date"
          value=""
          placeholder="\"
        />

        {/* Password Input */}
        <div className="input-container">
          <FloatLabelInput
            onChange={() => ""}
            label="Senha"
            type={showPassword ? "text" : "password"}
            value=""
            placeholder="\"
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

        {/* Country DropMenu */}
        <DropMenu label="Selecione seu país" />

        {/* Bio Input */}
        <FloatLabelTextArea
          onChange={() => ""}
          label="Bio"
          style="bio"
          type="text"
          value=""
          placeholder="\"
        />

        {/* Submit Button */}
        <SubmitButton onClick={handleSubmit}>Cadastrar</SubmitButton>
      </div>
    </FormContainer>
  );
};

export default FormComponent;
