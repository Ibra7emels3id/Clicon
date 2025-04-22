import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Edit Product 
export const EditProduct = createAsyncThunk('EditProduct', async ({id , formData}) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/product/${id}` , formData , {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
})



// Create Slice
const EditProductSlice = createSlice({
    name: "EditProduct",
    initialState: {
        product: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EditProduct.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(EditProduct.fulfilled, (state, action) => {
            state.error = null;
            state.product = action.payload;
            state.loading = false;
        });
        builder.addCase(EditProduct.rejected, (state, action) => {
            state.error = action.error.message;
            state.product = null;
            state.loading = false;
        });
    },
});

export default EditProductSlice.reducers;