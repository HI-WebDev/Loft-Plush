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
        }
    }
})


export default cartSlice.reducer;