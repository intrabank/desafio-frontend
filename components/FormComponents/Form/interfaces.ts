import { FormEventHandler, ReactNode } from "react"
import { Control, FieldValues, UseFormRegisterReturn } from "react-hook-form"

export interface FormProps {
    children: ReactNode;
    onSubmit: FormEventHandler<HTMLFormElement>;
}

export interface InputProps {
    name?: string;
    placeholder?: string;
    width?: string;
    password?: boolean;
    bind?: UseFormRegisterReturn<string>;
    errors?: any
}

export interface DateInputProps extends InputProps {
    control: Control<FieldValues>;
    onChange: (value: string) => void;
}

export interface SelectInputProps extends InputProps, DateInputProps {
    options?: any[];
    inputName: string;
}

export interface TextareaInputProps extends InputProps {
    text?: string;
}

export interface ButtonProps {
    type?: "button" | "reset" | "submit" | undefined;
    text: string;
    disabled: boolean;
}

export interface CheckboxProps {
    text: string;
    size: number;
    bind: UseFormRegisterReturn<string>;
}