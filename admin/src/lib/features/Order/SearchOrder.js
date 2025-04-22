import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


// Get Order Id
export const FetchOrderId = createAsyncThunk('FetchOrderId', async ({ formData }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/order/track`, formData)
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})


// Create Slice
const SearchOrder = createSlice({
    name: "SearchOrder",
    initialState: {
        orderId: null,
        error: null,
        loading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchOrderId.pending, (state, action) => {
            state.loading = true
            state.error = null;
        });
        builder.addCase(FetchOrderId.fulfilled, (state, action) => {
            state.orderId = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(FetchOrderId.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
})
export default SearchOrder.reducer;