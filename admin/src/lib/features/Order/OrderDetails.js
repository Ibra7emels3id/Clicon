import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// Get Order Details
export const FetchOrderDetails = createAsyncThunk('FetchOrderDetails', async (id) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/order/${id}`)
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
})




// Create Slice
const GetOrderDetails = createSlice({
    name: "GetOrderDetails",
    initialState: {
        order: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchOrderDetails.pending, (state, action) => {
            state.loading = true
            state.error = null;
        });
        builder.addCase(FetchOrderDetails.fulfilled, (state, action) => {
            state.order = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(FetchOrderDetails.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    }
}); 
export default GetOrderDetails.reducer;