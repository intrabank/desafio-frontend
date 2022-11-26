import { styled } from '../../styles'

/* Feedback Container Style */

export const FeedbackContainer = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  'img': {
    position: 'absolute',
    zIndex: '-1',
  }
})

export const FeedbackWrapper = styled('div', {
  display: 'flex',    
})

export const FeedbackBox = styled('div', {

  background: '$cardBackground',
  mixBlendModel: 'normal',
  border: '2px solid #2A2A2A',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '80px',
})

export const FeedbackContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  '.user-name': {
    fontWeight: 700,
    fontSize: '45px',
    lineHeight: '130%',
    textAlign: 'center',
  },

  '.user-icon': {
    width: '78px',
    height: '78px',
    background: '#47E0FF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',

    'p': {
      color: '#000',
      fontSize: '25px',
      fontWeight: 500,
      lineHeight: '130%',
    }
  },

  '.user-birth': {
    fontWeight: 300,
    fontSize: '18px',
    lineHeight: '130%',
    textAlign: 'center',
  }
})
