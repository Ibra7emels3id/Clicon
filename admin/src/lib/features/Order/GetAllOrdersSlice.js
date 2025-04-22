import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Get All Orders
export const FetchOrders = createAsyncThunk('FetchOrders', async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/orders`)
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})




// Create Slice
const GetAllOrdersSlice = createSlice({
    name: "GetAllOrders",
    initialState: {
        orders: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchOrders.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(FetchOrders.fulfilled, (state, action) => {
            state.error = null;
            state.orders = action.payload;
            state.loading = false;
        });
        builder.addCase(FetchOrders.rejected, (state, action) => {
            state.error = action.error.message;
            state.orders = null;
            state.loading = false;
        });
    }
}); 

export default GetAllOrdersSlice.reducer;