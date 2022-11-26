export type FieldsNameType =
	| 'firstName'
	| 'lastName'
	| 'email'
	| 'birthday'
	| 'password'
	| 'country'
	| 'bio'
	| 'notification';

export type FieldsTypesType =
	| 'textarea'
	| 'select'
	| 'email'
	| 'password'
	| 'text'
	| 'date'
	| undefined;

export type FieldType = {
	name: FieldsNameType;
	label: string;
	type: FieldsTypesType;
};

export type FieldState = 'idle' | 'error' | 'active';
