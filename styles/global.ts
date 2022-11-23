import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins'
  },
  body: {
    background: "$gray600",
    color: "$gray100"
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "white"
  },
  
})