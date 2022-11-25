import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { registerUser } from "../../utils/registration/registration"

import type { FormData } from "../../utils/registration/registration";
import type { Options } from "../../components";

import { InputTextarea, InputSelect, InputField, InputConsentment, InputButton } from "../../components";
import { Form, Stack, Box, BackgroundBox, BackgroundImage, Text } from "../../styles"


const Register: NextPage = (props: any) => {
  
  const router = useRouter()
  const [inputs, setInputs] = useState<FormData>({} as FormData)

  const handleChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement
    const type = target.type
    const name = target.name
    const value = target.value
    const checked = target.checked || false
    setInputs(values => ({ ...values, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const res = await registerUser(inputs)
    const url = {
      pathname: '/cadastro/sucesso',
      query: {
        firstName: res.firstName,
        lastName: res.lastName,
        birthday: res.birthday
      }
    }
    router.push(url)
  }

  return (
    <>
      <Head>
        <title>Intrabank | Cadastre-se</title>
        <meta name="description" content="Desafio Frontend Intrabank" />
      </Head>
      <BackgroundImage />

      <BackgroundBox media={{
        "@initial": "sm",
        "@md": "md",
        "@xl": "xl",
      }}>

        <Stack size={"medium"} media={{
          "@initial": "sm",
          "@md": "md",
          "@xl": "xl",
        }}>
          <Text
            size={"large"}
            weight={"heavy"}
            align={"left"}
          >Teste Técnico</Text>

          <svg
            width="43"
            height="11"
            viewBox="0 0 43 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              width="43"
              height="11"
              rx="5.5"
              fill="#00F2B1" />
          </svg>

          <Text
            size={"regular"}
            weight={"light"}
            align={"left"}
          >Controle suas contas nacionais
            e internacionais em um único lugar!</Text>
        </Stack>

        <Box usage={"box"}>

          <Stack size={"large"}>

            <Stack size={"small"}>
              <Text
                size={"medium"}
                weight={"heavy"}
                align={"center"}
              >Cadastre-se</Text>
              <Text
                size={"small"}
                weight={"thin"}
                align={"center"}
              >Para começar, insira os dados abaixo:</Text>
            </Stack>

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
                value={inputs.birthday}
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
                options={props.data}
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
          </Stack>
        </Box>

      </BackgroundBox>
    </>
  )
}

export async function getStaticProps() {

  try {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json()

    let options: Options[] = []
    data.map((country: any) => {
      options.push(
        {
          "label": `${country.flag} ${country.translations.por.common}`,
          "value": country.translations.por.common
        }
      )
    })

    options.sort(function (a: Options, b: Options) {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
      return 0;
    });

    return {
      props: {
        data: options
      },
    }

  } catch (error) {
    console.log(error)
  }
}

export default Register