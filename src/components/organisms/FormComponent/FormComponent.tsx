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

    var errorsDiv = document.querySelectorAll(".input-control");
    errorsDiv.forEach((div) => {
      div.classList.remove("wrong-field");
    });

    const result = await checkErrors();
  };

  // CHECK FORM ERRORS
  const checkErrors = () => {
    const erros = {} as error;

    if (!firstName) {
      erros.firstName = "Nome inválido";
      document.getElementById("first-name")?.classList.add("wrong-field");
    }

    if (!lastName) {
      erros.lastName = "Sobrenome inválido";
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
          onChange={(event) => setFirstName(event.target.value)}
          label="Nome"
          type="text"
          value={firstName}
          id="first-name"
        />

        {/* Last Name Input */}
        <FloatLabelInput
          onChange={(event) => setLastName(event.target.value)}
          label="Sobrenome"
          type="text"
          value=""
        />

        {/* E-mail Input */}
        <FloatLabelInput
          onChange={(event) => setEmail(event.target.value)}
          label="E-mail"
          type="email"
          value=""
        />

        {/* Birth Day Input */}
        <FloatLabelInput
          onChange={() => ""}
          label="Data de nascimento"
          type="date"
          value=""
        />

        {/* Password Input */}
        <div className="input-container">
          <FloatLabelInput
            onChange={() => ""}
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

        {/* Country DropMenu */}
        <DropMenu label="Selecione seu país" />

        {/* Bio Input */}
        <FloatLabelTextArea
          onChange={() => ""}
          label="Bio"
          style="bio"
          type="text"
          value=""
        />

        {/* Submit Button */}
        <SubmitButton onClick={handleSubmit}>Cadastrar</SubmitButton>
      </div>
    </FormContainer>
  );
};

export default FormComponent;
