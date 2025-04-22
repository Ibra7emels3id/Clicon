import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// Create 
export const FetchBlog = createAsyncThunk('FetchBlog', async (id) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERVER}/api/blog/${id}`)
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
        builder
            .addCase(FetchBlog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(FetchBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blog = action.payload;
            })
            .addCase(FetchBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default GetBlogIdSlice.reducer;