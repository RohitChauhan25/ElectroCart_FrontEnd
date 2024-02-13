import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  cart: any[]
  cartId: any[]
  opencart: boolean
}

const initialState: CounterState = {
  cart: [],
  cartId: [],
  opencart: false,
}

export const cartSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    AddToCart: (state: any, action) => {
      const index = state.cart.findIndex((item: any) => item.id === action.payload.id)
      if (index >= 0) {
        state.cart = state?.cart?.map((item: any) => {
          if (item.id === action.payload.id) {
            return { ...item, ['quantity']: item?.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },

    AddToCartId: (state: any, action) => {
      return {
        ...state,
        cartId: [...state.cartId, action.payload],
      }
    },
    OpenCart: (state: any, action) => {
      state.opencart = action.payload
    },
    IncreseQuantity: (state: any, action) => {
      state.cart = state?.cart?.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item?.quantity + 1 }
        } else {
          return item
        }
      })
    },
    DecreaseQuantity: (state: any, action) => {
      state.cart = state?.cart?.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item?.quantity - 1 }
        } else {
          return item
        }
      })
    },
    RemoveFromCart: (state: any, action) => {
      state.cart = state?.cart?.filter((item: any) => item.id !== action?.payload)
      state.cartId = state?.cartId?.filter((item: any) => item !== action?.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddToCart, RemoveFromCart, AddToCartId, OpenCart, IncreseQuantity, DecreaseQuantity } = cartSlice.actions

export default cartSlice.reducer
