import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Edit Order Status To Server
export const EditOrderStatus = createAsyncThunk('EditOrderStatus', async ({ id, data }) => {
    console.log(id, data);
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/edit-order/${id}`, {data})
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
});



// Create Slice
const EditOrderStatusSlice = createSlice({
    name: "EditOrderStatus",
    initialState: {
        order: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EditOrderStatus.pending, (state, action) => {
            state.loading = true
            state.error = null;
        });
        builder.addCase(EditOrderStatus.fulfilled, (state, action) => {
            state.order = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(EditOrderStatus.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
})

export default EditOrderStatusSlice.reducers;