import {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
	ReactNode,
} from 'react';
import { FormatedUser } from '@types';

interface UserContextData {
	user: FormatedUser;
	setUser: Dispatch<SetStateAction<FormatedUser>>;
}

export interface UserProviderProps {
	children: ReactNode;
}
export const UserContext = createContext<UserContextData>(
	{} as UserContextData
);

export function UserContextProvider({ children }: UserProviderProps) {
	const [user, setUser] = useState<FormatedUser>({} as FormatedUser);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
