import { styled } from "../../stitches.config"

interface InputProps {
  type: string,
  value?: string,
  disabled?: boolean
}

const InputBox = styled('div', {
  position: 'relative',
  width: 'auto',
  fontSize: '$2',
})

const Button = styled('input', {
  width: '100%',
  padding: '19px 16px',
  background: '$seaGreen',
  borderColor: '$seaGreen',
  borderStyle: 'solid',
  borderRadius: '8px',
  borderWidth: '1px',
  color: '$gray600',

  '&:hover': {
    opacity: '0.8'
  },

  '&:disabled': {
    background: '$gray400',
    borderColor: '$gray400',
    color: '$gray200',
    '&:hover': {
      opacity: '1'
    }
  },

})



export const InputButton = ({ type, value, disabled }: InputProps) => {
  return (
    <InputBox>
      <Button
        type={type}
        value={value}
        disabled={disabled} />
    </InputBox>

  )
}