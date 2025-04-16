import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// Get Product object
export const fetchProductId = createAsyncThunk('fetchProductId', async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/product/${id}`)
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
})


const GetDetailsProductSlice = createSlice({
    name: "editProduct",
    initialState: {
        product: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductId.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProductId.fulfilled, (state, action) => {
            state.error = null;
            state.product = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchProductId.rejected, (state, action) => {
            state.error = action.error.message;
            state.product = null;
            state.loading = false;
        });
    },
})

export default GetDetailsProductSlice.reducer;