import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            //Has this product (action.payload) in the cart?
            const itemIndex = state.cartItems.findIndex((item) =>
                item.id === action.payload.id
            );

            // update quantity
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            //add new product to cart
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }
        }
    }

});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;