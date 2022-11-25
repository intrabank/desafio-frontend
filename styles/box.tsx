import { styled } from "../stitches.config";

export const Box = styled('div', {
  variants: {
    usage: {
      box: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifySelf: 'center',
        border: '$gray400 solid 1px',
        backgroundColor: '#1d1d1d80',
        borderRadius: 8,
        padding: '54px 5%',
        width: '100%',
        maxWidth: 600,
        height: 'fit-content',
      },
    }
  }
})