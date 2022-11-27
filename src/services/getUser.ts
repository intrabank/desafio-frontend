import fetcher from './fetcher';

export const getUser = async (id: number) => {
	return await fetcher(`http://localhost:3000/api/getUser`, { id });
};
