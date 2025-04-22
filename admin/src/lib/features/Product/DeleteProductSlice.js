import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Delete Product
export const DeleteProduct = createAsyncThunk('DeleteProduct', async (productId) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/product/${productId}`)
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})



// create slice
const DeleteProductSlice = createSlice({
    name: "DeleteProduct",
    initialState: {
        product: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(DeleteProduct.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(DeleteProduct.fulfilled, (state, action) => {
            state.error = null;
            state.product = action.payload;
            state.loading = false;
        });
        builder.addCase(DeleteProduct.rejected, (state, action) => {
            state.error = action.error.message;
            state.product = null;
            state.loading = false;
        });
    }
})

export default DeleteProductSlice.reducer