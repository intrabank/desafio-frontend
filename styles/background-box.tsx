import { styled } from "../stitches.config"

export const BackgroundBox = styled('div', {
  variants: {
    media: {
      xl: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'start',
        flexDirection: 'row-reverse',
        padding: '88px 5%',
      },
      md: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 48,
        padding: '77px 5% 77px 5%',
      },
      sm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 48,
        padding: '77px 5% 77px 5%',
      },
    }
  }
})