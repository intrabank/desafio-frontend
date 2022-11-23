import { useState } from "react";
import { InputConsentment } from "./input-consentment";
import { InputField } from "./input-field"

interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  birthday: string,
  password: string,
  country: string,
  bio: string,
  receiveNotifications: boolean,
}

export function Form() {
  
  const [inputs, setInputs] = useState<FormData>({} as FormData)

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement
    const type = target.type
    const name = target.name
    const value = target.value
    const checked = target.checked
    setInputs(values => ({ ...values, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    console.log(
      `Cadastro realizado com sucesso.
      Nome: ${inputs.firstName}
      Sobrenome: ${inputs.lastName}
      E-mail: ${inputs.email}
      Data de nascimento: ${inputs.birthday}
      Senha: ${inputs.password}
      País: ${inputs.country}
      Bio: ${inputs.bio}
      Recebe notificações? ${inputs.receiveNotifications}
      `)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField 
        type="text"
        value={inputs.firstName || ''}
        placeholder="Nome"
        id="firstName"
        name="firstName"
        label="Nome"
        onChange={handleChange}
        required={true}
      />
      <br />
      <InputField 
        type="text"
        value={inputs.lastName || ''}
        placeholder="Sobrenome"
        id="lastName"
        name="lastName"
        label="Sobrenome"
        onChange={handleChange}
        required={true}
      />
      <br />
      <InputField 
        type="email"
        value={inputs.email || ''}
        placeholder="E-mail"
        id="email"
        name="email"
        label="E-mail"
        onChange={handleChange}
        required={true}
      />
      <br />
      <InputField 
        type="date"
        value={inputs.birthday || ''}
        placeholder="Data de nascimento"
        id="birthday"
        name="birthday"
        label="Data de nascimento"
        onChange={handleChange}
        required={true}
      />
      <br />
      <InputField 
        type="password"
        value={inputs.password || ''}
        placeholder="Senha"
        id="password"
        name="password"
        label="Senha"
        onChange={handleChange}
        required={true}
      />
      <br />

      <label htmlFor="countries">
        Selecione seu país
        <select
          id="countries"
          name="country"
          required
          onChange={handleChange}>
          <option value="br">Brasil</option>
          <option value="us">Estados Unidos</option>
          <option value="jp">Japão</option>
          <option value="au">Austrália</option>
        </select>
      </label>
      <br />

      <label htmlFor="bio">
        Bio
        <textarea
          name="bio"
          id="bio"
          cols={30}
          rows={5}
          required
          onChange={handleChange}>
        </textarea>
      </label>
      <br />

      <input type="submit" value="Cadastrar" />

      {/* <label htmlFor="receiveNotifications">
        Desejo receber notificações
        <input
          type="checkbox"
          id="receiveNotifications"
          name="receiveNotifications"
          onChange={handleChange} />
      </label> */}

      <InputConsentment
        type="checkbox"
        checked={inputs.receiveNotifications || false}
        id="receiveNotifications"
        name="receiveNotifications"
        label="Desejo receber notificações"
        onChange={handleChange}
        required={true}
      />
    </form>
  )
}