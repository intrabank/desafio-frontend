import { styled } from '../../styles'

/* Feedback Container Style */

export const FeedbackContainer = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '/',

  'img': {
    position: 'absolute',
    zIndex: '-1',
  }
})

export const FeedbackWrapper = styled('div', {
  display: 'flex',    
})

export const FeedbackBox = styled('div', {
  width: '820px',
  height: '420px',
  background: '$cardBackground',
  mixBlendModel: 'normal',
  border: '2px solid #2A2A2A',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FeedbackContent = styled('div', {
  '&.full-name': {
    fontWeight: 700,
    fontSize: '45px',
    linHeight: '130%',
    textAlign: 'center',
  }
})
