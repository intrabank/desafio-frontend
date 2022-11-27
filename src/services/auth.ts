import { FormFields } from '@types';
import fetcher from './fetcher';

export const auth = async (body: FormFields) => {
	return await fetcher(`${window.location.origin}/api/signUp`, body);
};
