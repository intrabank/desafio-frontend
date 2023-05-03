import { ChangeEvent, useState } from "react";
import {
  Button,
  CheckboxWrapper,
  DateInput,
  FormContainer,
  Input,
  Select,
  StyledCheckbox,
  Textarea,
} from "./styles";
import TextComponent from "../../Text/Text";
import { Controller } from "react-hook-form";
import {
  ButtonProps,
  CheckboxProps,
  DateInputProps,
  FormProps,
  InputProps,
  SelectInputProps,
  TextareaInputProps,
} from "./interfaces";
import { ErrorMessage } from "@hookform/error-message";

const Form = ({ children, onSubmit }: FormProps) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};

const FormInput = ({
  name = '',
  placeholder,
  width = "100%",
  password = false,
  bind,
  errors = {},
}: InputProps) => {
  return (
    <>
      <Input
        css={{ width: `${width}` }}
        placeholder={placeholder}
        type={password ? "password" : "text"}
        {...bind}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <TextComponent.error>{message}</TextComponent.error>
        )}
      />
    </>
  );
};

const FormDate = ({
  name = '',
  placeholder,
  width = "100%",
  control,
  onChange,
  errors
}: DateInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=''
        rules={{ required: true }}
        render={() => (
          <DateInput
            mask={"99/99/9999"}
            css={{ width: `${width}` }}
            placeholder={placeholder}
            onChange={({ target }) => onChange(target.value)}
          />
        )}
      />
    </>
  );
};

const SelectInput = ({
  name,
  options,
  control,
  onChange,
  inputName,
}: SelectInputProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Controller
      name={inputName}
      control={control}
      defaultValue=""
      rules={{ required: 'Required' }}
      render={(country) => (
        <Select
          value={selectedValue}
          onChange={handleSelectChange}
          css={{ color: country.field.value ? "white" : "gray" }}
        >
          <option value="">Selecione seu país</option>
          <option value="brazil">Brazil</option>
          <option value="italy">Italy</option>
          <option value="france">France</option>
        </Select>
      )}
    />
  );
};

const FormTextarea = ({ width, placeholder, bind }: TextareaInputProps) => {
  return (
    <Textarea
      css={{ width: `${width}px` }}
      rows={4}
      {...bind}
      placeholder={placeholder}
    />
  );
};

const FormButton = ({ text, type, ...props }: ButtonProps) => {
  return (
    <Button
      type={type}
      css={{ backgroundColor: props.disabled ? "#2A2A2A" : "#00F2B1" }}
      {...props}
    >
      {text}
    </Button>
  );
};

const FormCheckbox = ({ text, bind, size }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox type="checkbox" {...bind} />
      <TextComponent.paragraph size={size}>{text}</TextComponent.paragraph>
    </CheckboxWrapper>
  );
};

Form.input = FormInput;
Form.date = FormDate;
Form.select = SelectInput;
Form.txtarea = FormTextarea;
Form.button = FormButton;
Form.check = FormCheckbox;

export default Form;
