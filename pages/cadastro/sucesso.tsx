import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { formatDate } from "../../utils/date";
import { styled } from "../../stitches.config";
import { BackgroundBox, BackgroundGlobeFull, Box, Stack, Text } from "../../styles";

const ProfilePlaceholder = styled('div', {
  backgroundColor: '$skyBlue',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  justifySelf: 'center',
  borderRadius: '100%',
  width: 80,
  height: 80,
})

const Success: NextPage = (props: any) => {
  
  const router = useRouter()

  const firstName: string | undefined = router.query.firstName?.toString()
  const lastName: string | undefined = router.query.lastName?.toString()
  const birthday: string | undefined = router.query.birthday?.toString()
  const formattedBirthday = formatDate(birthday)

  return (
    <>
      <Head>
        <title>Bem vindo(a) ao Intrabank</title>
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
          <ProfilePlaceholder>
            <Text size={"medium"} color={"black"}>{`${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`}</Text>
          </ProfilePlaceholder>
          <Text
            size={"medium"}
            weight={"heavy"}
            align={"left"}
          >Bem vindo {`${firstName || ""} ${lastName || ""}`}</Text>
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
            size={"small"}
            weight={"light"}
            align={"left"}
          >Você nasceu no dia {`${formattedBirthday}`}.</Text>
        </Stack>
        </Box>
      </BackgroundBox>
    </>
  )
}

export default Success