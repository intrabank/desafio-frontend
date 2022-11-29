import { NextPage } from 'next';
import Head from 'next/head';
import SignUpPage from '../components/pageComponents/signUpPage';
import { ToastContainer } from 'react-toastify';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta
					name='description'
					content='Cadastra seu usuário - Desafio Frontend'
				/>
				<title>Cadastra seu usuário - Desafio Frontend</title>
			</Head>
			<SignUpPage />
			<ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
};

export default Home;
