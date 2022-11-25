import { styled } from "../stitches.config"

export const Text = styled('p', {
  variants: {
    size: {
      large: {
        fontSize: '$5'
      },
      medium: {
        fontSize: '$4'
      },
      regular: {
        fontSize: '$3'
      },
      small: {
        fontSize: '$2'
      },
      tiny: {
        fontSize: '$1'
      }
    },
    color: {
      white: {
        color: 'white',
      },
      light: {
        color: '$gray100'
      },
      gray: {
        color: '$gray200'
      }
    },
    weight: {
      heavy: {
        fontWeight: '$heavy'
      },
      regular: {
        fontWeight: '$regular'
      },
      light: {
        fontWeight: '$light'
      },
      thin: {
        fontWeight: '$thin'
      },
    },
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      },
    }
  }
})