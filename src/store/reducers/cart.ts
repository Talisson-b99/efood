import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CardapioItem } from '../../types/restaurant'

type cartState = {
  items: CardapioItem[],
  isOpen: boolean
}

const initialState: cartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<CardapioItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})
export default cartSlice.reducer
export const { open, close, add, remove } = cartSlice.actions