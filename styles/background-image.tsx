import { styled } from "../stitches.config";

export const BackgroundImage = styled('div', {
  backgroundImage: 'url("/globe.svg")',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',
  right: 0,
  top: 0,
  width: '50vw',
  height: '100vh',
  zIndex: '-1',
})