import HomePage from '@/components/pageComponents/homePage';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Olá :) Desafio Frontend</title>
			</Head>
			<HomePage />
		</>
	);
};

export default Home;
