import { ControllerRenderProps, FieldErrorsImpl } from 'react-hook-form';
import Input from '@/components/molecules/input';
import Select from '@/components/molecules/select';
import TextArea from '@/components/molecules/textarea';
import { FieldError, Merge } from 'react-hook-form';
import { FieldsNameType, FieldType, FormFields } from '@types';

type ReactHookFormProps = ControllerRenderProps<FormFields, FieldsNameType>;

const returnInputState = (
	errorsFromInput:
		| FieldError
		| Merge<FieldError, FieldErrorsImpl<any>>
		| undefined,
	fieldTouched: boolean
) => {
	if (errorsFromInput) {
		return 'error';
	}

	if (fieldTouched) {
		return 'active';
	}

	return 'idle';
};

export const returnFieldByType = (
	field: FieldType,
	errors: FieldErrorsImpl,
	hookFormProps: ReactHookFormProps,
	fieldTouched: boolean
) => {
	const touched = field.type === 'date' ? true : fieldTouched;
	const state = returnInputState(errors[field.name], touched);

	switch (field.type) {
		case 'select':
			return (
				<Select
					aria-invalid={errors[field.name] ? 'true' : 'false'}
					role='listbox'
					aria-label={field.label}
					{...hookFormProps}
				/>
			);
		case 'textarea':
			return (
				<TextArea
					{...hookFormProps}
					htmlFor={field.name}
					label={field.label}
					aria-label={field.label}
					state={state}
					role='textbox'
					error={errors[field.name]?.message as string}
					aria-invalid={errors[field.name] ? 'true' : 'false'}
				/>
			);

		default:
			return (
				<Input
					{...hookFormProps}
					htmlFor={field.name}
					error={errors[field.name]?.message as string}
					label={field.label}
					aria-label={field.label}
					type={field.type}
					state={state}
					role='textbox'
					aria-invalid={errors[field.name] ? 'true' : 'false'}
				/>
			);
	}
};

export default returnInputState;
