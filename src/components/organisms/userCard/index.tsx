import { Card, Divider, Text } from '@/components/atoms';
import { UserIcon } from '@/components/molecules';

import React from 'react';
import { UserCardContent, UserCardText } from './style';

type Props = {};

const UserCard = (props: Props) => {
	return (
		<Card>
			<UserCardContent>
				<UserIcon placeholder='EM' />
				<UserCardText>
					<Text weight='bold' size='xl' color='white'>
						Bem vindo Ellon Musk
					</Text>
					<Divider />
					<Text size='md' weight='light'>
						Você nasceu no dia 04 de agosto de 1984.
					</Text>
				</UserCardText>
			</UserCardContent>
		</Card>
	);
};

export default UserCard;
