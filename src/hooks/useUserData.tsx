import { UserContext } from 'context/userContext';
import { useContext } from 'react';

const useUserData = () => {
	const { setUser, user } = useContext(UserContext);

	return { setUser, user };
};

export default useUserData;
