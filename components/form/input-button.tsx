import { styled } from "../../stitches.config"
import { Button } from "../../styles"

interface InputProps {
  type?: string,
  value?: string,
  disabled?: boolean
}

const InputBox = styled('div', {
  position: 'relative',
  width: 'auto',
  fontSize: '$2',
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