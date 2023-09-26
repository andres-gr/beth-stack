import { style } from '@vanilla-extract/css'

const BtnNoStyles = style({
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 0,
  font: 'inherit',
  margin: 0,
  padding: 0,
  textAlign: 'inherit',
})

const BtnStyles = style([
  BtnNoStyles,
  {
    color: 'limegreen',
    cursor: 'pointer',
  },
])

export { BtnNoStyles, BtnStyles }
