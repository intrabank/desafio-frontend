import { globalStyles } from '../styles/global';
import type { AppProps } from 'next/app';
import Layout from '../components/templates/layout';
import { UserContextProvider } from 'context/userContext';

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();
	return (
		<UserContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserContextProvider>
	);
}

export default MyApp;
