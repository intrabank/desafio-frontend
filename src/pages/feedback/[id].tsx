import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container } from "../../styles/global";
import { FeedbackContainer } from "../../styles/pages/feedback";

export default function Page({ firstName, lastName, email, password, country, dateOfBirthday, bio, receiveNotifications }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
     <div>
      <Container>
        <FeedbackContainer>
        {firstName}
        </FeedbackContainer>
      </Container>
     </div>
    </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  let id = context.query.id

  const res = await fetch(`https://637f50932f8f56e28e87af4a.mockapi.io/challenge/${id}`)
  const data = await res.json()
  return {
    props: {  
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      country: data.country,
      dateOfBirthday: data.dateOfBirthday,
      bio: data.bio,
      receiveNotifications: data.receiveNotifications
    },
  }
}