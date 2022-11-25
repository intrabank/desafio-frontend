import { styled } from "../../stitches.config"

interface InputProps {
  value?: string,
  id: string,
  name: string,
  label: string,
  cols: number,
  rows: number,
  required: boolean,
  onChange: (event: React.FormEvent) => void,
}

const InputBox = styled('div', {
  position: 'relative',
  width: 'auto',
  fontSize: '$2',
})

const Input = styled('textarea', {
  width: '100%',
  padding: '19px 16px',
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
  }
})

const Label = styled('label', {
  position: 'absolute',
  left: 0,
  padding: '19px 16px',
  color: '$gray200',
  pointerEvents: 'none',
  transition: '0.1s ease-in-out'
})


export const InputTextarea = ({value, id, name, label, cols, rows, required, onChange }: InputProps) => {
  return (
    <InputBox>
      <Input
        value={value}
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        required={required}
        onChange={onChange} />
      <Label htmlFor={name}>{label}</Label>
    </InputBox>

  )
}