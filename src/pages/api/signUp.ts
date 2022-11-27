import { createUser } from '@/services/createUser';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const {
			email,
			firstName,
			lastName,
			birthday,
			password,
			country,
			bio,
			notification,
		} = req.body;
		const dateOfBirthday = new Date(birthday);

		const user = {
			firstName,
			lastName,
			email,
			password,
			country,
			dateOfBirthday,
			bio,
			receiveNotifications: notification,
		};

		const response = await createUser(user);
		const status = !response.id ? 503 : 201;

		return res.status(status).json(response);
	} catch (error) {
		return res.status(500).json({ error: 'Something went wrong' });
	}
};
