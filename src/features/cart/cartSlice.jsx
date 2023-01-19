import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addOne: (state, action) => {
            let cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1
        }, 

        
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },

        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

export const {addOne, remove, clearCart} = cartSlice.actions

export default cartSlice.reducer