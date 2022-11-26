import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app';
import Layout from '../components/templates/layout';

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
