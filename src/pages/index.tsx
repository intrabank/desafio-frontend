import HomePage from '@/components/pageComponents/homePage';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta name='description' content='Olá :) Desafio Frontend' />
				<title>Olá :) Desafio Frontend</title>
			</Head>
			<HomePage />
		</>
	);
};

export default Home;
