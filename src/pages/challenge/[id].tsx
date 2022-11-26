/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Container, Rectangle } from "../../styles/global";
import { FeedbackBox, FeedbackContainer, FeedbackContent } from "../../styles/pages/challenge";

export default function Page({ firstName, lastName, email, password, country, dateOfBirthday, bio, receiveNotifications }: InferGetServerSidePropsType<typeof getServerSideProps>) {



  /* ===== GET DATE INFO ===== */
  const date = new Date(dateOfBirthday)

  /* Array to transform month numbers into month names */
  let monName = new Array ("", "janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")

  /* Day */
  let day = date.getDate();

  /* Month */
  let month = monName[date.getMonth()]

  /* Month */
  let year = date.getFullYear();

  return (
  <>
    <div>
      <Container>
        <FeedbackContainer>
          <FeedbackBox>
            <FeedbackContent>
              <div className="user-icon">
                {
                  <p>{firstName.charAt(0)}{lastName.charAt(0)}</p>
                }
              </div>
              <h1 className="user-name">Bem vindo { firstName } { lastName }</h1>

              <Rectangle/>
              
              <div className="user-birth">
                {
                  <p>Você nasceu no dia {day} de {month} de {year} </p>
                }
              </div>
            </FeedbackContent>
          </FeedbackBox>
          <img src="/fullGlobe.svg" alt="Imagem do globo" />
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