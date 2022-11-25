import { styled } from "../../stitches.config"

export interface Options {
  label: string,
  value: string
}

interface InputProps {
  options: Options[],
  value?: string,
  id: string,
  name: string,
  label: string,
  required: boolean,
  onChange: (event: React.FormEvent) => void,
}

const InputBox = styled('div', {
  position: 'relative',
  width: 'auto',
  fontSize: '$2',
})

const Label = styled('label', {
  position: 'absolute',
  left: 0,
  padding: '19px 16px',
  color: '$gray200',
  pointerEvents: 'none',
  transition: '0.1s ease-in-out'
})

const Option = styled('option', {
})

const Select = styled('select', {
  width: '100%',
  padding: '19px 13px',
  background: '$gray500',
  borderColor: '$gray300',
  borderStyle: 'solid',
  borderRadius: '8px',
  borderWidth: '1px',
  color: 'white',

  '&:hover': {
    borderColor: '$gray100',
  },
  '&:focus, &:valid': {
    borderColor: '$gray100',
    borderWidth: '1px',
    paddingTop: '28px',
    paddingBottom: '10px',
  },

  '&:focus ~ Label, &:valid ~ Label': {
    color: '$gray200',
    paddingTop: '10px',
    paddingLeft: '18px',
    fontSize: '$1'
  },
  [`&:invalid ~ ${Label}`]: {
    color: 'transparent',
  },
  [`&:invalid`]: {
    color: '$gray200',
  },
})

export const InputSelect = ({ options, value, id, name, label, required, onChange }: InputProps) => {
  return (
    <InputBox>
      <Select
        value={value}
        id={id}
        name={name}
        required={required}
        onChange={onChange} >
        <Option disabled={true} value="">Selecione seu país</Option>

        {options.map((opt) => {
          return (
            <Option key={opt.label} value={opt.value}>{opt.label}</Option>
          )
        })}
      </Select>
      <Label htmlFor={name}>{label}</Label>
    </InputBox>

  )
}