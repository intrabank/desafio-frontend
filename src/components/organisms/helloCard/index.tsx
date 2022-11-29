import { Card, Text } from '@/components/atoms';
import Link from '@/components/molecules/link';
import { Container } from './style';

const HelloCard = () => {
	return (
		<Card>
			<Container>
				<Text as='h1' color='white' size='lg'>
					Olá seja bem vindo ao meu desafio :)
				</Text>
				<Text weight='light' as='p'>
					Para acessar a página de cadastro de usuário clique no botão abaixo
				</Text>
				<Link href='/signup'>Cadastrar usuário</Link>
			</Container>
		</Card>
	);
};

export default HelloCard;
