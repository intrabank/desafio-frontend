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
  const [birthdate, setbirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [biography, setBiography] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState({} as error);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await CheckError();
    setError(result);
    if(firstName && lastName && email && password && biography && selectedOption) {
      await fetch('https://637f50932f8f56e28e87af4a.mockapi.io/challenge', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
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

    if (!firstName) {
      erros.firstName = "Esse campo é obrigatorio";
      document.getElementById('first-name')?.classList.add('wrong-field')
    } 
    if (!lastName) {
      erros.lastName = "Esse campo é obrigatorio";
    }
    if (!filter.test(email)) {
      erros.email = "Esse campo é obrigatorio";
    }
    if (!password) {
      erros.password = "Esse campo é obrigatorio";
    }
    if (!selectedOption) {
      erros.selectedOption = "Esse campo é obrigatorio";
    }
    if (!biography) {
      erros.biography = "Esse campo é obrigatorio";
    }
    return erros;
  };

  /* ===== DROPDOWN ===== */
  /* Opening Menu */
  const [isOpen, setIsOpen] = useState(false);

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
            <p>{error.firstName ? error.firstName : null}</p>
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
            {error.lastName ? error.lastName : null}
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
            {error.email ? error.email : null}
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
              <img src={showPassword ? '/hidePassword.svg' : '/showPassword.svg'} />
            </span>
            {error.password ? error.password : null}
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
            {error.selectedOption ? error.selectedOption : null}
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

            {error.biography ? error.biography : null}
          </div>


          <SubmitButton onClick={handleSubmit}>Cadastrar</SubmitButton>
        </FormContent>
      </FormContainer>
    </>
  );
}
