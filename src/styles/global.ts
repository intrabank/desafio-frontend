/* Global Styles */

import { globalCss } from './index'
import { styled } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
  },

  body: {
    background: '$background !important',
    color: '$text !important',
    fontFamily: '$default !important',
  },

  'h1, h2, h3, h4 ,h5 ,h6': {
    color: "$title"
  }
})

export const Container = styled('div', {
  padding: '50px 100px',
  minHeight: '100vh',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',

  '@bp1': {
    // Style for 768px width
    width: '100%',
    padding: '0px 0px',
  }
})

export const Rectangle = styled('div', {
  background: '$primaryColor',
  width: '43px',
  height: '11px',
  borderRadius: '20px',
  margin: '16px 0',
})