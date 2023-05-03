import { styled } from "@stitches/react";

const white = '#fff'

export const StyledTitle = styled('h1', {
    color: white,
    fontSize: '45px',
    fontWeight: '700'

})

export const StyledMediumTitle = styled('h1', {
    color: white,
    fontSize: '25px',
    fontWeight: '600'

})

export const StyledParagraph = styled('p', {
    color: white,
    display: 'block',
    fontSize: '$customSize',
    fontWeight: '300'
})

export const StyledPhrase = styled('span', {
    fontSize: '$customSize',
    display: 'block'
})

export const StyledError = styled('p', {
    fontSize: '12px',
    color: '#FA4D56',
})