import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      gray100: '#E7E7E7',
      gray200: '#888888',
      gray300: '#414141',
      gray400: '#2A2A2A',
      gray500: '#202020',
      seaGreen: '#00F2B1',
      skyBlue: '#47E0FF',
      redSalsa: '#FA4D56',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '18px',
      4: '25px',
      5: '45px',
    },
    fontWeights: {
      thin: 300,
      light: 400,
      regular: 500,
      heavy: 700,
    }
  },
});