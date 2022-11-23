import { useState } from "react";

export function Form() {
  
  interface FormData {
    firstName: string,
    lastName: string,
    email: string,
    birthday: Date,
    password: string,
    country: string,
    bio: string,
    receiveNotifications: boolean,
  }

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

      <label htmlFor="firstName">
        Nome
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Nome"
          required
          onChange={handleChange} />
      </label>
      <br />

      <label htmlFor="lastName">
        Sobrenome
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Sobrenome"
          required
          onChange={handleChange} />
      </label>
      <br />

      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={handleChange} />
      </label>
      <br />

      <label htmlFor="birthday">
        Data de nascimento
        <input
          type="date"
          id="birthday"
          name="birthday"
          placeholder="Data de nascimento"
          required
          onChange={handleChange} />
      </label>
      <br />

      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          required
          onChange={handleChange} />
      </label>
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

      <label htmlFor="receiveNotifications">
        Desejo receber notificações
        <input
          type="checkbox"
          id="receiveNotifications"
          name="receiveNotifications"
          onChange={handleChange} />
      </label>

    </form>
  )
}