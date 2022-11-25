import { styled } from "../stitches.config";

export const BackgroundGlobeFull = styled('div', {
  backgroundImage: 'url("/globe-full.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPositionY: 'center',
  backgroundPositionX: 'center',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: '-1',
})