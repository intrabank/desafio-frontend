import fetcher from './fetcher';

export const createUser = async (body: unknown) => {
	return await fetcher(
		'https://637f50932f8f56e28e87af4a.mockapi.io/challenge',
		body
	);
};
