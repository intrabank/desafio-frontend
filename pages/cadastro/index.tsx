import { NextPage } from "next";
import Head from "next/head";
import { styled } from "../../stitches.config";
import { useState } from "react";
import { InputButton } from "../../components";
import { InputConsentment } from "../../components";
import { InputField } from "../../components"
import { InputSelect } from "../../components";
import { InputTextarea } from "../../components";

const Text = styled('p', {})

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px',
  border: 'solid 1px $redSalsa'
})

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

const options = [{
  label: "Brasil",
  value: "BR",
}, {
  label: "Japão",
  value: "JP",
}]

const Register: NextPage = () => {
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
    alert(
      ` Cadastro realizado com sucesso.
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
    <>
      <Head>
        <title>Intrabank | Cadastre-se</title>
        <meta name="description" content="Desafio Frontend Intrabank" />
      </Head>
      <main>
        <Text as={"h1"}>Cadastre-se</Text>
        <p>Para começar, insira os dados abaixo:</p>

        <Form onSubmit={handleSubmit}>
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

          <InputSelect
            id="countries"
            value={inputs.country || ''}
            name="country"
            label="Selecione seu país"
            options={options}
            required={true}
            onChange={handleChange}
          />

          <InputTextarea
            name="bio"
            id="bio"
            value={inputs.bio || ""}
            cols={30}
            rows={3}
            label="Bio"
            required={true}
            onChange={handleChange}
          />

          <InputButton type="submit" value="Cadastrar" />

          <InputConsentment
            type="checkbox"
            checked={inputs.receiveNotifications || false}
            id="receiveNotifications"
            name="receiveNotifications"
            label="Desejo receber notificações"
            onChange={handleChange}
            required={false}
          />
        </Form>

      </main>
    </>
  )
}

export default Register