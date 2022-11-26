import { FieldType } from '@types';

export const fields: FieldType[] = [
	{
		name: 'firstName',
		label: 'Nome',
		type: 'text',
	},
	{
		name: 'lastName',
		label: 'Sobrenome',
		type: 'text',
	},
	{
		name: 'email',
		label: 'E-mail',
		type: 'email',
	},
	{
		name: 'birthday',
		label: 'Data de nascimento',
		type: 'date',
	},

	{
		name: 'password',
		label: 'Senha',
		type: 'password',
	},
	{
		name: 'country',
		label: 'Selecione seu país',
		type: 'select',
	},
	{
		name: 'bio',
		label: 'Bio',
		type: 'textarea',
	},
];
