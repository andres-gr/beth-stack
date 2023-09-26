import { style } from '@vanilla-extract/css'

import { BtnNoStyles } from '@/styles'

const ItemContainer = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',
})

const ItemDeleteBtn = style([
  BtnNoStyles,
  {
    color: 'tomato',
    cursor: 'pointer',
  },
])

export { ItemContainer, ItemDeleteBtn }
