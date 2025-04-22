import axios from "axios";

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



// Add Product
export const AddProduct = createAsyncThunk('AddProduct', async ( formData ) => {
    console.log(formData);  
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/product`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})





// Create Slice
const AddProductSlice = createSlice({
    name: "AddProduct",
    initialState: {
        product: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddProduct.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(AddProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
            state.error = null;
        });
        builder.addCase(AddProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
})

export default AddProductSlice.reducer;