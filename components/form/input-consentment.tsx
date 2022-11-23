import { styled } from "../../stitches.config"

interface InputProps {
  type: string,
  id: string,
  name: string,
  label: string,
  required: boolean,
  checked: boolean,
  onChange: (event: React.FormEvent) => void,
}

const InputBox = styled('div', {
  position: 'relative',
  width: 'auto',
  fontSize: '$2',
})

const Input = styled('input', {
  width: 'auto',
  '&[type="checkbox"]': {
    fill: 'transparent'
  }
})

const Label = styled('label', {
  position: 'relative',
  left: '8px',
  // padding: '19px 16px',
  color: '$gray200',
  pointerEvents: 'none',
  transition: '0.1s ease-in-out'
})


export const InputConsentment = ({ type, id, name, label, required, checked, onChange }: InputProps) => {
  return (
    <InputBox>
      <Input
        type={type}
        checked={checked}
        id={id}
        name={name}
        required={required}
        onChange={onChange} />
      <Label htmlFor={name}>{label}</Label>
    </InputBox>

  )
}