import { Controller, useForm } from 'react-hook-form';
import { Text, Card } from '@/components/atoms';
import { Checkbox, Button } from '@/components/molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import formValidationSchema from '@/utils/validations/formValidationSchema';
import { fields } from './fields';
import {
	Container,
	FormContainer,
	FormFieldsContainer,
	FormHeaderContainer,
} from './style';
import { returnFieldByType } from '@/hooks/useFormUtils';
import { auth } from '@/services/auth';
import { FormFields } from '@types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
	const { push } = useRouter();
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			birthday: '',
			password: '',
			country: '',
			bio: '',
			notification: false,
		},
		resolver: yupResolver(formValidationSchema),
	});

	const onSubmit = async (data: FormFields) => {
		const response = await auth(data);
		const userCreated = response.id;

		if (!userCreated) {
			toast(`Erro ao criar usuário: ${response}`);
			return;
		}

		push('/users/[id]', `/users/${response.id}`);
	};

	return (
		<Container>
			<Card>
				<FormHeaderContainer>
					<Text as='h2' color='white' size='lg' weight='bold'>
						Cadastre-se
					</Text>
					<Text as='p' color='white' size='sm' weight='light'>
						Para começar, insira os dados abaixo:
					</Text>
				</FormHeaderContainer>
				<FormContainer>
					<FormFieldsContainer>
						{fields.map((fieldItem, key) => {
							return (
								<Controller
									key={key}
									control={control}
									name={fieldItem.name}
									render={({
										field: hookFormProps,
										fieldState: { isDirty: fieldTouched },
									}) => {
										return returnFieldByType(
											fieldItem,
											errors,
											hookFormProps,
											fieldTouched
										);
									}}
								/>
							);
						})}
						<Button
							aria-disabled={!isValid}
							disabled={!isValid}
							onClick={handleSubmit(onSubmit)}
						>
							Enviar
						</Button>
					</FormFieldsContainer>

					<Controller
						control={control}
						name='notification'
						render={({ field: hookFormProps }) => {
							return (
								<Checkbox
									text='Desejo receber notificações'
									{...hookFormProps}
								/>
							);
						}}
					/>
				</FormContainer>
			</Card>
		</Container>
	);
};

export default Form;
