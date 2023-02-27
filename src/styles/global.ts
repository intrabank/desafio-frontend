import { globalCss } from '@stitches/react'
import { styled, css } from './theme'


export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Poppins' },

  'body': {
    backgroundColor: '$gray200',
  }
})