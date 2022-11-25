import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BackgroundBox, BackgroundGlobeFull, Box, Button, Stack, Text } from '../styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Intrabank | Desafio Frontend</title>
        <meta name="description" content="Desafio Frontend Intrabank" />
      </Head>
      <BackgroundGlobeFull />
      <BackgroundBox media={{
        "@initial": "sm",
        "@md": "md",
        "@xl": "xl",
      }}>
        <Box usage={"box"}>
          <Stack size={"large"} media={"sm"}>
            <Text
              size={"large"}
              weight={"heavy"}
            >👋</Text>

            <Text
              size={"medium"}
              weight={"heavy"}
            >
              Desafio Frontend
            </Text>


            <Text
              size={"small"}
              weight={"light"}
            >
              Olá, eu me chamo <Text as="span" weight={"heavy"}>Rômulo Takaoka</Text> e esse é o meu projeto para o <Text as="span" weight={"heavy"}>Desafio Frontend Intrabank</Text>.
            </Text>

            <Text
              size={"small"}
              weight={"light"}
            >
              Para acessar o Formulário de Cadastro, basta clicar no botão abaixo. ⬇️
            </Text>

            <Link href="/cadastro">
              <Button as="button">
                Cadastrar-se
              </Button>
            </Link>

          </Stack>
        </Box>
      </BackgroundBox>
    </>
  )
}

export default Home

