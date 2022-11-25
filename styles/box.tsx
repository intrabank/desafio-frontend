import { styled } from "../stitches.config";

export const Box = styled('div', {
  variants: {
    usage: {
      box: {
        flex: 1,
        alignSelf: 'center',
        border: '$gray400 solid 1px',
        borderRadius: 8,
        padding: '54px 5%',
        width: '100%',
        maxWidth: 600,
      },
    }
  }
})