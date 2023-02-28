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
  birthdate?: string;
  password?: string;
  biography?: string;
  country?: string;
};

const FormComponent = () => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // DATA
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({} as error);

  function handleCountry(country: any) {
    setCountry(country);

    console.log(country);
  }

  // HANDLE SUBMIT ACTION
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    var errorsDiv = document.querySelectorAll(".input-control");
    errorsDiv.forEach((div) => {
      div.classList.remove("wrong-field");
    });

    const result = await checkErrors();
    setError(result);
  };

  // CHECK FORM ERRORS
  const checkErrors = () => {
    const erros = {} as error;

    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // FIRST NAME VALIDATION
    if (!firstName) {
      erros.firstName = "Nome inválido";
      document.getElementById("first-name")?.classList.add("wrong-field");
    } else {
      document.getElementById("first-name")?.classList.remove("wrong-field");
    }

    // LAST NAME VALIDATION
    if (!lastName) {
      erros.lastName = "Sobrenome inválido";
      document.getElementById("last-name")?.classList.add("wrong-field");
    } else {
      document.getElementById("last-name")?.classList.remove("wrong-field");
    }

    // E-MAIL VALIDATION
    if (!filter.test(email)) {
      erros.email = "E-mail inválido";
      document.getElementById("email")?.classList.add("wrong-field");
    } else {
      document.getElementById("email")?.classList.remove("wrong-field");
    }

    // PASSWORD VALIDATION
    if (!password || password.length < 6) {
      erros.password = "Sua senha precisa ter mais de 6 caracteres";
      document.getElementById("password")?.classList.add("wrong-field");
    } else {
      document.getElementById("password")?.classList.remove("wrong-field");
    }

    // COUNTRY VALIDATION
    if (country === "") {
      erros.country = "Você precisa selecionar um país";
      document.getElementById("country")?.classList.add("wrong-field");
    } else {
      document.getElementById("country")?.classList.remove("wrong-field");
    }

    // BIRTHDATE VALIDATION
    if (!birthdate) {
      erros.birthdate = "Insira sua data de nascimento";
      document.getElementById("birthdate")?.classList.add("wrong-field");
    } else {
      document.getElementById("birthdate")?.classList.remove("wrong-field");
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
          error={error.firstName ? error.firstName : null}
        />

        {/* Last Name Input */}
        <FloatLabelInput
          onChange={(event) => setLastName(event.target.value)}
          label="Sobrenome"
          type="text"
          value=""
          id="last-name"
          error={error.lastName ? error.lastName : null}
        />

        {/* E-mail Input */}
        <FloatLabelInput
          onChange={(event) => setEmail(event.target.value)}
          label="E-mail"
          type="email"
          value=""
          id="email"
          error={error.email ? error.email : null}
        />

        {/* Birthdate Input */}
        <FloatLabelInput
          onChange={(event) => setBirthdate(event.target.value)}
          label="Data de nascimento"
          id="birthdate"
          type="date"
          value=""
          error={error.birthdate ? error.birthdate : null}
        />

        {/* Password Input */}
        <div className="input-container">
          <FloatLabelInput
            onChange={(event) => setPassword(event.target.value)}
            label="Senha"
            type={showPassword ? "text" : "password"}
            value=""
            id="password"
            error={error.password ? error.password : null}
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
        <DropMenu
          handleCountry={handleCountry}
          id="country"
          label="Selecione seu país"
        />

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
