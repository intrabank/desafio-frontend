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

export interface FormFields {
	firstName: string;
	lastName: string;
	email: string;
	birthday: string;
	password: string;
	country: string;
	bio: string;
	notification: boolean;
}

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	country: string;
	dateOfBirthday: string;
	bio: string;
	receiveNotifications: boolean;
}

export interface FormatedUser extends User {
	fullName: string;
	initials: string;
	formatedDate: string;
}
