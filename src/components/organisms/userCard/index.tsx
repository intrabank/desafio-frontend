import { Card, Divider, Text } from '@/components/atoms';
import { UserIcon } from '@/components/molecules';
import { FormatedUser, User } from '@types';

import React from 'react';
import { UserCardContent, UserCardText } from './style';

type Props = {
	user: FormatedUser;
};

const UserCard = ({ user }: Props) => {
	return (
		<Card>
			<UserCardContent>
				<UserIcon placeholder={user.initials} />
				<UserCardText>
					<Text weight='bold' size='xl' color='white'>
						{`Bem vindo ${user.fullName}`}
					</Text>
					<Divider />
					<Text size='md' weight='light'>
						{`Você nasceu no dia ${user.formatedDate}.`}
					</Text>
				</UserCardText>
			</UserCardContent>
		</Card>
	);
};

export default UserCard;
