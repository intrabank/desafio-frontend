import { NextPage } from "next";
import Head from "next/head";

const Success: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Bem vindo(a) ao Intrabank</title>
        <meta name="description" content="Desafio Frontend Intrabank" />
      </Head>
      <h1>Hello, New User</h1>
    </>
  )
}

export default Success