import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import ChallengePage from "../../components/template/ChallengePage/ChallengePage";

export default function Page({
  firstName,
  lastName,
  email,
  password,
  country,
  dateOfBirthday,
  bio,
  receiveNotifications,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>
          Intrabank - {firstName} {lastName}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ChallengePage
        firstName={firstName}
        lastName={lastName}
        dateOfBirthday={dateOfBirthday}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let id = context.query.id;

  const res = await fetch(
    `https://637f50932f8f56e28e87af4a.mockapi.io/challenge/${id}`
  );
  const data = await res.json();

  return {
    props: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      country: data.country,
      dateOfBirthday: data.dateOfBirthday,
      bio: data.bio,
      receiveNotifications: data.receiveNotifications,
    },
  };
};
