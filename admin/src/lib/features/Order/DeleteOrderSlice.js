import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Delete order 
export const DeleteOrder = createAsyncThunk('deleteOrder', async (id) => {
    console.log(id);
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/order/${id}`)
        return res.data;
    } catch (error) {
        console.error(error);
    }
})


// Create Slice
const DeleteOrderSlice = createSlice({
    name: "DeleteOrder",
    initialState: {
        order: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(DeleteOrder.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(DeleteOrder.fulfilled, (state, action) => {
            state.order = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(DeleteOrder.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
});

export default DeleteOrderSlice.reducer;