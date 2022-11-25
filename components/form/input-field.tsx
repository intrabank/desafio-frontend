import { styled } from "../../stitches.config"

interface InputProps {
  type: string,
  value?: string,
  placeholder?: string,
  id: string,
  name: string,
  label: string,
  required: boolean,
  checked?: boolean,
  onChange: (event: React.FormEvent) => void,
}

const InputBox = styled('div', {
  position: 'relative',
  width: 'auto',
  fontSize: '$2',
})

const Input = styled('input', {
  width: '100%',
  padding: '19px 16px',
  background: '$gray500',
  borderColor: '$gray300',
  borderStyle: 'solid',
  borderRadius: '8px',
  borderWidth: '1px',
  color: 'white',
  
  '&:placeholder-shown ~ Label': {
    color: 'transparent'
  },
  '&:hover': {
    borderColor: '$gray100',
  },
  '&:focus, &:not(:placeholder-shown)': {
    borderColor: '$gray100',
    borderWidth: '1px',
    paddingTop: '28px',
    paddingBottom: '10px',
  },
  '&:focus::placeholder': {
    color: 'transparent',
    transition: '0.1s ease-in-out'
  },
  '&:focus ~ Label, &:not(:placeholder-shown) ~ Label': {
    color: '$gray200',
    paddingTop: '10px',
    paddingLeft: '18px',
    fontSize: '$1'
  },
})

const Label = styled('label', {
  position: 'absolute',
  left: 0,
  padding: '19px 16px',
  color: '$gray200',
  pointerEvents: 'none',
  transition: '0.1s ease-in-out'
})


export const InputField = ({ type, value, placeholder, id, name, label, required, checked, onChange }: InputProps) => {
  return (
    <InputBox>
      <Input
        type={type}
        value={value}
        checked={checked}
        placeholder={placeholder}
        id={id}
        name={name}
        required={required}
        onChange={onChange} />
      <Label htmlFor={name}>{label}</Label>
    </InputBox>

  )
}