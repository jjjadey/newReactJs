import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    status: null,
};

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {}

});

export default productSlice.reducer;