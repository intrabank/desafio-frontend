/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */

import { useMemo, useState } from "react";
import { CFormInput, CFormTextarea } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListContainer,
  FormContainer,
  FormContent,
  FormHeader,
  ListItem,
  SelectorContainer,
  SubmitButton,
} from "./Form.styled";
import Router from "next/router";

type error = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  biography?: string;
  selectedOption?: string;
};
export function Form() {
  /* ===== Form Validation ===== */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [biography, setBiography] = useState("");
  const [error, setError] = useState({} as error);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await CheckError();
    setError(result);
    
    if(firstName && lastName && email && password && selectedOption) {
      console.log('teste')
      await fetch('https://637f50932f8f56e28e87af4a.mockapi.io/challenge', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          dateOfBirthday: birthdate,
          bio: biography,
          country: selectedOption,
        })
      })
      .then( (res) => res.json())
      .then( (data) => {
        Router.push(`/feedback/${data.id}`)
      })
    }
  };

  const CheckError = () => {
    const erros = {} as error;
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    /* First name validation */
    if (!firstName) {
      erros.firstName = "Nome inválido";
      document.getElementById('first-name')?.classList.add('wrong-field')
    } 

    /* Last name validation */
    if (!lastName) {
      erros.lastName = "Sobrenome inválido";
      document.getElementById('last-name')?.classList.add('wrong-field')
    }

    /* E-mail validation */
    if (!filter.test(email)) {
      erros.email = "E-mail inválido";
      document.getElementById('e-mail')?.classList.add('wrong-field')
    }
    
    /* Password validation */
    if (!password) {
      erros.password = "Sua senha precisa ter mais de 6 caracteres";
      document.getElementById('password')?.classList.add('wrong-field')
    }

    /* Country selecion validation */
    if (!selectedOption) {
      erros.selectedOption = "Você precisa selecionar um país";
      document.getElementById('country')?.classList.add('wrong-field')
    }
  
    return erros;
  };

  /* ===== CHANGE SUBMIT BUTTON COLOR ===== */
  const changeSubmitButtonColor = () => {
    if (typeof window !== "undefined") {
      const submitButton = document.getElementById('submit-button') as HTMLButtonElement;

      const firstNameInput = document.getElementById('first-name') as HTMLInputElement;
      const lastNameInput = document.getElementById('last-name') as HTMLInputElement;
      const emailInput = document.getElementById('e-mail') as HTMLInputElement;
      const passwordInput = document.getElementById('password') as HTMLInputElement;

      if (firstNameInput.value.length >= 2 && lastNameInput.value.length >=  2 && emailInput.value.length >= 6 && passwordInput.value.length >= 6) {
        submitButton.classList.add('activated-button');
      }
    }
  }

  changeSubmitButtonColor();


  /* ===== DROPDOWN ===== */
  /* Opening Menu */
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked =
    (value: string | ((prevState: string) => string)) => () => {
      if (typeof window !== "undefined") {
        setSelectedOption(value);
        const selectedOptionContainer = document.getElementById(
          "selected-option"
        ) as HTMLElement;

        selectedOptionContainer.innerText = `${value}`;
        if (selectedOptionContainer.innerText != "Selecione seu país") {
          selectedOptionContainer.classList.add("selected");
        }
      }

      /* Close menu after choosing option */
      setIsOpen(false);
      console.log(value);
    };

  /* Country Options */
  const countries: readonly string[] = [
    "Brasil",
    "Inglaterra",
    "Estados Unidos",
  ];

  /* ===== SHOW PASSWORD ===== */

  const [showPassword, changeShowPassword] = useState(false);

  const setShowPassword = () => {
    console.log(showPassword)
    showPassword ? changeShowPassword(false) : changeShowPassword(true);  
  }

  return (
    <>
      <FormContainer>
        <FormHeader>
          <h1>Cadastre-se</h1>
          <p>Para começar, insira os dados abaixo:</p>
        </FormHeader>
        <FormContent>
          {/* First Name */}
          <div className="input-wrapper">
            <CFormInput
              type="text"
              id="first-name"
              floatingLabel="Nome"
              placeholder="Nome"
              value={firstName}
              onChange={({ target }) => setFirstName(target?.value)}
            />
            <p className="error-message">{error.firstName ? error.firstName : null}</p>
          </div>



          {/* Last Name */}
          <div className="input-wrapper">
            <CFormInput
              type="text"
              id="last-name"
              floatingLabel="Sobrenome"
              placeholder="Sobrenome"
              value={lastName}
              onChange={({ target }) => setLastName(target?.value)}
            />
            <p className="error-message">{error.lastName ? error.lastName : null}</p>
          </div>

          {/* E-mail */}
          <div className="input-wrapper">
            <CFormInput
              type="email"
              id="e-mail"
              floatingLabel="E-mail"
              placeholder="nome@exemplo.com"
              value={email}
              onChange={({ target }) => setEmail(target?.value)}
            />
            <p className="error-message">{error.email ? error.email : null}</p>
          </div>

          {/* E-mail */}
          <div className="input-wrapper">
            <CFormInput
              type="date"
              id="birthdate"
              floatingLabel="Data de nascimento"
              placeholder="31/12/2022"
              value={birthdate}
              onChange={({ target }) => setBirthdate(target?.value)}
            />
            <p className="error-message">{error.email ? error.email : null}</p>
          </div>



          {/* Password */}

          <div className="input-wrapper">
            <CFormInput
              type={showPassword ? "text" : "password"}
              id="password"
              floatingLabel="Senha"
              placeholder="Senha"
              value={password}
              onChange={({ target }) => setPassword(target?.value)}
            />
            <span onClick={setShowPassword} className="eye-icon" id="show-password">
              <img src={showPassword ? '/hidePassword.png' : '/showPassword.png'} />
            </span>
            <p className="error-message">{error.password ? error.password : null}</p>
          </div>



          {/* Country Dropdown */}
          <div className="input-wrapper">
            <DropdownContainer>
              <DropdownHeader id="country" onClick={toggling}>
                <p id="selected-option">Selecione seu país</p>
                <img
                  id="arrow-icon"
                  src={isOpen ? "/upArrowIcon.svg" : "/downArrowIcon.svg"}
                  alt="Seta Dropdown Menu"
                />
              </DropdownHeader>
              {isOpen && (
                <DropdownListContainer>
                  <DropdownList>
                    {countries.map((country) => (
                      <ListItem
                        onClick={onOptionClicked(country)}
                        key={Math.random()}
                      >
                        {country}
                      </ListItem>
                    ))}
                  </DropdownList>
                </DropdownListContainer>
              )}
            </DropdownContainer>
            <p className="error-message">{error.selectedOption ? error.selectedOption : null}</p>
          </div>


          {/* Biography */}
          <div className="input-wrapper">
            <CFormTextarea
              id="biography"
              floatingLabel="Bio"
              placeholder="Qual a sua biografia?"
              value={biography}
              onChange={({ target }) => setBiography(target?.value)}
            ></CFormTextarea>

            <p className="error-message">{error.biography ? error.biography : null}</p>
          </div>


          <SubmitButton id="submit-button" onClick={handleSubmit}>Cadastrar</SubmitButton>
        </FormContent>
      </FormContainer>
    </>
  );
}
