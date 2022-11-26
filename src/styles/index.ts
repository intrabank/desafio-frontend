/* Theme */ 

import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText } = createStitches({
    theme: {
        colors: {
            title: '#FFF',
            text: '#E7E7E7',
            background: '#121212',
            formLabel: '#888888',
            inputBackground: '#202020',
            cardBackground: 'rgba(29, 29, 29, 0.5);',
            primaryColor: '#00F2B1',
        },
        
        fonts: {
            default: 'Poppins',
        }
    }
});