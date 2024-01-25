import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const doubleItem = state.cartItems.find((item) => item.id === newItem.id)

            state.totalQuantity++;

            if (!doubleItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    price: newItem.price,
                    delPrice: newItem.delPrice,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else {
                doubleItem.quantity++
                doubleItem.totalPrice += newItem.price
            }
            // update the amount of each items in the cart
            state.totalAmount = state.cartItems.reduce((acc, item) => {
                return acc + Number(item.price) * Number(item.quantity)
            }, 0)
        },
        deleteFromCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((product) => product.id === newItem);

            if (existingItem) {
                state.cartItems = state.cartItems.filter((product) => product.id !== newItem)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItems.reduce((acc, item) => {
                return acc + Number(item.price) * Number(item.quantity)
            }, 0)
        }
    }
})


export default cartSlice.reducer;
export const cartActions = cartSlice.actions