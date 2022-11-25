import { styled } from "../stitches.config";

export const Button = styled('input', {
  width: '100%',
  padding: '19px 16px',
  background: '$seaGreen',
  borderColor: '$seaGreen',
  borderStyle: 'solid',
  borderRadius: '8px',
  borderWidth: '1px',
  color: '$gray600',
  cursor: 'pointer',
  transition: '.2s opacity',

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