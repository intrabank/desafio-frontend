import { FormatedUser, User } from '@types';
import formatedDate from './formatDate';

const formatUser = (user: User): FormatedUser => {
	return {
		...user,
		fullName: `${user.firstName} ${user.lastName}`,
		initials: `${user.firstName[0]}${user.lastName[0]}`,
		formatedDate: formatedDate(user.dateOfBirthday),
	};
};

export default formatUser;
