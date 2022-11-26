import { styled } from '../../styles'

export const GlobeContainer = styled('div', {
    flex: 1,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    zIndex: '-1',
    userSelect: 'none',
    position: 'fixed',
    right: '0px',

    'img': {
        mixBlendMode: 'normal',
        opacity: 0.7,
        position: 'absolute',
        right: '0px',
        zIndex: '-1',
    },

    // Style for 768px width
    '@bp1': {

    }
})

export const TextContainer = styled('div', {
    position: 'absolute',
    right: '100px',
    fontFamily: '$default',
    width: '353px',
    height: '147px',

    'h1': {
        fontWeight: 700,
        fontSize: '45px',
        lineHeight: '130%',
    },

    'p': {
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '130%',
    },

    // Style for 1280px width
    '@bp2': {
        display: 'none',
    }
})