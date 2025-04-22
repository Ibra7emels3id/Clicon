import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Delete Category
export const DeleteCategory = createAsyncThunk('DeleteCategory', async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/category/${id}`)
        return res.data;
    } catch (error) {
        console.error(error);
    }
})



// Create Slice
const GetCategoryIdSlice = createSlice({
    name: "GetCategoryId",
    initialState: {
        category: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(DeleteCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(DeleteCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(DeleteCategory.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
    },
})

export default GetCategoryIdSlice.reducer;