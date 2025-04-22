import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Delete Blog 
export const DeleteBlog = createAsyncThunk('deleteBlog', async (id) => {
    try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/blog/${id}`)
        return res.data;
    } catch (error) {
        console.error(error);
    }
})



// Create Slice
const GetBlogIdSlice = createSlice({
    name: "GetBlogId",
    initialState: {
        blog: null,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(DeleteBlog.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(DeleteBlog.fulfilled, (state, action) => {
            state.error = null;
            state.blog = action.payload;
            state.loading = false;
        });
        builder.addCase(DeleteBlog.rejected, (state, action) => {
            state.error = action.error.message;
            state.blog = null;
            state.loading = false;
        });
    }
});

export default GetBlogIdSlice.reducer;