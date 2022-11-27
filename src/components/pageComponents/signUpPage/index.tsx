import { Text } from '@/components/atoms';
import { Form } from '@/components/organisms';
import Image from 'next/image';
import {
	ImageContainer,
	ImageStyled,
	Section,
	SignUpPageContainer,
	TextContainer,
} from './style';

const SignUpPage = () => {
	return (
		<SignUpPageContainer>
			<Section>
				<Form />
			</Section>
			<Section as='main'>
				<TextContainer>
					<Text size='xl' weight='bold' as='h1'>
						Teste técnico
					</Text>
					<div className='green-divider' />
					<Text as='p' weight='light' size='md'>
						Controle suas contas nacionais e internacionais em um único lugar!
					</Text>
				</TextContainer>
			</Section>
			<ImageContainer>
				<Image
					width={923.85}
					height={880.64}
					src='/assets/Globo.svg'
					alt='Globo'
				/>
			</ImageContainer>
		</SignUpPageContainer>
	);
};

export default SignUpPage;
