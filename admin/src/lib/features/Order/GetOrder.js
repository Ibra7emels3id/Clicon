import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// Handle Get Order
export const FetchOrder = createAsyncThunk('FetchOrder', async ({ id }) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/order-payment/${id}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
})





const GetOrderSlice = createSlice({
    name: 'getOrder',
    initialState: {
        order: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchOrder.pending, (state, action) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(FetchOrder.fulfilled, (state, action) => {
                state.loading = false
                state.order = action.payload
                state.error = null
            })
            .addCase(FetchOrder.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })
    }
})

export default GetOrderSlice.reducer;
