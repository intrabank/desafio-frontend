/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next'
import { Form } from '../components/Form/Form'
import { Globe } from '../components/Globe/Globe'
import { Container } from '../styles/global'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Form />
        <Globe />
      </Container>
    </>
  )
}

export default Home
