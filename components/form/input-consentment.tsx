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

const CheckMark = styled('span', {
  // position: 'absolute',
  // top: 0,
  // left: 0,
  height: '20px',
  width: '20px',
  backgroundColor: 'transparent',
  border: 'solid 1px',
  borderColor: '$gray100',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& > svg': {
    display: 'none',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})
const Input = styled('input', {
  // position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
})

const Label = styled('label', {
  cursor: 'pointer',
  paddingLeft: '8px',
  color: '$gray200',
})

const InputBox = styled('div', {
  display: 'flex',
  width: 'fit-content',
  alignSelf: 'center',
  marginTop: '8px',
  cursor: 'pointer',
  fontSize: '$2',
  [`& ${CheckMark}:after > svg`]: {
    display: 'block',
  },
  [`&:hover > ${CheckMark}`]: {
    backgroundColor: '$gray400'
  },
  [`& ${Input}:checked ~ ${CheckMark}`]: {
    backgroundColor: '$seaGreen',
    borderColor: '$seaGreen'
  },
  [`& ${Input}:checked ~ ${CheckMark}:after`]: {
    display: 'block',
  },
  [`& ${Input}:checked ~ ${CheckMark} > svg`]: {
    display: 'block',
  },
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
      <CheckMark>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 4.5625L6.125 11.4375L3 8.3125" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </CheckMark>
      <Label htmlFor={name}>{label}</Label>
    </InputBox>

  )
}