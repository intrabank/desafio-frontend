import { styled } from "../stitches.config"

export const BackgroundBox = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  
  variants: {
    media: {
      xl: {
        alignContent: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
        padding: '88px 5%',
      },
      md: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 48,
        padding: '77px 5% 77px 5%',
      },
      sm: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 48,
        padding: '77px 5% 77px 5%',
      },
    }
  }
})