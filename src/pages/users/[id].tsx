import UserPageComponent from '@/components/pageComponents/userPage';
import useUserData from '@/hooks/useUserData';
import { getUser } from '@/services/getUser';
import formatUser from '@/utils/formatters/formatUser';
import { FormatedUser } from '@types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';

type Props = {
	user: FormatedUser;
};

const UserPage = ({ user }: Props) => {
	const { setUser } = useUserData();
	setUser(user);

	return (
		<>
			<Head>
				<meta
					name='description'
					content={`${user.fullName} - Desafio Frontend}`}
				/>
				<title>{user.fullName} - Desafio Frontend</title>
			</Head>
			<UserPageComponent />
		</>
	);
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { id } = context.query;

	const user = await getUser(Number(id));

	if (!user.id) {
		return {
			redirect: {
				permanent: false,
				destination: '/',
			},
		};
	}

	const formattedUser = formatUser(user);

	return {
		props: {
			user: formattedUser,
		},
	};
};
