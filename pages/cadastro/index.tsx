import { NextPage } from "next";
import Head from "next/head";
import { styled } from "../../stitches.config";
import { useState } from "react";
import { InputButton } from "../../components";
import { InputConsentment } from "../../components";
import { InputField } from "../../components"
import { InputSelect } from "../../components";
import { InputTextarea } from "../../components";

const Text = styled('p', {
  variants: {
    size: {
      large: {
        fontSize: '$5'
      },
      medium: {
        fontSize: '$4'
      },
      regular: {
        fontSize: '$3'
      },
      small: {
        fontSize: '$2'
      },
      tiny: {
        fontSize: '$1'
      }
    },
    color: {
      white: {
        color: 'white',
      },
      light: {
        color: '$gray100'
      },
      gray: {
        color: '$gray200'
      }
    },
    weight: {
      heavy: {
        fontWeight: '$heavy'
      },
      regular: {
        fontWeight: '$regular'
      },
      light: {
        fontWeight: '$light'
      },
      thin: {
        fontWeight: '$thin'
      },
    },
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      },
    }
  }
})

const BackgroundBox = styled('div', {
  variants: {
    media: {
      xl: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'start',
        flexDirection: 'row-reverse',
        padding: '88px 5%',
      },
      md: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 48,
        padding: '77px 5% 77px 5%',
      },
      sm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 48,
        padding: '77px 5% 77px 5%',
      },
    }
  }
})

const Box = styled('div', {
  variants: {
    usage: {
      box: {
        flex: 1,
        alignSelf: 'center',
        border: '$gray400 solid 1px',
        borderRadius: 8,
        padding: '54px 5%',
        width: '100%',
        maxWidth: 600,
      },
    }
  }
})

const BackgroundImage = styled('div', {
  backgroundImage: 'url("/globe.svg")',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  right: 0,
  top: 0,
  width: '50vw',
  height: '100vh',
  zIndex: '-1',
})

const Stack = styled('div', {
  // border: '$redSalsa solid 1px',
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  width: '100%',
  variants: {
    size: {
      large: {
        gap: '32px',
      },
      medium: {
        maxWidth: '320px',
        gap: '16px',
      },
      small: {
        gap: '8px'
      }
    },
    media: {
      sm: {
        flex: 1,
        alignSelf: 'center',
        [`& > ${Text}`]: {
          textAlign: 'center',
        },
        [`& > svg`]: {
          alignSelf: 'center',
        },
      },
      md: {
        flex: 1,
        alignSelf: 'center',
        [`& > ${Text}`]: {
          textAlign: 'center',
        },
        [`& > svg`]: {
          alignSelf: 'center',
        },
      },
      xl: {
        flex: 1,
        position: 'sticky',
        top: '30vh',
        alignSelf: 'auto',
        [`& > ${Text}`]: {
          textAlign: 'left',
        },
        [`& > svg`]: {
          alignSelf: 'start',
        },
      },
    }
  }
})

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px',
  // border: 'solid 1px $redSalsa'
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
    const checked = target.checked || false
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
          </Stack>
        </Box>

      </BackgroundBox>
    </>
  )
}

export default Register