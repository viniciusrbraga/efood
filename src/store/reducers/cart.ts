import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../pages/Home'

type CartState = {
  eats: Prato[]
  aberto: boolean
}

const initialState: CartState = {
  eats: [],
  aberto: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.aberto = true
    },
    close: (state) => {
      state.aberto = false
    },
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.eats.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.eats.push(action.payload)
      } else {
        alert(`O prato ${prato.nome} já está no carrinho.`)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.eats = state.eats.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
