import { styled } from "../stitches.config"
import { Text } from "./text"

export const Stack = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  width: '100%',
  variants: {
    size: {
      large: {
        maxWidth: '600px',
        gap: '32px',
      },
      medium: {
        maxWidth: '320px',
        gap: '16px',
      },
      small: {
        gap: '8px'
      }
    },
    media: {
      sm: {
        flex: 1,
        alignSelf: 'center',
        [`& > ${Text}`]: {
          textAlign: 'center',
        },
        [`& > svg`]: {
          alignSelf: 'center',
        },
        [`& > div`]: {
          alignSelf: 'center',
        },
      },
      md: {
        flex: 1,
        alignSelf: 'center',
        [`& > ${Text}`]: {
          textAlign: 'center',
        },
        [`& > svg`]: {
          alignSelf: 'center',
        },
        [`& > div`]: {
          alignSelf: 'center',
        },
      },
      xl: {
        flex: 1,
        position: 'sticky',
        top: '30vh',
        alignSelf: 'auto',
        [`& > ${Text}`]: {
          textAlign: 'left',
        },
        [`& > svg`]: {
          alignSelf: 'start',
        },
        [`& > div`]: {
          alignSelf: 'start',
        },
      },
    }
  }
})
