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
  position: 'absolute',
  top: 0,
  left: 0,
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
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
})
const InputBox = styled('div', {
  display: 'block',
  position: 'relative',
  paddingLeft: '0px',
  cursor: 'pointer',
  fontSize: '$2',
  // userSelect: 'none',
  [`& ${CheckMark}:after > svg`]: {
    display: 'block',
    // left: '9px',
    // top: '5px',
    // width: '5px',
    // height: '10px',
    // border: 'solid $gray700',
    // borderWidth: '0 3px 3px 0',
    // transform: 'rotate(45deg)'
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

const Label = styled('label', {
  // display: 'inline-block',
  position: 'absolute',
  cursor: 'pointer',
  // backgroundColor: '$redSalsa',
  paddingLeft: '35px',
  // marginLeft: '8px',
  color: '$gray200',
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