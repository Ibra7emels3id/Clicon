import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Create 
export const FetchProducts = createAsyncThunk('FetchProducts', async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/products`)
        return res.data;
    } catch (error) {
        console.error(error);
    }
})




const ProductSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(FetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(FetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default ProductSlice.reducer;