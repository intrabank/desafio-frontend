import { fetchUserById } from '@/services/apiServices/fetchUserById';
import { User } from '@types';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { id } = req.body;
		const response = await fetchUserById(id);

		if (!response.id) {
			return res.status(404).json({ error: 'User not found' });
		}

		return res.status(200).json(response as User);
	} catch (error) {
		return res.status(500).json('Something went wrong');
	}
};
