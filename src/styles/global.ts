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
    fontFamily: '$default',
  },

  'h1, h2, h3, h4 ,h5 ,h6': {
    color: "$title"
  }
})

export const Container = styled('div', {
  padding: '0px 100px',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
})

export const Rectangle = styled('div', {
  background: '$primaryColor',
  width: '43px',
  height: '11px',
  borderRadius: '20px',
  margin: '16px 0',
})