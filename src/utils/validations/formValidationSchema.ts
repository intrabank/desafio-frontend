import * as yup from 'yup';

const schema = yup
	.object({
		firstName: yup.string().required('Nome é obrigatório'),
		lastName: yup.string().required('Sobrenome é obrigatório'),
		birthday: yup.string().required('Data de nascimento é obrigatório'),
		country: yup.string().required('País é obrigatório'),
		email: yup
			.string()
			.email('E-mail inválido')
			.required('Email é obrigatório'),
		bio: yup.string().max(500).required('Bio é obrigatório'),
	})
	.required();
export default schema;
